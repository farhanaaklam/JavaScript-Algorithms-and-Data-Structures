/* Use the join method (among others) inside the sentensify function to make a sentence from the words
in the string str. The function should return a string. For example, "I-like-Star-Wars" would be
converted to "I like Star Wars". For this challenge, do not use the replace method.

sentensify("The.force.is.strong.with.this.one") should return "The force is strong with this one". */

function sentensify(str) {
    // Only change code below this line
  
  return str.split(/\W/).join(" ");
  
    // Only change code above this line
  }
  sentensify("May-the-force-be-with-you");
  

