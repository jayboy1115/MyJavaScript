let animal = {
    name : "unknown",
    colour: "black",
    sound: function(){
        return `${this.name} makes a sound`
    }
}
//console.log(animal)
let dog = Object.create(animal)
dog.colour = "brown";
dog.name = "bulldog";
dog.numberOfLegs = 4;
//console.log(dog)

let cat ={};
let frenchCat = Object.setPrototypeOf(cat, animal);
//frenchCat.name
console.log(frenchCat)
console.log(frenchCat.name)
