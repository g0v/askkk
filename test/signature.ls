require! \assert
{ask, firebase} = require \./askkk

new-petition = (on-complete) ->
  data <- ask.create-petition {
    title: 'hello, world!',
    story: 'Let us all say hello!',
    candidates: ["-JFuCKMKOH_eCspPxRe1" "-JFuCJcAoUNFQY9NEHZ4"]
  }
  on-complete data.id

describe \Signature, ->
  describe \sign, (,) -> it

    .. 'should add signature to petition', (done) ->
      petition-id <- new-petition
      error <- ask.sign petition-id

      snapshot <- firebase.child \petition_meta .child petition-id .child \signatures/1 .once \value
      assert snapshot.val!
      done!

    .. 'should increase petition signatures count', (done) ->
      petition-id <- new-petition
      error <- ask.sign petition-id

      snapshot <- firebase.child \petitions .child petition-id .once \value
      assert.equal snapshot.val!.signatures, 1
      done!

    .. 'should add petition to passed when over threshold', (done) ->
      petition-id <- new-petition
      error <- firebase.child \petitions .child petition-id .child \signatures .set 999
      error <- ask.sign petition-id

      snapshot <- firebase.child \petition_index/passed .child petition-id .once \value
      assert snapshot.val!
      done!

    .. 'should add passed status to petition when over threshold', (done) ->
      petition-id <- new-petition
      error <- firebase.child \petitions .child petition-id .child \signatures .set 999
      error <- ask.sign petition-id

      snapshot <- firebase.child \petitions .child petition-id .once \value
      assert snapshot.val!.status.passed
      done!
