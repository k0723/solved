var fs = require('fs'); 
var input = fs.readFileSync(__dirname + '/input.txt').toString().trim(); 
let test = input.charCodeAt();
console.log(test);