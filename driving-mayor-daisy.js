const carPassing = function (cars, speed) {
  
  let newValue = {
    speed: speed,
    time: Date.now()
  }
  
  cars.push(newValue)
  return cars
}

let carview = carPassing([{colour: "blue", make: "Chevy"}],500)
console.log(carview)