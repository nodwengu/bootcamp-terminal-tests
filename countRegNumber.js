module.exports = function(theString) {
	if(theString === "") {
		return 0;
	}
	return theString.split(",").length;
}
