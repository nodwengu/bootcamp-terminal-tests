
module.exports = function(listItems) {
   var highestSales = 0;
   var profitableDept = '';
   //console.log(listItems);

   for (var i = 0; i < listItems.length; i++) {
      var listItem = listItems[i];

      if (listItem.sales > highestSales) {
         highestSales = listItem.sales;
         profitableDept = listItem.department;
      }
   }
   //console.log("Profitable Dept: " + profitableDept);
   //console.log("Highest Sales: " + highestSales);
   return profitableDept;
}
