var fs = require('fs'); 
var input = fs.readFileSync(__dirname + '/input.txt').toString().split(' '); 
var a = parseInt(input[0]); 
var b = parseInt(input[1]);
console.log(a/b);

var fs = require('fs'); 
var input = fs.readFileSync('/dev/stdin').toString().split(' '); 
var a = parseInt(input[0]); 
var b = parseInt(input[1]);
console.log(a/b);