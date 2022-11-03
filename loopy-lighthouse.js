/*
Loopy Lighthouse Assignment

Application to print Loopy for multiples of 3, lighthouse for multiples of 4
and loopylighthouse for multipleso 3 & 4; otherwise print the number in the loop.
loop counts from 100 to 200
*/

for (let i = 100; i <= 200; i++){
  if (i % 3 === 0 && i % 4 === 0){ // print "LoopyLighthouse" if i is a * 3 && 4
    console.log("LoopyLighthouse");
  } else if (i % 3 === 0){  //print "Loopy" if i is ONLY a *3
    console.log("Loopy"); 
  } else if (i % 4 === 0){  //print "Lighthouse" if i is ONLY a *4
    console.log("Lighthouse");
  } else {
    console.log(i); // prints out # in loop if not a * 3 || 4
  }
}