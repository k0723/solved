var fs = require('fs'); 
var input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n'); 

let num = input.shift().trim().split(' ');
const search_soil = [[-1,0],[1,0],[0,-1],[0,1]];
let graph, coulmnCount, rowCount, cabbageCount, result ; 
