const assert = require('assert');
const findItemsOver20 = require('../findItemsOver20');

// Testing for the expected out
// check if input is empty
// chech when is undefined
// check if input a number or any invalid input
// check when there is no item greater 20
// 
describe('The findItemsOver20 Function', function() {
    it('Should return 2 items that are greater than 20', function() {
        var items = [{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}];
        var result = findItemsOver20(items);
        assert.equal(result.length, 2);
    });

    it('Should return 1 item that are greater than 20', function() {
        var items = [{"name":"apples","qty":10},{"name":"bananas","qty":27},{"name":"apples","qty":3}];
        var result = findItemsOver20(items);
        assert.equal(result.length, 1);
    });
});