var fs = require('fs'); 
var input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

let number = input[1].split(' ');
let num_max = Math.max(...number);
let num_min = Math.min(...number);
console.log(num_min,num_max);
