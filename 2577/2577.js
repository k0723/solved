var fs = require('fs'); 
var input = fs.readFileSync(__dirname + '/input.txt').toString().split(' '); 
let a_cnt = 0;
let d_cnt = 0;
let ascending = [1,2,3,4,5,6,7,8];
let descending = [8,7,6,5,4,3,2,1];
for(let i = 0; i<input.length; i++)
{
    if(input[i] == ascending[i])
    {
        a_cnt++;
    }
    if(input[i] == descending[i])
    {
        d_cnt++;
    }
}
if(a_cnt==8)
{
    console.log('ascending')
    return;
}
if(d_cnt==8)
{
    console.log('descending')
    return;
}

    console.log('mixed');
