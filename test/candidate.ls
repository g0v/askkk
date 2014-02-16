require! \assert
{ask} = require \./askkk

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
