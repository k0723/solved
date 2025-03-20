// const date = new Date().toISOString().split('T');
const date = new Date();
const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
let test = new Date(date.getTime()+KR_TIME_DIFF)
let test1 = (test.toISOString().split('T'))

console.log(test1[0]);