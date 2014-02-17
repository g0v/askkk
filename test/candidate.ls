require! \assert
{ask, firebase} = require \./askkk
{keys} = require 'prelude-ls'

describe \Candidate, ->
  describe \get, (,) -> it
    .. 'should get candidate info for given id.', ->
      data <- ask.get-candidate "-JFxrKQo3Qg19zsW73b1"
      assert.equal data["state"], \join
      assert.equal data["partyEng"], \NONE

    .. 'should get all candidate info when id is null', ->
      data <- ask.get-candidate null
      assert.equal (keys data).length, 6
      assert.equal data["-JFuCKMKOH_eCspPxRe1"].name, \連勝文
      assert.equal data["-JFxrKQo3Qg19zsW73b1"].name, \馮光遠
