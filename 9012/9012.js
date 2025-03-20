var fs = require('fs'); 
var input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n'); 

let exc_num = Number(input.shift());

for(let i = 0; i<exc_num; i++)
{
    const stack = [];
    let result ="YES";
    let str_arr = input[i];
    let len = str_arr.length;
    for(let j =0; j<len;j++)
    {
        let str = str_arr[j];
        console.log(str);
        if(str === "("){

            stack.push(1);
        }
        else {
            if(!stack.pop()){

                result = 'NO';
                break;
            }
        }
    }
    if(stack.length !== 0){
        result = "NO";
    }
    console.log(result);
}