{values} = require 'prelude-ls'

user-id = 1

askServices = angular.module \askServices, <[firebase]>

ref = new Firebase 'https://askkkkk.firebaseio.com/'

askServices.factory \candidateService, <[$firebase]> ++ ($firebase) ->
  $firebase ref.child \candidates

askServices.factory \questionService, <[$firebase]> ++ ($firebase) ->
  service = $firebase ref.child \questions
    # XXX arguments of `child_added` callback is different from doc
    ..$on \child_added, ({snapshot, prevChild}) ->
      service[snapshot.name].addressing = for c in snapshot.value.addressing
        $firebase ref.child "candidates/#{c}"

    ..post = ({title, content, category, addressing, post_date, deadline}, on-complete) ->
      post-ref <- service.$add {
        title, content, category, addressing, post_date, deadline,
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
  }

/**
 * Filter an object to an array of its keys (properties) except those given be AngularFire.
 */
askServices.filter \toKeys, ->
  (input, attributes) ->
    | not angular.is-object input => input
    | otherwise => keys input .filter -> it[0] != \$
