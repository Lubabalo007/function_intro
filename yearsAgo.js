function yearsAgo(year){
var today = new Date();
return today.getFullYear() - year
}
console.log (yearsAgo(1990) + " yearsAgo");
