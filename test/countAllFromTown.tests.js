const assert = require('assert');
const countAllFromTown = require('../countAllFromTown');

describe('The countAllFromTown Function', function() {
    
    it('Should return 3 when the string "CA 124,CY 567,CA 345,CJ 456,CA 341" is passed as input', function() {
        assert.equal(3, countAllFromTown('CA 124,CY 567,CA 345,CJ 456,CA 341','CA'));
    });

    it('Should return 0 when the string "CY 124,CY 567,CJ 345,CJ 456,CK 341" contains no reg number from Cape Town', function() {
        assert.equal(0, countAllFromTown('CY 124,CY 567,CJ 345,CJ 456,CK 341','CA'));
    });

    it('Should return false when an invalid string is provided as input', function() {
        assert.equal(countAllFromTown('@&&$$FG','CA'), false);
    });
});
