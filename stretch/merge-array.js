/* Merge Arrays - Stretch
The function should, when given two sorted arrays containing numbers, 
returns a sorted array of the numbers from both lists.
*/

const merge = (arr1, arr2) => {
  let mergedArray = arr1.concat(arr2); // Combine both arrays
  mergedArray.sort((a, b) => { return a - b }); //Sort from least to largest
  return mergedArray; // return value
};

// TEST CASES //
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);