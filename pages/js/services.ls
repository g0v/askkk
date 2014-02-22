{values, pairs-to-obj, obj-to-pairs} = require 'prelude-ls'

askServices = angular.module \askServices, <[firebase]>

ref = new Firebase 'https://askkkkk.firebaseio.com/'

const signature_threshold = 500

askServices.factory \authService, <[$firebase $q]> ++ ($firebase, $q) ->
  service = {
    is-candidate: (id) ->
      deferred = $q.defer!
      ref.child "users/#{id}/candidate_id" .once \value, (snapshot) ->
        deferred.resolve snapshot.val!
      deferred.promise
    get: (id) ->
      deferred = $q.defer!
      ref.child "users/#{id}" .once \value, (snapshot) ->
        deferred.resolve snapshot.val!
      deferred.promise
    on-login: ({uid, id, provider,
    display-name = '', first_name = '', last_name = '', username = '', verified = '',
    email = '', link = '', birthday = ''}) ->
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

askServices.factory \userService, <[$firebase]> ++ ($firebase) ->
  service = {
    get: (id) ->
      $firebase ref.child "users/#{id}"
  }

askServices.factory \questionService, <[$firebase $q]> ++ ($firebase, $q) ->
  service = $firebase ref.child \questions
    # XXX arguments of `child_added` callback is different from doc
    ..$on \child_added, ({snapshot, prevChild}) ->
      # orderByPriority only works for ref
      service[snapshot.name].$addressing = service.$child "#{snapshot.name}/addressing"
      service[snapshot.name].$asker = $firebase ref.child "users/#{snapshot.value.asker}"
      service[snapshot.name].postResponse = ({postDate, responser, content}) ->
        ref.child "questions/#{snapshot.name}/addressing/#{responser}/state" .set \responded
        ref.child "questions/#{snapshot.name}/responses_count" .transaction (current-value) -> current-value + 1
        # return a promise
        service.$child "questions/#{snapshot.name}/responses" .$add {
          responser
          postDate:
            year: postDate.getFullYear!
            month: postDate.getMonth! + 1
            day: postDate.getDate!
          upVotesCount: 0
          downVotesCount: 0
          content: content.split /\n\n/
        }

    ..$on \child_changed, ({snapshot, prevChild}) ->
        service[snapshot.name].$addressing = service.$child "#{snapshot.name}/addressing"
        service[snapshot.name].$asker = $firebase ref.child "users/#{snapshot.value.asker}"

    ..get = (question-id) ->
      question-ref = service.$child question-id
        ..$on \loaded, (snap) ->
          question-ref.$id = question-id
          # orderByPriority only works for ref
          question-ref.$addressing = question-ref.$child "addressing"
          question-ref.$responses = question-ref.$child "responses"
          question-ref.$asker = $firebase ref.child "users/#{question-ref.asker}"
          question-ref.postResponse = ({postDate, responser, content}) ->
            ref.child "questions/#{question-id}/addressing/#{responser}/state" .set \responded
            ref.child "questions/#{question-id}/responses_count" .transaction (current-value) -> current-value + 1
            # return a promise
            deferred = $q.defer!
            r-ref = ref.child "questions/#{question-id}/responses" .push!
            r-ref.set {
              id: r-ref.name!
              responser
              postDate:
                year: postDate.getFullYear!
                month: postDate.getMonth! + 1
                day: postDate.getDate!
              upVotesCount: 0
              downVotesCount: 0
              content: content.split /\n\n/
            }, -> deferred.resolve!
            deferred.promise

    ..post = ({title, content, category, addressing, post_date, deadline, asker}, on-complete) ->
      (snapshot) <- ref.child \candidates .once \value
      candidates = snapshot.val!
      # XXX use := to access addressing in upper block
      addressing := pairs-to-obj addressing.map -> [it, { state: \pending } ]
      content .:= split /\n\n/
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

    ..upVoteResponse = ({questionId, responseId, userId}) ->
      r-ref = ref.child "questions/#{questionId}/responses/#{responseId}"
      snapshot <- r-ref.child "votes/#{userId}" .once \value
      return if snapshot.val!
      r-ref.child "upVotes/#{userId}" .set new Date!.get-time!
      r-ref.child "upVotesCount" .transaction -> it + 1
      r-ref.child "votes/#{userId}" .set new Date!.get-time!
      r-ref.child "votesCount" .transaction -> it + 1
    ..downVoteResponse = ({questionId, responseId, userId}) ->
      r-ref = ref.child "questions/#{questionId}/responses/#{responseId}"
      snapshot <- r-ref.child "votes/#{userId}" .once \value
      return if snapshot.val!
      r-ref.child "downVotes/#{userId}" .set new Date!.get-time!
      r-ref.child "downVotesCount" .transaction -> it + 1
      r-ref.child "votes/#{userId}" .set new Date!.get-time!
      r-ref.child "votesCount" .transaction -> it + 1

askServices.factory \signService, <[$firebase]> ++ ($firebase) ->
  service = {
    signature_threshold
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
          if snapshot.val! >= signature_threshold
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
  (input, candidate-id) ->
    | not candidate-id => null
    | angular.is-array input => input.filter(-> it.addressing[candidate-id]).filter(-> it.addressing[candidate-id].state == \responded)
    | not input.addressing => null
    | not input.addressing[candidate-id] => null
    | otherwise => input.addressing[candidate-id].state == \responded

/**
 * Filter questions by candidate responses.
 */
askServices.filter \pendedByCandidate, ->
  (input, candidate-id) ->
    | not candidate-id => null
    | angular.is-array input => input.filter(-> it.addressing[candidate-id]).filter(-> it.addressing[candidate-id].state == \pending)
    | not input.addressing => null
    | not input.addressing[candidate-id] => null
    | otherwise => input.addressing[candidate-id].state == \pending

/**
 * Filter questions by signature threshold.
 */
askServices.filter \passedThreshold, ->
  (input) ->
    | not input => null
    | angular.is-array input => input.filter(-> it.state.passed)
    | input.state.passed => input
    | otherwise => null
