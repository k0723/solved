var fs = require('fs'); 
var input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n'); 

for(let i =0; i< input.length; i++) {
    let arr = [...input[i].split(" ")];
    arr.sort((a,b)=>{return a - b;});
    let a = Math.pow(parseInt(arr[0]),2);
    let b = Math.pow(parseInt(arr[1]),2);
    let c = Math.pow(parseInt(arr[2]),2);
    let max_num = Math.max(a,b,c);
    console.log(arr);
    if(a==0||b==0||c==0){
        return;
    }
    if(a+b==c)
    {
        console.log("right");
        continue;
    }
    console.log("wrong");
}