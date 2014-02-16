require! assert
{ask, firebase} = require \./askkk

describe \Vote, ->
  setup = (on-complete) ->
    error, data <- ask.respond {
      content: 'dummy response'
      petitions: [1 to 3]
    }
    on-complete data.id

  describe \add, (,) -> it
    .. 'should add response up vote count for up votes', (done) ->
      response-id <- setup
      error <- ask.vote response-id, \up
      snapshot <- firebase.child "responses/#{response-id}/votes/up" .once \value
      assert.equal snapshot.val!, 1
      done!
    .. 'should not add respones up vote count for repeated up votes'
    .. 'should minus respones up vote count for withdrawn up votes'
    .. 'should add response down vote count for down votes', (done) ->
      response-id <- setup
      error <- ask.vote response-id, \down
      snapshot <- firebase.child "responses/#{response-id}/votes/down" .once \value
      assert.equal snapshot.val!, 1
      done!
    .. 'should not add respones down vote count for repeated down votes'
    .. 'should minus respones down vote count for withdrawn down votes'
    .. 'should add vote to response meta', (done) ->
      response-id <- setup
      error <- ask.vote response-id, \up
      snapshot <- firebase.child "response_meta/#{response-id}/votes/up/1" .once \value
      assert.equal snapshot.val!, true
      done!
    .. 'should add vote to user meta', (done) ->
      response-id <- setup
      error <- ask.vote response-id, \up
      snapshot <- firebase.child "user_meta/1/votes/#{response-id}" .once \value
      assert.equal snapshot.val!, \up
      done!
