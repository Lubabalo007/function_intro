var getDay = function (date){
  var results = new Date(date);
  var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var day = results.getDay();
   return weekDays[day];
}
console.log (getDay("2016-11-14"));
