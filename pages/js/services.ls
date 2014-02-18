{values} = require 'prelude-ls'

askServices = angular.module \askServices, <[firebase]>

ref = new Firebase 'https://askkkkk.firebaseio.com/'

askServices.factory \candidateService, [\$firebase, ($firebase) ->
  $firebase ref.child \candidates
]

askServices.factory \askLoginService, [\$firebase, ($firebase) ->
]

askServices.filter \toArray, ->
  (input, attributes) ->
    if not angular.is-object input
      return input
    values input


