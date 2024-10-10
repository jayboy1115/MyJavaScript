function Person(name, gender) {
    this.name = name;
    this.gender = gender;
}

let person = new Person("johnson", "male");
console.log(person.name)

module.exports = Person;