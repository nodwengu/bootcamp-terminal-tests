const assert = require('assert');
const yearsAgo = require('../yearsAgo')

describe('The yearsAgo Function', function() {
    it('Should return zero "0" if current year (2021) is passed as input.', function() {
        assert.deepEqual(yearsAgo(2021), 0);
    });

    it('Should return 1 if previous year (2018) is passed as input.', function() {
        assert.equal(yearsAgo(2020), 1);
    });


    it('Should return "Number required" error message if input is not a number', function() {
        assert.equal(yearsAgo('test'), 'Number required');
    });
    
});