{AskKK} = require \../lib/askkk
require! \assert
firebase = new (require \firebase) 'https://askkkkk.firebaseio.com/'

ask = new AskKK {firebase}

reset-users = (on-complete) ->
  (error) <- firebase.child \users/-JFpHNE3D4AIERz6lo_4 .set {
    name: \soidid
    email: \soidid@earth
    id: \-JFpHNE3D4AIERz6lo_4
  }
  on-complete!

describe \User, ->
  describe \create, (,) -> it
    .. 'should write user info', (done) ->
      <- reset-users
      data <- ask.create-user {name: \KP, email: \kp@med.ntu.edu.tw}
      data <- ask.get-user data.id
      assert.equal \KP, data.name
      assert.equal \kp@med.ntu.edu.tw, data.email
      done!
