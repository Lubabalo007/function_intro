const assert = require ('assert');
var isFromGauteng = function(regNumber){
  var results = regNumber.startsWith('DR 12 TY GP');
  console.log  (regNumber.startsWith('DR 12 TY GP'));
  return results;
};
assert.equal(isFromGauteng('DR 12 TY GP'), true);
