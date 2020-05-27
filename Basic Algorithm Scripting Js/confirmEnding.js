/* Basic Algorithm Scripting: Confirm the Ending

Check if a string (first argument, str) ends with the given target string (second argument, target).
This challenge can be solved with the .endsWith() method, which was introduced in ES2015.But for the
purpose of this challenge, we would like you to use one of the JavaScript substring methods instead. */


function confirmEnding(str, target) {
    let endRegex = new RegExp(target + '$', "i");
    console.log(endRegex.test(str));
    return endRegex.test(str);
};

confirmEnding("Bastian", "n");
confirmEnding("Open sesame", "same");


/*
----------------Solution using Declarative approach------------

 function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
}

confirmEnding("He has to give me a new name", "name");
 */