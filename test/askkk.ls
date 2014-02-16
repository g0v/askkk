{AskKK} = require \../lib/askkk
module.exports.firebase = firebase = new (require \firebase) 'https://askkkkk.firebaseio.com/'
module.exports.ask = new AskKK {firebase}
module.exports.reset-petitions = (on-complete) ->
  <- firebase.child \petitions .remove
  on-complete!
module.exports.reset-candidates = (on-complete) ->
  error <- firebase.child \candidates .set {
    "-JFuCKMKOH_eCspPxRe1" : {
      "name" : "連勝文",
      "email" : "lsw@gov.tw",
      "id" : "-JFuCKMKOH_eCspPxRe1"
    },
    "-JFuCJcAoUNFQY9NEHZ4" : {
      "name" : "柯文哲",
      "email" : "kk@med.ntu.edu.tw",
      "id" : "-JFuCJcAoUNFQY9NEHZ4"
    }
  }
  on-complete!
