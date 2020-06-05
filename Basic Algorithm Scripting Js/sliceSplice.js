/* Basic Algorithm Scripting: Slice and Splice

You are given two arrays and an index. Use the array methods slice and splice to copy each
element of the first array into the second array, in order. Begin inserting elements at index
n of the second array. Return the resulting array. The input arrays should remain the same
after the function runs. 
____RESULT:
[ 4, 1, 2, 3, 5, 6 ]
[ 'head', 'shoulders', 'claw', 'tentacle', 'knees', 'toes' ]
[ 'a', 1, 2, 'b' ]
*/

function frankenSplice(arr1, arr2, n) {
    let result = arr2.slice(0,arr2.length);
    result.splice(n,0,...arr1);
     // console.log(result);
     return result;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);
  frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2); 
  frankenSplice([1, 2], ["a", "b"], 1);