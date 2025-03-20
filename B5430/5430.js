var fs = require('fs'); 
var input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n'); 
let test_case = input.shift();

let result = [];
for(let i = 0; i<test_case; i++) {
    let ac_arr = input.shift();
    let arr_number = input.shift();
    let arr = JSON.parse(input.shift());
    let do_reverse = false;
    let is_error = false
    let start_index = 0;
    let end_index = arr_number-1;
    for(let j  = 0; j < arr_number; j++) {
        if(ac_arr[j] == "R"){
            if(!do_reverse){
                do_reverse = true;
            }
            else {
                do_reverse = false;
            }
        }
        else{
            if(start_index > end_index){
                is_error = true;
                break;
            }
            if(do_reverse){
                end_index--;
            }
            else{
                start_index++;
            }
        }
        if(ac_arr[j] == "D"){
            if(do_reverse){
                arr.pop();
            }
            else {
                arr.shift();
            }
        }
    }
    if(do_reverse){
        result.push(JSON.stringify(arr.reverse()));
    }
    else{
        result.push(JSON.stringify(arr));
    }
    
}
console.log(result.join('\n'))