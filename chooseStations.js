const chooseStations = function (stations) {
  // Requirements for voting center
  // req1. Capacity 20
  // req2. school || community center
  
  const goodStation = [] // store location names of locations meeting criteria

  for (const station of stations){ // loop through array
    const capacity = station[1] //Collect capacity from array at index number 1
    
    if (capacity >= 20){  
      const type = station [2] //Collect building type from array at index number 2

      if (type === "school" || type === "community centre"){
        goodStation.push(station[0]) //Add location names meeting criteria to goodStation array
      }
    }   
  }

  return goodStation // return value of array to function
}


console.log(chooseStations(stations)); //print output