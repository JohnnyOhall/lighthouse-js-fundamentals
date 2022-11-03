const howManyHundreds = function (input){
  let remove = input % 100; // calculate remainder
  let result = (input - remove) / 100; // removes remainder from input and divides by 100
  return result;
}

console.log(howManyHundreds(1234), "=?", 12);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);