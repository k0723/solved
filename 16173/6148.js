var fs = require('fs'); 
var input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n'); 
let cow_arr = input.shift().trim().split(" ");
let hight_arr = [...input];
let total_hight = 0;
let arr = [];
let answer = 1000000000;
function bt (start, tot) {
    if(tot >= cow_arr[1]) {
        answer = Math.min(answer, tot-cow_arr[1]);
        return;
    }
    for(let i = start ; i<cow_arr[0]; i++) {
        bt(i+1, tot + parseInt(hight_arr[i]))
    }
}
let result = bt(0,0,cow_arr[0],cow_arr[1]);
console.log(answer);

