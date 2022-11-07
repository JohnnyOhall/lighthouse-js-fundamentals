//CODE//
const judgeVegetable = function (vegetables, metric) {
  let largest = 0;
  let result = "";

  vegetables.forEach(function(x){
    if(largest < x[metric]) {
      largest = x[metric];
      result = x.submitter;
    }
  });
  return result;
}

//TEST CONDITIONS// 
let vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 44
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]
let metric = 'Weight'

//OUTPUT//
console.log(judgeVegetable(vegetables,metric))