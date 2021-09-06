module.exports =  function(items) {
   var itemsOver20 = [];
   for (var i = 0; i < items.length; i++) {
      var item = items[i];

      if (item.qty > 20) {
         itemsOver20.push(item);
      }
   }
   return itemsOver20;
}
