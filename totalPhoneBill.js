module.exports = function(callsAndSms) {
    var callsAndSmsArr = callsAndSms.split(", ");

    var callsTotal = 0;
    var smsTotal = 0;
    for(var i = 0; i < callsAndSmsArr.length; i++) {
    
        if(callsAndSmsArr[i] == "call") {
            callsTotal += 2.75 ;	
      } else if(callsAndSmsArr[i] == "sms") {
          smsTotal += 0.65;
      }  
  }
    return "R"+ (callsTotal + smsTotal).toFixed(2);
}

//console.log("R" + totalPhoneBill("call, sms, call, sms, sms"));