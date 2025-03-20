var fs = require('fs'); 
var input = fs.readFileSync(__dirname + '/input.txt').toString().split(' '); 
let result = 0;
input.forEach(e => {
    let pow = Math.pow(e,2);
    result += pow;
});
result = (result%10)
console.log(result);