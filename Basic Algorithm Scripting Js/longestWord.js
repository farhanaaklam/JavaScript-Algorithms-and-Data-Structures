/* Basic Algorithm Scripting: Find the Longest Word in a String 

Return the length of the longest word in the provided sentence.
Your response should be a number */

function findLongestWordLength(str){
    let arr = str.split(" ").map(item => item.length);
    console.log(Math.max(...arr));
    return Math.max(...arr);
};

findLongestWordLength("The quick brown fox jumped over the lazy dog");
