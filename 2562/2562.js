var fs = require('fs'); 
var input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n').map(x=> Number(x)); 
let max = input[0];
let cnt = 0;
for(let i = 0; i<input.length; i++)
{
    if(max<input[i])
    {
        max = input[i];
        cnt = i+1;
    }
}
console.log(max);
console.log(cnt);