let changeMe = true;
console.log("Display variable changeMe: " + changeMe);
changeMe = false;
console.log("Display variable changeMe: " + changeMe);
const entree = 'Enchiladas';
console.log(entree);
var myName = "Gosia";
var myCity = "Krakow";
console.log(`My name is ${myName}. My favorite city is ${myCity}.`);
let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);
let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);
newVariable = 1;
console.log(typeof newVariable);

function getReminder() {
    console.log("Water the plants");
}

function greetInSpanish() {
    console.log("Buenas Tardes")
}

function sayThanks() {
    console.log("Thank you for your purchase! We appreciate your business");
}
sayThanks();
sayThanks();
sayThanks();

function sayThanks(name) {
    console.log("Thank you for your purchase " + name + "! We appreciate your business.");
}
sayThanks('Cole');

function makeShoppingList(item1 = "milk", item2 = "bread", item3 = "eggs") {
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
}

function monitorCount(rows, columns) {
    return rows * columns;
};
const numOfMonitors = monitorCount(5, 4);
console.log(numOfMonitors);

function monitorCount(rows, columns) {
    return rows * columns;
}

function costOfMonitors(rows, columns) {
    return monitorCount(rows, columns) * 200;
}
const totalCost = costOfMonitors(5, 4);
console.log(totalCost);
const plantNeedsWater = function(day) {
    if (day === "Wednesday") {
        return true;
    } else {
        return false;
    }
}
plantNeedsWater("Tuesday");
console.log(plantNeedsWater("Tuesday"));

const plantNeedsWater = (day) => {
    if (day === 'Wednesday') {
        return true;
    } else {
        return false;
    }
};


// function pokazMiesiac(day) {}
// var pokazMiesiac = (day) => {}

const plantNeedsWater = day =>
    day === 'Wednesday' ? true : false;


const city = "New York City"

function logCitySkyline() {
    let skyscraper = "Empire State Building";
    console.log(skyscraper);

}

const city = "New York City";
() => {
    let skyscraper = "Empire State Building";
}

const city = "New York City"
var logCitySkyline = () => {
    let skyscraper = "Empire State Building";
    return "The stars over the " + skyscraper + " in " + city;
};

const city = "New York City"

function logCitySkyline() {
    let skyscraper = "Empire State Building";
    return "The stars over the " + skyscraper + " in " + city;
};
console.log(logCitySkyline());

var satellite = "The Moon";
var galaxy = "The Milky Way";
var stars = "North Star";
var callMyNightSky = () => {
    return "Night Sky: " + satellite + ", " + stars + ", and " + galaxy;
};
console.log(callMyNightSky());


const logVisibleLightWaves = () => {
    let lightWaves = 'Moonlight';
    let region = 'The Arctic';
    // Add if statement here:
    if (region === "The Arctic") {
        let lightWaves = "Northern Lights";
        console.log(lightWaves);
    }
};

//loop
// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 0; counter < 4; counter++) {
    console.log(counter);
}

for (let backwords = 3; backwords >= 0; backwords--) {
    console.log(backwords);
}


logVisibleLightWaves();

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
let listItem = famousSayings[2];
console.log(famousSayings[2]);

let groceryList = ['bread', 'tomatoes', 'milk'];
groceryList[1] = "avocados";
console.log(groceryList);

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
condiments[0] = "Mayo";
condiments = ['Mayo'];
console.log(condiments);

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
utensils[3] = "Spoon"
console.log(utensils);

const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);

const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push("read book", 'buy newspaper');
console.log(chores);

//usuwa ostatni element z listy
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
chores.pop();
console.log(chores);

//remove first item
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift();
console.log(groceryList);

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift();
groceryList.unshift('popcorn');
//groceryList.slice(1,4);
const pastaIndex = groceryList.indexOf("pasta");
console.log(pastaIndex);
console.log(groceryList.slice(1, 4));
console.log(groceryList);

//nested array 
var numberClusters = [
    [1, 2],
    [3, 4],
    [5, 6]
];
const target = numberClusters[2][1];
console.log(target); //output 6


//loop
for (let newCounter = 5; newCounter < 11; newCounter++) {
    console.log(newCounter);
}

//loop in array 
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below
for (let i = 0; i < vacationSpots.length; i++) {
    console.log("I would love to visit " + vacationSpots[i]);
}

// do ...while
let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do {
    cupsAdded++
} while (cupsAdded < cupsOfSugarNeeded);