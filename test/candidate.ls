{AskKK} = require \../lib/askkk
require! \assert
firebase = new (require \firebase) 'https://askkkkk.firebaseio.com/'
ask = new AskKK {firebase}

reset-candidate = (on-complete) ->
  (error) <- firebase.child \candidates .set {
    1: {
      "name" : "柯文哲",
      "email" : "kk@med.ntu.edu.tw",
      "id" : 1
    }
    2: {
    "name" : "連勝文",
    "email" : "lsw@gov.tw",
    "id" : 2
    }
  }
  on-complete!

#describe \Candidate, ->
  #describe \update, (,) -> it
    #.. 'should update candidate info', (done) ->
      #<- reset-candidate
      #<- ask.update-candidate 1, {
        #name: 'PK'
        #nickname: 'pk@gov.tw'
      #}
      #(data) <- ask.get-candidate 1
      #assert.equal data.name, \PK
      #assert.equal data.email, \pk@gov.tw
      #done!
