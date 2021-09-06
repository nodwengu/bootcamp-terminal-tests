let assert = require("assert");
let greet = require("../greet");

describe("Greet is working fine", function() {
    
    it("should be able to greet Lindani", function() {
      assert.equal("Hello, Lindani", greet("Lindani"));
    });
    
    it("should be able to greet Siyanda", function() {
      assert.equal("Hello, Siyanda", greet("Siyanda"));
    });
    
  });
  

// describe('The greet function', function(){

//     it('should greet Andrew correctly', function(){
//         assert.equal('Hello, Andre', greet('Andrew'));
//     });
//     it('should greet Karen correctly', function(){
//         // this test will fail - can you fix it?
//         assert.equal('Hello, Karen', greet('André'));
//     });
// });
