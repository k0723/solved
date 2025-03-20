var fs = require('fs'); 
var input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n'); 

let case_cnt = input.shift();
for(let i =0; i<case_cnt; i++)
{
    let cnt = 0;
    let result = 0;
    for(let j =0; j<input[i].length; j++)
    {
        if(input[i][j] ==='O'){
            cnt ++;
        }
        else{
            cnt = 0;
        }
        result += cnt;
    }
    console.log(result);
}
