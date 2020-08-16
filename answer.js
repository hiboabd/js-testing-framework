"use strict";
(function(exports){
  function _compare_2_array(a1, a2) {
    // compare arrays
  }
  function expect(actual) {
    return {
      toEqual: function(expected){
        if (actual == expected) {
          console.log("Pass")
        } else {
          console.log("Fail")
        }
      },
      toBeAnArray: function(){
        if (actual.constructor.name === "Arrays") {
          console.log("Pass")
        } else {
          console.log("Fail")
        }
      }
    }
  }
  function it(label, callback) {
    console.log(`Test: ${label}`)
    callback()
  }
  exports.it = it
  exports.expect = expect
})(this)
///----
// var a = expect(2+2)
// a.toEqual(4)
it('2 + 2 is equal to 4', function(){
  expect(2+2).toEqual(4)
})
it('2 + 3 is equal to 4', function(){
  expect(2+3).toEqual(4)
})
it('[] is an array', function(){
  expect([]).toBeAnArray()
})
// it('2 + 3 is equal to 4', function(){
//   expect(2+3).toEqual(4)
// })
