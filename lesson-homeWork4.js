let initialData1 = {
    name: 'tigername',
    type: 'tiger',
    location: 'Africa',
    color: 'red',
    food: 'meet',
    hasClaws: 'true',
}
let initialData2 = {
    name: 'lionname',
    type: 'lion',
    location: 'Africa',
    color: 'red',
    food: 'meet',
    hasClaws: 'true',
}
let initialData3 = {
    name: 'fishname',
    type: 'fish',
    location: 'Europe',
    color: 'red',
    food: 'meet',
    hasClaws: 'true',
}
let initialData4 = {
    name: 'pigname',
    type: 'pig',
    location: 'Asia',
    color: 'red',
    food: 'meet',
    hasClaws: 'true',
}

let zoo = [];

function Animal(data) {
    Object.assign(this, data);
    zoo.push(this);
}


Animal.prototype.logInfo = function () {
    console.log("Some text");
}

let tiger = new Animal(initialData1);
let lion = new Animal(initialData2);
let fish = new Animal(initialData3);
let pig = new Animal(initialData4);

function filterByLocation(location) {
    return zoo.filter((animal) => {
        return animal.location === location;
    });
}

let livingInAfrica = filterByLocation('Africa');
let livingInEurope = filterByLocation('Europe');

console.log(livingInAfrica);
console.log(livingInEurope);
console.log(zoo[0]);