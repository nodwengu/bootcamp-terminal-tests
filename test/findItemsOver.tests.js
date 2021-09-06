const assert = require('assert');
const findItemsOver = require('../findItemsOver');

describe('The findItemsOver Function', function() {
    var items = [{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}];
    var entry = 30;

    it('Should return all the items that have a quantity that is greater than an 30', function() {
        assert.equal(findItemsOver(items, 30).length, 1);
    });

    it('Should return all the items that have a quantity that is greater than 10', function() {
        assert.equal(findItemsOver(items, 10).length, 2);
    });

});