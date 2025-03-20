var fs = require('fs'); 
var input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n'); 
let result = input[0] * input[1] * input[2];
let arr = result.toString().split('');
let number = new Array(10);
number.fill(0);
for(let i =0; i<arr.length; i++){
    number[arr[i]]++;
}
number.forEach((e)=> {
    console.log(e);
})