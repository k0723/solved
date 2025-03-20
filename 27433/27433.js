var fs = require('fs'); 
var input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split(' '); 
console.log(fac(input,1));


function fac(depth, result) {
    if(depth <= 1)
    {
        return result;
    }
    else{
        result = result * depth
        return fac(depth-1,result);
    }
}
