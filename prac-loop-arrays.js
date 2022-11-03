/*
const amounts = [61.00, 52.25, 112.99, 5.00];
let total = 0;

for (let amount of amounts) {
  total += amount;
}
console.log('Order total is: ', total);
*/


function copyArrayMan(array, instruct) {
  let output = []
  for (arrays = 0 of array){
    output.push(instruct(array[arrays]))
  }
  return output
}

function multi2(input){
  return input * 2;
}

let result = copyArrayMan([5,10,100],multi2)
console.log(result)