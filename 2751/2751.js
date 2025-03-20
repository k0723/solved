var fs = require('fs'); 
var input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n'); 
input.shift();
let arr = input.sort((a,b) => a-b);
console.log(arr.join('\n'));
