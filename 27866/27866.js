var fs = require('fs'); 
var input = fs.readFileSync(__dirname + '/input.txt').toString().split(' '); 
let string = input[0].split('');
let number = input[1];
console.log(string[number-1]);
