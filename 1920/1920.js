var fs = require('fs'); 
var input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n'); 

let n_length = input.shift();
let n_arr = input.shift().split(" ").sort((a,b) => a-b);
let m_length = input.shift();
let m_arr = input.shift().split(" ");
let answer =[];
//배열 내부 타입 변환 
n_arr = n_arr.map(Number)
m_arr = m_arr.map(Number)
m_arr.forEach(e =>{
    let start = 0;
    let end  = n_length - 1;
    let res = false ;
    while (start <= end){
        let mid = parseInt((start+end)/2);
        if(e<n_arr[mid]) {
            end = mid -1; 
        }
        else if (e > n_arr[mid])
        {
            start = mid+1;
        }
        else {
            res = true ;
            break;
        }
    }
    if(res === true) {
        answer.push(1);
    }
    else {
        answer.push(0);
    }
})
console.log(answer.join('\n'));
