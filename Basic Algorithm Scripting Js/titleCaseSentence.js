/* Basic Algorithm Scripting: Title Case a Sentence

Return the provided string with the first letter of each word capitalized. Make sure the rest of the
word is in lower case. For the purpose of this exercise, you should also capitalize connecting words
like "the" and "of". */

function titleCase(str) {
    let arr = str.toLowerCase().split(" ");
    let result = arr.map(item => item[0].toUpperCase() + item.slice(1,item.length));
     return result.join(" "); 
    }
    
    titleCase("I'm a little tea pot");