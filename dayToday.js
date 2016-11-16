const assert = require ('assert');
var dayToday = function (day){
  const date = new Date('2010-04-01');
  var weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  //return index between 0 and 6
  console.log(date.getDay());

  //look up the week day text string from the Array
  console.log(weekDays[date.getDay()]);
  if (day==weekDays[date.getDay()]) {
    return true
  }else {
    return false
  }
}
assert.equal (dayToday('Friday'), true);
