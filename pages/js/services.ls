{values} = require 'prelude-ls'

candidate-id = \-JFxrKQo3Qg19zsW73b1

askServices = angular.module \askServices, <[firebase]>

ref = new Firebase 'https://askkkkk.firebaseio.com/'

askServices.factory \authService, <[$firebase]> ++ ($firebase) ->
  service = {
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
  $firebase ref.child \candidates

askServices.factory \questionService, <[$firebase]> ++ ($firebase) ->
  service = $firebase ref.child \questions
    # XXX arguments of `child_added` callback is different from doc
    ..$on \child_added, ({snapshot, prevChild}) ->
      service[snapshot.name].addressing = for c in snapshot.value.addressing
        $firebase ref.child "candidates/#{c}"
      service[snapshot.name].asker = $firebase ref.child "users/#{snapshot.value.asker}"

    ..post = ({title, content, category, addressing, post_date, deadline, asker}, on-complete) ->
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
        for c in addressing
          meta.$child "#{c}/questions/#{post-ref.name!}" .$set true
      on-complete post-ref if on-complete

    ..get = (question-id) ->
      question-ref = service.$child question-id
        ..$on \loaded, (snap) ->
          question-ref.$id = question-id
          question-ref.addressing = for c in question-ref.addressing
            $firebase ref.child "candidates/#{c}"
          question-ref.asker = $firebase ref.child "users/#{question-ref.asker}"

askServices.factory \signService, <[$firebase]> ++ ($firebase) ->
  {
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
          if snapshot.val! >= 500
            ref.child "questions/#{question-id}/state/passed" .set \passed
  }

/**
 * Filter an object to an array of its keys (properties) except those given be AngularFire.
 */
askServices.filter \toKeys, ->
  (input, attributes) ->
    | not angular.is-object input => input
    | otherwise => keys input .filter -> it[0] != \$
