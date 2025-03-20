var fs = require('fs'); 
var input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n'); 

let case_num = input.shift();
let arr = [...case_num];
let alp = [];
let result = "";
for(i=97; i<= 122; i++) {
    alp.push(arr.indexOf(String.fromCharCode(i)));
}
console.log(alp.join(' '));
