require! \assert
{ask} = require \./askkk

describe \Petition, ->
  describe \create, (,) -> it
    .. 'should write petition info', (done) ->
      data <- ask.create-petition {
        title: 'hello, world!',
        story: 'Let us all say hello!',
        candidates:
          1: true
          2: true
      }
      assert data.id
      data <- ask.get-petition data.id
      assert.equal data.title, 'hello, world!'
      assert.equal data.story, 'Let us all say hello!'
      done!
