

module.exports = function(day) {
  var weekDaysList = ['Monday', 'Tuesady', 'Wednesday', 'Thursday', 'Friday'];
  
  return weekDaysList.includes(day);
}

//var isWeekday = (day) => weekDaysList.includes(day);