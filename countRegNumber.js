const assert = require
('assert')
var countRegNumber = function(param){
var cars = param.split(',');
return cars.length;

};
countRegNumber('CA 182736,CY 523519,CJ 812328')
