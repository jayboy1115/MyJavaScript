const car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2021
}

function objectProperties(obj) {
  for (const property in obj) {
    console.log(property, obj[property]);
  }
}

objectProperties(car);