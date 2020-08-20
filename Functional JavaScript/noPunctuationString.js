/* 
Use the split method inside the splitify function to split str into an array of words. The function
should return the array. Note that the words are not always separated by spaces, and the array should
not contain punctuation */

function splitify(str) {
    // Only change code below this line
  
   return str.split(/\W/);
    // Only change code above this line
  }
  splitify("Hello World,I-am code");


/*   /\W/ is equivalent to /[^A-Za-z0-9_]/ 
That means it can ignore spaces and punctuation, but not underscores*/

/* /\w/ Equivalent to /[A-Za-z0-9_]/ */