var fs = require('fs'); 
var input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n'); 
let wood_arr = input.shift().trim().split(" ");
let tile_arr = input;
const graph = tile_arr;
let cnt = 0; 



