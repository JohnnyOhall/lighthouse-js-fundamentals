const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = function (moves) {
  const coordinate = [] //Store final coordinate
  let x = ""; // X coordinate
  let y = ""; // Y coordinate
  
  for (let i = 0; i <= moves.length; i++){
    if (moves[i] === "north"){ // move y coordinate up if north
      y++;
    } else if (moves[i] === "south"){ // move y coordinate down if south
      y--;
    } else if (moves[i] === "east"){ // move x coordinate up if east
      x++;
    } else if (moves[i] === "west"){ // move x coordinate down if west
      x--;
    }
  }

  coordinate.push(x,y); //Pushes final X & Y value to coordinate array
  return coordinate; // returns output value to function
}

console.log(finalPosition(moves));