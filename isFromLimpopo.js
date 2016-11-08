const assert = require ('assert');
var isFromLimpopo = function(regNumber){
  var results = regNumber.startsWith('DRT 122 L');
  return results;
};
assert.equal(isFromLimpopo('DRT 122 L'), true);
