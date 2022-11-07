const loopyLighthouse = (range, multiples, words) => {
  
  for (let i = range[0]; i <= range[1]; i++){
    if (i % multiples[0] === 0 && i % multiples[1] === 0){ // print combined words array if i is a * multiples index 0  && 1
      console.log(words[0] + words[1]);
    } else if (i % multiples[0] === 0){  //print "words[0]" if i is ONLY a * multiples[0]
      console.log(words[0]); 
    } else if (i % multiples[1] === 0){  //print "words[1]" if i is ONLY a * multiples[1]
      console.log(words[1]);
    } else {
      console.log(i); // prints out # in loop if not a *  || 
    };
  };
};

// TEST CASE //
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);