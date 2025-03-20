var fs = require('fs'); 
var input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n'); 

let case_num = (input.shift().split(" "));
let case_num2 = (input.shift().split(" "));
for(let i = 0 ; i<case_num.length; i++)
{
    if(Number(case_num[i]) === Number(case_num2[i])){
        console.log("N");
        break;
    }
    if(i == case_num.length-1){
        console.log("Y");
    }
}