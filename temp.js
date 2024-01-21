let first = 5;
let second = 7;
console.log(first,second);
// let temp = first;
// first = second;
// second = temp;
[first, second] = [second, first];
console.log(first,second);