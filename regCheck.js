module.exports = function(regNumber, location) {
    //console.log(regNumber);
   //console.log(location);
    return regNumber.endsWith(location) || regNumber.startsWith(location); 
 }

 /**
  function regCheck(regNumber, location) {
  	//console.log(regNumber);
	//console.log(location);
  	return regNumber.endsWith(location); 
} 

var isGP = regCheck('DV 23 NB GP', 'GP');

//should print true
console.log(isGP);

var isMP = regCheck('DV 23 LP GP', 'MP');

//should print false
console.log(isMP);

// should return false
var isBellville = regCheck('CY 189-012', 'CY');
console.log(isBellville);

//should return false
var isDurban = regCheck('CY 189-012', 'ND');
console.log(isDurban);

  */