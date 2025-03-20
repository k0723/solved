var fs = require('fs'); 
var input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n'); 

let [n,m,v]  = input[0].split(" ").map(Number);
let graph = new Array(n).fill("");
for(let i =1; i< m+1; i++) {
    let [g,v] = input[i].split(" ");
    parseInt(g,v);
    graph[g] += v
}

console.log(dfs(graph));
const dfs = function(arr,first_node) {
    if(visited)
    let visited = [first_node];
    let dfs = [];
    for(let i = 0; i<arr.length; i++){
        let m,v = arr[i].split(" ");
        visited.push(v);
        dfs.push(visited.pop());
    }
}
