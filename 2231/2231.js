var fs = require('fs'); 
var input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n'); 

let num = input.shift();
let arr = num.split("");
let result = 0;
for(let i = 1; i <= num; i++){
    let sum = i;
    let ch_i = i.toString();
    let e_arr = ch_i.split("");
    for(let j =0; j < e_arr.length; j++)
    {
        sum = sum+parseInt(e_arr[j]);
    }
    if(sum==parseInt(num)){
        result = i;
        console.log(result)
        return;
    }
}
console.log(result);