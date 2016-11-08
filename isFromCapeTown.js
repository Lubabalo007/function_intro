const assert = require ('assert');
var isFromCapeTown = function(regNumber){
  var results = regNumber.startsWith('CA');
  return results;
};
assert.equal(isFromCapeTown('CA 2010'), true);
