/* Basic Algorithm Scripting: Repeat a String Repeat a String 

Repeat a given string str (first argument) for num times (second argument). Return an empty string
if num is not a positive number */

function repeatStringNumTimes(str, num) {
    let result = "";
    if (num > 0){
        for(let i=0; i<num; i++){
            result = result + str;
        }
        return result;
    }
    else {
        return result;
    }
  }
  
  repeatStringNumTimes("abc", 3);