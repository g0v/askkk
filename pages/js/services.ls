{values} = require 'prelude-ls'

askServices = angular.module \askServices, <[firebase]>

askServices.factory \candidateService, [\$firebase, ($firebase) ->
  ref = new Firebase 'https://askkkkk.firebaseio.com/candidates'
  $firebase ref
  ]

askServices.filter \toArray, ->
  (input, attributes) ->
    if not angular.is-object input
      return input
    values input


