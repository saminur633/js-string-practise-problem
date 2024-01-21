 function maxinarray(numbers){
    let leargest = numbers[0];
    for(i =0; i<=numbers.length;i++){
        
        const index = i;
        const element = numbers[index];
        if(element > leargest){
            leargest = element;
        }

    }
    return leargest;

 }
 const heights = [167,190,120,165,137,666];
 const tallest = maxinarray(heights);
 console.log(tallest);