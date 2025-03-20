var fs = require('fs'); 
var input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

let case_number = input.shift();
let result = [];
let stack_arr = [];
for(let i =0; i< case_number; i++)
    {
        let arr = input[i].split(" ");
        let com_char = arr[0].replace(`\r`, "");
        switch(com_char) {
            case 'pop':
                if(stack_arr.length ==0){
                    result.push(-1)
                }
                else result.push(stack_arr.pop());
                break;

            case 'size':
                result.push(stack_arr.length);
                break;
            
            case 'empty':
                if(stack_arr.length == 0){
                    result.push(1);
                    break;
                }
                else{
                    result.push(0);
                    break;
                }

            case 'top':
                if(stack_arr.length ==0){
                    result.push(-1);
                    break;
                }
                result.push(stack_arr[stack_arr.length-1]);
                break;

            default:
                stack_arr.push(arr[1]);
                break;
        }
    }
    console.log(result.join('\n'));