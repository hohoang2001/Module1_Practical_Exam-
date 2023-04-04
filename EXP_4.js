class Animal {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setWeight(weight) {
        this.weight = weight;
    }
    getWeight() {
        return this.weight;
    }
    toString() {
        return console.log(`tên: ${this.getName()} và cân nặng : ${this.getWeight()} kg`);
    }
};

let objAnimal1 = new Animal("Elephant", "45,6");
let objAnimal2 = new Animal("home", "50,7");

let animals = [
    objAnimal1,
    objAnimal2,
];



function displayListAnimals() {
    for (let i = 0; i < animals.length; i++) {
        animals[i].toString();
    }
}

displayListAnimals();
