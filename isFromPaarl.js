const assert = require ('assert');
var isFromPaarl = function(regNumber){
  var results = regNumber.startsWith('CJ');
  console.log ( regNumber.startsWith('CJ'));
  return results;
};
assert.equal(isFromPaarl('CJ 2010'), true);
