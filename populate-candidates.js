// Generated by LiveScript 1.2.0
var fs, Firebase, candidatesRef;
fs = require('fs');
Firebase = require('firebase');
candidatesRef = new Firebase('https://askkkkk.firebaseio.com/candidates');
candidatesRef.set(JSON.parse(fs.readFileSync('candidates.json')), function(error){
  if (error) {
    return console.log(error);
  }
});