{keys, values, pairs-to-obj} = require 'prelude-ls'
#Firebase = require \firebase

class AskKK
  ({firebase-url = null, firebase = null}) ->
    if firebase
      @_firebase = firebase
    else if firebase-url
      @_firebase = new Firebase firebase-url
    else
      throw new Error "No Firebase provided."
    @_user-id = 1
    @_candidate-id = 1
    @_petition-threshold = 1000

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
  get-candidate: (id = null, on-complete) ->
    candidate-ref = if id
      then @_firebase.child \/candidates .child id
      else @_firebase.child \/candidates
    snapshot <- candidate-ref.on \value
    on-complete if id
      then snapshot.val!
      else values snapshot.val!

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
   * Create a petition.
   */
  create-petition: ({title, candidates, story}, on-complete) ->
    throw new Error "Need to be a user to create a petition." unless @_user-id

    petition-ref = @_firebase.child \petitions .push!
    user-petition-ref = @_firebase.child \user_meta .child @_user-id .child \petitions
    candidate-meta-ref = @_firebase.child \candidate_meta
    petition-index-ref = @_firebase.child \petition_index

    data = {
      id: petition-ref.name!
      author: @_user-id
      candidates: (candidates.map -> [it, true]) |> pairs-to-obj
      title, story
    }

    (error) <- petition-ref.set data
    throw new Error "Error created a petition: #{error}" if error
    user-petition-ref.child petition-ref.name! .set true
    for ca in candidates
      candidate-meta-ref.child ca .child \petitions .child petition-ref.name! .set true
    petition-index-ref.child \open .child petition-ref.name! .set true

    on-complete data

  /**
   * Get petition info
   */
  get-petition: (id, on-complete) ->
    (snapshot) <- @_firebase.child \petitions .child id .on \value
    on-complete snapshot.val!

  /**
   * Sign an open petition to agree that it should be answered.
   * Example: sign('-JFsstiW6QzJkRG3kh09', function (error) {})
   */
  sign: (id, on-complete) ->
    throw new Error "Need to be a user to sign a petition." unless @_user-id
    petition-ref = @_firebase.child \petitions .child id
    petition-meta-ref = @_firebase.child \petition_meta .child id
    signature-ref = petition-meta-ref.child \signatures .child @_user-id
    passed-ref = @_firebase.child \petition_index/passed .child id

    (snapshot) <- signature-ref.once \value
    return on-complete null if snapshot.val!

    (error) <- signature-ref .set true
    on-complete error if error

    error, committed, snapshot <- petition-ref.child \signatures .transaction (current-value) -> current-value + 1
    return on-complete error if error
    return on-complete null if snapshot.val! < @_petition-threshold
    error <- passed-ref.set true
    return on-complete error if error
    error <- petition-ref.child \status/passed .set true
    on-complete error

  /**
   * Respond to a petition.
   */
  respond: ({content, petitions}, on-complete) ->
    response-ref = @_firebase.child \responses .push!
    petitions-ref = @_firebase.child \petitions
    data = {
      id: response-ref.name!
      cantitate: @_candidate-id
      petitions: (petitions.map -> [it, true]) |> pairs-to-obj
      content
    }
    error <- response-ref.set data
    on-complete error if error
    for p in petitions
      petitions-ref.child p .child \responses .child response-ref.name! .set true
    on-complete null, data

  /**
   * Vote an answer as good/not good.
   */
  vote: (response-id, updown = null, on-complete) ->
    response-ref = @_firebase.child "responses/#{response-id}/votes" .child if updown == \up
    then \up
    else \down
    response-meta-ref = @_firebase.child "response_meta/#{response-id}/votes/#{updown}/#{@_user-id}"
    user-meta-ref = @_firebase.child "user_meta/#{@_user-id}/votes/#{response-id}"
    error, committed, snapshot <- response-ref.transaction (current-value) -> current-value + 1
    return on-complete error if error
    error <- response-meta-ref.set true
    error <- user-meta-ref.set updown
    on-complete error

#module.exports.AskKK = AskKK
