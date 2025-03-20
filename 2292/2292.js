var fs = require('fs'); 
var input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n'); 

let num = input;
let bee = 1;
let cnt = 1;
while(bee < num){
    bee = bee + (cnt * 6);
    cnt++;
    if(num<bee){
        result = cnt;
        break;
    }
}
console.log(result);

