const assert = require ('assert')
var dayToday = function (today){
var result = today.endsWith('day')
console.log(result);
return result;
};
assert.equal(dayToday('Friday'),true);
