var fs = require('fs'); 
var input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

let card_number = input[0];
let card_arr = input[1].split(" ");
let M = input[2];
let user_card = input[3].split(" ")
let answer = [];
let card_map = new Map();
for (number of card_arr) {
    if (card_map.has(number))
        card_map.set(number, card_map.get(number) + 1);
    else card_map.set(number, 1);
  }

for (number of user_card) {
    if (card_map.has(number)) answer.push(card_map.get(number));
    else answer.push(0);
  }
console.log(answer.join(" "));

