const assert = require ('assert');
var greet = function(name){
console.log = ('hi' + ' ' + name);
return 'hi' + ' ' + name;

}

assert.equal (greet('Luba'), 'hi Luba');
