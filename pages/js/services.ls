{values} = require 'prelude-ls'

askServices = angular.module \askServices, <[firebase]>

ref = new Firebase 'https://askkkkk.firebaseio.com/'

askServices.factory \candidateService, [\$firebase, ($firebase) ->
  service = $firebase ref.child \candidates
]

askServices.factory \questionService, [\$firebase, ($firebase) ->
  service = $firebase ref.child \questions

  service.post = ({title, content, category, addressing, post_date, deadline}, on-complete) ->
    post-ref <- service.$add({
      title, content, category, addressing, post_date, deadline,
      state: \open
      vote: { length: 0 }
      signature: { length: 0 }
    }).then
    let meta-ref = $firebase ref.child \question_index
      meta-ref.$child "open/#{post-ref.name!}" .$set true
    let meta-ref = $firebase ref.child \category
      for c in category
        meta-ref.$child "#{c}/#{post-ref.name!}" .$set true
    let meta-ref = $firebase ref.child \candidate_meta
      for c in addressing
        meta-ref.$child "#{c}/questions/#{post-ref.name!}" .$set true
    on-complete post-ref

  # XXX arguments of `child_added` callback is different from doc
  service.$on \child_added, ({snapshot, prevChild}) ->
    service[snapshot.name].addressing = for c in snapshot.value.addressing
      $firebase ref.child "candidates/#{c}"

  service.get = (id) ->
    post-ref = service.$child id
    post-ref.$on \loaded, (snap) ->
      post-ref.addressing = for c in post-ref.addressing
        $firebase ref.child "candidates/#{c}"
    post-ref

  service
]

/**
 * Filter an object to an array of its keys (properties) except those given be AngularFire.
 */
askServices.filter \toKeys, ->
  (input, attributes) ->
    if not angular.is-object input
      return input
    keys input .filter -> it[0] != \$
