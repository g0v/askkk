require! \fs
Firebase = require \firebase

candidates-ref = new Firebase 'https://askkkkk.firebaseio.com/candidates'
error <- candidates-ref.set JSON.parse fs.read-file-sync \candidates.json
console.log error if error

