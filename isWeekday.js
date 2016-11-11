const assert = require ('assert')
var isWeekday = function (day){
var result = day.startsWith('S')

return result;
};

assert.equal(isWeekday('Monday'),false);
