var fs = require('fs'); 
var input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

let number = input.shift();
const user = [];
for(let i = 0; i<number; i++){
    let user_info = input[i].split(' ');
    user.push([user_info[0],user_info[1]]);
}
user.sort((a,b) => a[0]-b[0]);
for(let j = 0; j<number; j++){
    console.log(user[j][0]+" "+user[j][1])
}
