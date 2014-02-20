{values, pairs-to-obj, obj-to-pairs} = require 'prelude-ls'

askServices = angular.module \askServices, <[firebase]>

ref = new Firebase 'https://askkkkk.firebaseio.com/'

askServices.factory \authService, <[$firebase $q]> ++ ($firebase, $q) ->
  service = {
    is-candidate: (id, on-complete) ->
      deferred = $q.defer!
      ref.child "users/#{id}/candidate_id" .once \value, (snapshot) ->
        deferred.resolve snapshot.val!
      deferred.promise
    on-login: ({uid, id, provider,
    display-name, first_name, last_name, username, verified,
    email, link, birthday}) ->
      user-ref = ref.child "users/#{id}"
      user-ref.update {
        uid, id, provider, user_id: id
        display-name, first_name, last_name, username, verified,
        email, link, birthday
      }
      snapshot <- user-ref.child 'online' .once \value
      return if snapshot.val!
      user-ref.child \online .set true
      user-ref.child \last_login_time .set new Date!.get-time!
    on-logout: ({id}) ->
      user-ref = ref.child "users/#{id}"
      user-ref.child \online .set false
  }

askServices.factory \candidateService, <[$firebase]> ++ ($firebase) ->
  service = $firebase ref.child \candidates
    ..get = (id) ->
      service.$child id

askServices.factory \questionService, <[$firebase]> ++ ($firebase) ->
  service = $firebase ref.child \questions
    # XXX arguments of `child_added` callback is different from doc
    ..$on \child_added, ({snapshot, prevChild}) ->
      # orderByPriority only works for ref
      service[snapshot.name].addressing = service.$child "#{snapshot.name}/addressing"
      service[snapshot.name].asker = $firebase ref.child "users/#{snapshot.value.asker}"

    ..post = ({title, content, category, addressing, post_date, deadline, asker}, on-complete) ->
      (snapshot) <- ref.child \candidates .once \value
      candidates = snapshot.val!
      # XXX use := to access addressing in upper block
      addressing := pairs-to-obj addressing.map -> [it, { state: \pending } ]
      post-ref <- service.$add {
        title, content, category, addressing, post_date, deadline, asker
        state:
          collecting: \collecting
        responses_count: 0
        signatures_count: 0
        votes_count: 0
      } .then
      let meta = $firebase ref.child \question_index
        meta.$child "collecting/#{post-ref.name!}" .$set true
      let meta = $firebase ref.child \category
        for c in category
          meta.$child "#{c}/#{post-ref.name!}" .$set true
      let meta = $firebase ref.child \candidate_meta
        for c in keys addressing
          meta.$child "#{c}/questions/#{post-ref.name!}" .$set true
      on-complete post-ref if on-complete

    ..get = (question-id) ->
      question-ref = service.$child question-id
        ..$on \loaded, (snap) ->
          question-ref.$id = question-id
          # orderByPriority only works for ref
          question-ref.addressing = question-ref.$child "addressing"
          question-ref.asker = $firebase ref.child "users/#{question-ref.asker}"

askServices.factory \signService, <[$firebase]> ++ ($firebase) ->
  service = {
    signature_threshold: 500
    sign: (user-id, question-id) ->
      snapshot <- ref.child "questions/#{question-id}/signatures/#{user-id}" .once \value
      return if snapshot.val!
      today = new Date!
      ref.child "questions/#{question-id}/signatures/#{user-id}"
        ..set-with-priority {
          date:
            year: today.get-full-year!
            month: today.get-month! + 1
            day: today.get-date!
        }, today.get-time!
      ref.child "questions/#{question-id}/signatures_count"
        ..transaction (current-value) -> current-value + 1
        ..on \value, (snapshot) ->
          console.log snapshot.val!
          if snapshot.val! >= service.signature_threshold
            ref.child "questions/#{question-id}/state/passed" .set \passed
  }

/**
 * Filter an object to an array of its keys (properties) except those given be AngularFire.
 */
askServices.filter \toKeys, ->
  (input, attributes) ->
    | not angular.is-object input => input
    | otherwise => keys input .filter -> it[0] != \$

/**
 * Filter questions by candidate responses.
 */
askServices.filter \respondedByCandidate, ->
  (input, attributes) ->
    | not attributes => null
    | angular.is-array input => input.filter(-> it.addressing[attributes]).filter(-> it.addressing[attributes].state == \responded)
    | not input.addressing => null
    | not input.addressing[attributes] => null
    | otherwise => input.addressing[attributes].state == \responded

/**
 * Filter questions by candidate responses.
 */
askServices.filter \pendedByCandidate, ->
  (input, attributes) ->
    | not attributes => null
    | angular.is-array input => input.filter(-> it.addressing[attributes]).filter(-> it.addressing[attributes].state == \pended)
    | not input.addressing => null
    | not input.addressing[attributes] => null
    | otherwise => input.addressing[attributes].state == \pended
