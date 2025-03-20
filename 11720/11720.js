var fs = require('fs'); 
var input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n'); 
let nuber_length = input[0];
let number = input[1].split('');
let result = 0;
for(let i =0; i<nuber_length; i++) {
    result += Number(number[i]);
}
console.log(result);