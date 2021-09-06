const assert = require('assert');
const sum = require('../sum');

describe ("The sum function", function() {
    it("It should be able to return the sum of 2 numbers", function() {
        assert.equal(12, sum(10, 2));
    })
});

