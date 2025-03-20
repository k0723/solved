var fs = require('fs'); 
var input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n'); 
let wood_arr = input.shift().trim().split(" ");
let tile_arr = input;
const graph = tile_arr;
let cnt = 0; 

for(let i = 0; i<wood_arr[0]; i++) {
    let connect = true;
    for(let j =0; j< wood_arr[1]; j++)
    {
        if(connect && graph[i][j] === "-") {
            cnt++;
            connect = false;
        }
        else if(graph[i][j] === "|")connect = true;
    }
}

for(let i =0; i<wood_arr[1]; i++){
    let connect = true;
    for(let j =0; j < wood_arr[0]; j++){
        if(connect && graph[j][i] === "|"){
            cnt++;
            connect = false;
        }
        else if(graph[j][i] === "-") connect = true;
    }
}
console.log(cnt);

