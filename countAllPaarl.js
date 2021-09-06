module.exports =  function(regNumbers) {
	var paarlCounter = 0;
	var regNumbersArr = regNumbers.split(", ");

	for(var i = 0; i < regNumbersArr.length; i++) {
		if(regNumbersArr[i].startsWith("CJ")) {
			paarlCounter++;
		}
	}
	return paarlCounter;
}
