var fs = require('fs'); 
var input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n'); 

let grade = input.shift();
if(grade>=90 )
{
    console.log("A");
}
else if(grade>=80){
    console.log("B");
}
else if(grade>=70){
    console.log("C");
}
else if(grade>=60){
    console.log("D");
}
else {
    console.log("F");
}
