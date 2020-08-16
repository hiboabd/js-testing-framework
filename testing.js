(function (exports){
  function it(statement, callback){
    console.log(`Test: ${statement}`)
    callback()
  }

  function expect(assertion){
    return {
      toEqual: function(expectation){
        if(assertion === expectation){
          console.log(`Pass. ${assertion} equals ${expectation}`)
        } else {
          console.log(`Fail. ${assertion} does not equal ${expectation}`)
        }
      },

      isTrue: function(expectation){
        if(expectation){
          console.log(`Pass. ${expectation} is truthy.`)
        } else {
          console.log(`Fail. ${expectation} is not truthy.`)
        }
      },

      toBeGreaterThan: function(expectation){
        if(assertion > expectation){
          console.log(`Pass. ${assertion} is greater than ${expectation}`)
        } else {
          console.log(`Fail. ${assertion} is not greater than ${expectation}`)
        }
      },

      toBeLessThan: function(expectation){
        if(assertion < expectation){
          console.log(`Pass. ${assertion} is less than ${expectation}`)
        } else{
          console.log(`Fail. ${assertion} is not less than ${expectation}`)
        }
      }
    }
  }
  exports.it = it
  exports.expect = expect

})(this)
