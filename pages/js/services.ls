{values} = require 'prelude-ls'

askServices = angular.module \askServices, <[firebase]>

ref = new Firebase 'https://askkkkk.firebaseio.com/'

askServices.factory \candidateService, [\$firebase, ($firebase) ->
  service = $firebase ref.child \candidates
]

askServices.factory \questionService, [\$firebase, ($firebase) ->
  service = $firebase ref.child \questions
  service.post = ({title, content, category, addressing, post_date}) ->
    post-ref <- service.$add({title, content, category, addressing, post_date, state: \open}).then
    let meta-ref = $firebase ref.child \question_index
      meta-ref.$child "open/#{post-ref.name!}" .$set true
    let meta-ref = $firebase ref.child \category
      for c in category
        meta-ref.$child "#{c}/#{post-ref.name!}" .$set true
    let meta-ref = $firebase ref.child \candidate_meta
      for c in addressing
        meta-ref.$child "#{c}/questions/#{post-ref.name!}" .$set true
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
