let lastIndexOf = function (array,value){
  let result = -1; // default return value if not found in array
  for (let x = 0; x < array.length; x++){
    if (array[x] === value){ //check if array index of x = value
      result = x; // change result to array index if found
    }
  }
  return result; // return result
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);