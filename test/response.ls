require! \assert
{ask, firebase} = require \./askkk

describe \Response, ->
  describe \respond, (,) -> it
    .. 'should attach a response to to petition', (done) ->
      data <- ask.create-petition {
        title: 'Should we promote world peace?'
        story: null
        candidates: ["-JFuCJcAoUNFQY9NEHZ4"]
      }
      petition-id = data.id
      error, data <- ask.respond {
        petitions: [petition-id]
        content: 'No, we should limit ourselves to this Galaxy.'
      }
      snapshot <- firebase.child \petitions .child petition-id .child \responses .child data.id .once \value
      assert snapshot.val!
      done!
