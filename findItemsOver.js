
module.exports =  function(items, entry) {
  var itemsOver = [];

  for(var i = 0; i < items.length; i++) {
    var item = items[i];
    if(item.qty > entry) {
      itemsOver.push(item);
    }
  }
  return itemsOver;
}















