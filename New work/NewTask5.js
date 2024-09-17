const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

function personData(data) {
  return "First Name: " + data.firstName + ", Last Name: " + data.lastName + ", Age: " + data.age;
}

console.log(personData(person));

