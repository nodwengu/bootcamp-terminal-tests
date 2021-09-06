//var weekDaysList = ['Monday', 'Tuesady', 'Wednesday', 'Thursday', 'Friday'];

module.exports = function(year){
	var now = new Date();
    var currentYear = now.getFullYear();

    if(isNaN(year)) {
        return 'Number required'
    }
    
    return (currentYear) - (year);
}

