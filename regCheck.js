
const assert = require ("assert");
var regCheck= function (regNum,location){
var results = regNum.startsWith(location)
return results
}
regCheck ('GP 123','GP');
