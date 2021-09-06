const assert = require('assert');
const totalPhoneBill = require('../totalPhoneBill');

describe('The totalPhoneBill Function', function() {
    it('Should calculate and display "R7.45" if the input is "call, sms, call, sms, sms"', function() {
        assert.equal(totalPhoneBill("call, sms, call, sms, sms"), 'R7.45');
    });


    it('Should return "R0.00" if input string is "call, sms" ', function() {
        assert.equal(totalPhoneBill("call, sms,"), 'R2.75');
    });
});