{keys} = require 'prelude-ls'
Firebase = require \firebase

class AskKK
  (base-url) ->
    @_firebase = null
    if not base-url
      throw new Error "Invalid base URL provided."
    @_firebase = new Firebase base-url
    @_user-id = 1
    @_candidate-id = 1

  /**
   * Set candidate info.  If there is a candidate of the
   * same ID, her/his info will be erased.
   */
  set-candidate: (id, {name, email}, on-complete) ->
    candidate-ref = @_firebase.child \/candidates .child id
    candidate-ref.set {id, name, email}, on-complete

  /**
   * Get candidate info from id.
   * Candidates ID are maintained by administrators.
   */
  get-candidate: (id, on-complete) ->
    candidate-ref = @_firebase.child \/candidates .child id
    snapshot <- candidate-ref.on \value
    on-complete snapshot.val!

  /**
   * Update candidate info.  If there is a candidate of the
   * same ID, only the info specified in data will be updated.
   */
  update-candidate: (id, data, on-complete) ->
    d = {id}
    for k in <[name email]> when data[k]
      d[k] = data[k] 
    candidate-ref = @_firebase.child \/candidates .child id
    candidate-ref.update d, on-complete

  /**
   * Create a user.  User IDs are created by the `push`
   * method of Firebase.  onComplete is a callback whose
   * argument is an object containing user info, including ID.
   */
  create-user: ({name, email}, on-complete) ->
    users-ref = @_firebase.child \/users
    new-ref = users-ref.push!
    error <- new-ref.set {id: new-ref.name!, name, email}
    if error
      on-complete error
    else
      snapshot <- new-ref.on \value
      on-complete snapshot.val!
    
  /**
   * Get user info by ID.
   */
  get-user: (id, on-complete) ->
    user-ref = @_firebase.child \/users .child id
    snapshot <- user-ref.on \value
    on-complete snapshot.val!

  /**
   * Update user info.
   * Only the info specified in the data will be updated.
   * If there are no user of the given ID, nothing happens,
   * and onComplete will be called with a null.
   */
  update-user: (id, data, on-complete) ->
    d = {id}
    for k in <[name email]> when data[k]
      d[k] = data[k]
    user-ref = @_firebase.child \/users .child id
    (snapshot) <- user-ref.on \value
    if snapshot.val!
      (snapshot) <- user-ref.update d
      (snapshot) <- user-ref.on \value
      on-complete snapshot.val!
    else
      on-complete!

  /**
   * Post a question.
   */
  post: ({title, candidates, story}, on-complete) ->
    unless @_user-id
      throw new Error "Need to be a user to post question."
    question-ref = @_firebase.child \questions .push!
    user-posts-ref = @_firebase.child \user_posts .child @_user-id
    candidate-posts-ref = @_firebase.child \candidate_posts

    data = {
      id: question-ref.name!
      author: @_user-id,
      title, candidates, story}

    (error) <- question-ref.set data
    throw new Error "Error posting question: #{error}" if error
    <- user-posts-ref.child question-ref.name! .set true
    for c in keys candidates
      <- candidate-posts-ref.child c .child question-ref.name! .set true
    on-complete data

  /**
   * Sign a question to agree that it should be answered.
   */
  sign: ->

  /**
   * Answer a question.
   */
  answer: ->

  /**
   * Vote an answer as good/not good.
   */
  vote: ->

module.exports.AskKK = AskKK
