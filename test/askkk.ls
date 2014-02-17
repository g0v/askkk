{AskKK} = require \../lib/askkk
module.exports.firebase = firebase = new (require \firebase) 'https://askkkkk.firebaseio.com/'
module.exports.ask = new AskKK {firebase}
module.exports.reset-petitions = (on-complete) ->
  <- firebase.child \petitions .remove
  on-complete!
