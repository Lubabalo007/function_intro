
const assert=require ('assert');
var regCheck= function (regNum,location){
var results = regNum.startsWith(location)
return results
}
assert.equal(regCheck ('GP 123','GP'), true);
