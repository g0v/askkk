require! \assert
{ask, firebase} = require \./askkk

describe \Signature, ->
  describe \sign, (,) -> it
    .. 'should be ok to sign', (done) ->
      data <- ask.create-petition {
        title: 'hello, world!',
        story: 'Let us all say hello!',
        candidates:
          1: true
          2: true
      }
      petition-id = data.id
      data <- ask.sign petition-id
      snapshot <- firebase.child \petition_meta .child petition-id .child \signatures/1 .on \value
      assert snapshot.val!
      done!
