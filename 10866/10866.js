var fs = require('fs'); 
var input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

let case_number = input.shift();
let result = [];
let deque_arr = [];
for(let i =0; i< case_number; i++)
    {
        let arr = input[i].split(" ");
        let com_char = arr[0].replace(`\r`, "");
        switch(com_char) {
            case 'push_front':
                deque_arr.unshift(Number(arr[1]))
                break;

            case 'push_back':
                deque_arr.push(Number(arr[1]))
                break;
            
            case 'pop_front':
                if(deque_arr.length == 0)
                    {
                        result.push(-1);
                        break;
                    }
                else {
                    result.push(deque_arr.shift());
                    break;
                }

            case 'pop_back':
                if(deque_arr.length == 0)
                    {
                        result.push(-1);
                        break;
                    }
                else {
                    result.push(deque_arr.pop());
                    break;
                }
            
            case 'size':
                result.push(deque_arr.length);
                break;

            case 'empty':
                if(deque_arr == 0){
                    result.push(1);
                }
                else{
                    result.push(0);
                }
                break;
    
            case 'front' :
                if(deque_arr == 0){
                    result.push(-1);
                    break;
                }
                else{
                    result.push(deque_arr[0])
                    break;
                }
            
            case 'back' :
                if(deque_arr == 0){
                    result.push(-1);
                    break;
                }
                else{
                    result.push(deque_arr[deque_arr.length - 1])
                    break;
                }
        }
    }
    console.log(result.join('\n'));