
const assert = require ('assert');
var isFrom = function (regNum,location){
var results = regNum.startsWith(location)
return results
}
isFrom ('CY 123','CY');
assert.equal (isFrom("CY 123"),false);
