var regCheck= function (regNum,location){
var results = regNum.startsWith(location)
console.log (results)
return results
}
regCheck ('GP 123','GP');
