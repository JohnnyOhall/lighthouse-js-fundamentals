// This is an array of objects. 
var donuts = [ 
  { type: "Jelly", cost: 1.22 }, // 0
  { type: "Chocolate", cost: 2.45 },  // 1
  { type: "Cider", cost: 1.59 },  // 2
  { type: "Boston Cream", cost: 5.99 }
];
// [{...}, {...}, {...}]
//    0      1       2 ,  etc 
///      i = 0;  until this tatement is true, do the interation; i++
console.log('------------ c style for loop --------------');
for (let i = 0; i < donuts.length; i++) {
  console.log(donuts[i].type + " donuts cost $" + donuts[i].cost + " each");
}
console.log('------------- for in -----------------------');
for (let i in donuts) {
  console.log(donuts[i].type + " donuts cost $" + donuts[i].cost + " each");
}
console.log("--------------- for of ------------------"); 
for (let val of donuts) {
  console.log(val);
  console.log(val.type + " donuts cost $" + val.cost + " each");
}