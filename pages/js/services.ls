{values} = require 'prelude-ls'

askServices = angular.module \askServices, <[firebase]>

ref = new Firebase 'https://askkkkk.firebaseio.com/'

askServices.factory \candidateService, [\$firebase, ($firebase) ->
  service = $firebase ref.child \candidates
]

askServices.factory \askLoginService, [\$firebase, ($firebase) ->
]

/**
 * Filter an object to an array of its values except those given be AngularFire.
 */
askServices.filter \toArray, ->
  (input, attributes) ->
    if not angular.is-object input
      return input
    values input

/**
 * Filter an object to an array of its keys (properties) except those given be AngularFire.
 */
askServices.filter \toKeys, ->
  (input, attributes) ->
    if not angular.is-object input
      return input
    keys input .filter -> it[0] != \$
