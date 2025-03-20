var fs = require('fs'); 
var input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');


for(let i = 0; i < input.length; i++)
{
    let arr = input[i].split(' ');
    let result = parseInt(arr[0])+parseInt(arr[1]);
    if(result==0){
        continue;
    }
    console.log(parseInt(arr[0])+parseInt(arr[1]));
}
