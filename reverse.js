function reversestring(text){
    let reversed = '';
    for(let i = text.length-1; i >= 0; i--){
        const element = text[i];
        reversed = element + reversed;
        console.log(element,reversed);
    }
    return reversed;
}
const mystring = 'I am a Samin';
const reversed = reversestring(mystring);
console.log('reversed output:',reversed);