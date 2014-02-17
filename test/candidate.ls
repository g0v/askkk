require! \assert
{ask, firebase} = require \./askkk
{keys} = require 'prelude-ls'

describe \Candidate, ->
  describe \get, (,) -> it
    .. 'should get candidate info for given id.', (done) ->
      data <- ask.get-candidate "-JFxrKQo3Qg19zsW73b1"
      assert.equal data["state"], \join
      assert.equal data["partyEng"], \NONE
      done!

    .. 'should get a list of all candidate info when id is null', (done) ->
      data <- ask.get-candidate null
      assert.equal (keys data).length, 5
      assert.equal data[0].name, \柯文哲
      assert.equal data[1].name, \連勝文
      done!
