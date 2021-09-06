module.exports = function(regNumber) {
	let reg = regNumber.toUpperCase();
	return reg.startsWith('CY');
}