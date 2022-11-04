let range = function (start,end,step){ //function parameters
  const result = []; //store end array
  if (start !== undefined && end !== undefined && step !== undefined){ //continues with loop if all params defined
    if (start < end){ // continues with loop if start is less than end
      if (step > 0){ // continues with loop if step is greater than 0
        for (start; start <= end; start += step){ //loop starts at start, ends at ends and adds step to start after each iteration
          result.push(start); //add modified start into result
        }
      } 
    } 
  } 
  return result; // returns new arrary or empty array if conditions unmet.
}
console.log(range(10, 2));
console.log(range(10, 30, -10));
console.log(range(-5, -20, 3));