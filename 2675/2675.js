var fs = require('fs'); 
var input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n'); 
input.forEach((e)=> {
    let arr = e.split(' ');
    let stx = '';
    if(arr[1])
    {
        let str = arr[1].split('')
       for(let i = 0; i< str.length; i++)
       {
            for(let j = 0 ; j < arr[0]; j++)
            {
                stx += str[i];
            }
       } 
       console.log(stx);
    }
})  
