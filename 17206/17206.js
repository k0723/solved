var fs = require('fs'); 
var input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n'); 
let testRunTime = input.shift();
let testCase = input.shift().split(" ");
let arr = [];
let temp = 0;

for(let i =3; i <= 80000; i++){
    if(i%3==0 && i% 7 ==0){
            temp += i; 
    }
    else if(i%3 == 0){
            temp +=i;
    }
    else if(i% 7 ==0){
            temp +=i;
    }
    arr[i] = temp;
    }
for(let j = 0 ; j<testRunTime; j++){
    console.log(arr[testCase[j]]);
}


