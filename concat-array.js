let concat = function (array1,array2){
  let result = []; //store new array
  
  for (array1s of array1){
    result.push(array1s); // add each array1 item to result
  }

  for (array2s of array2){
    result.push(array2s); // add each array2 item to result
  }
  return result; // return concatenated array
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);