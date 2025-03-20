var fs = require('fs'); 
var input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n'); 

let case_num = input.shift();
let arr = [];
for(let i =0; i<case_num; i++){
    arr = input[i].split(" ");
    let H = parseInt(arr[0]);
    let W = parseInt(arr[1]);
    let N = parseInt(arr[2]);
    let floor = Math.ceil(N%H);
    let room = Math.ceil(N/H);
    let middle = "";
    if(floor == 0)
    {
        floor = H;
    }
    if(room<10)
    {
        middle = "0" + room;
    }
    console.log(floor+middle+room);
}