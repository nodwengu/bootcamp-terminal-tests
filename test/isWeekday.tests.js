const assert = require('assert');
const isWeekday = require('../isWeekday');

describe('isWeekday function', function() {
    // Expected
    it('Should return True if valid day of the week is passed as input', function() {
        var day = 'Friday';
        assert.equal(isWeekday(day), true);
    });
    
    it('Should return true if entered day is all lower case letters', function() {
        var day = 'friday';
        assert.equal(isWeekday(day), false);
    });
  
})
