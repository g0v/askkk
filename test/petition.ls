require! \assert
{ask, firebase} = require \./askkk

describe \Petition, ->
  describe \create, (,) -> it

    .. 'should write petition info', (done) ->
      data <- ask.create-petition {
        title: 'hello, world!',
        story: 'Let us all say hello!',
        candidates: ["-JFuCJcAoUNFQY9NEHZ4"]
      }
      data <- ask.get-petition data.id
      assert.equal data.title, 'hello, world!'
      assert.equal data.story, 'Let us all say hello!'
      assert.equal data.candidates["-JFuCJcAoUNFQY9NEHZ4"], true
      done!

    .. 'should add to candidate pentition list', (done) ->
      data <- ask.create-petition {
        title: 'hello'
        story: 'hello'
        candidates: ["-JFuCKMKOH_eCspPxRe1"]
      }

      snapshot <- firebase.child \candidate_meta/-JFuCKMKOH_eCspPxRe1/petitions .child data.id .once \value
      assert snapshot.val!
      done!
