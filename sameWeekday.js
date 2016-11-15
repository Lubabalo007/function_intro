
var sameWeekday = function (date1,date2){
var d1 = new Date (date1);
var d2 = new Date (date2);
console.log(d2);
var  d = d1.getDay() == d2.getDay();
console.log(d1.getDay());
console.log (d)
return d;

}
  sameWeekday('2016-11-07','2016-11-14');
