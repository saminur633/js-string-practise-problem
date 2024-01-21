const lyrics = 'tomake chere ami ki niye thakbo';
const parts = lyrics.split(' ');
const chars = lyrics.split('');
// console.log(chars);
const partial = lyrics.slice(5, 8);
const partial2 = lyrics.substring(5,8);
console.log(partial);
console.log(partial2);
const newsong = [
    'tomake chere ami ki niye thakbo',
    'ami tomar moner vitor',
    'valobeshe jabo amra dujon',
];
const hissong = newsong.join(':');
console.log(hissong);