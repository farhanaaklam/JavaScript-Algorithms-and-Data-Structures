/* We have defined a function named squareList. You need to complete the code for the squareList function
using any combination of map(), filter(), and reduce() so that it returns a new array containing only the
square of only the positive integers (decimal numbers are not integers) when an array of real numbers is
passed to it. */

const squareList = (arr) => {
    // Only change code below this line
  return arr
  .filter(num => num > 0 && Number.isInteger(num))
  .map(num => Math.pow(num, 2));
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);