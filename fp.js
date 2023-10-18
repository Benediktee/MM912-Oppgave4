// The point of this assignment is not to use the functional elements that are part of your chosen language (JavScript/Python).
// But, rather, implement the functionality from scratch using pure functions and higher level functions.
// Do the implimentation in order as given. 
// We have linked to info at MDN, this is just to give a sence of how the reduce,forEach,map and filter functions should work.
//
// 🛠️ Prerequisite:
// You must create an array persons that will contain the data from https://raw.githubusercontent.com/MM-203/misc/main/data/data.json
// This must be done before the first task

let persons =
    [
        { "name": "Paula Key", "age": 23 },
        { "name": "Riya Dickerson", "age": 99 },
        { "name": "Layne Colon", "age": 53 },
        { "name": "Pranav Giles", "age": 51 },
        { "name": "Kamryn Davis", "age": 27 },
        { "name": "Taniyah Yu", "age": 17 },
        { "name": "Brendon Porter", "age": 23 },
        { "name": "Jordin Hancock", "age": 86 },
        { "name": "Shawn Vargas", "age": 88 },
        { "name": "Sawyer Copeland", "age": 14 },
        { "name": "Gustavo Baldwin", "age": 7 },
        { "name": "Renee Wilson", "age": 29 }
    ]

//
// ----------------------------------------------------------------------------------------------------------------------------------
// Bonus challenge 🎉 (a bit hard), the functions forEach, filter and map can all be created using the function reduce. 
// If you feel up for a challenge, try doing so. NB! The bonus challenge is optional. 
// ----------------------------------------------------------------------------------------------------------------------------------



// 1
// Implement your own reduce function and count the number of people above the age of 50
// You can read about a reduce function https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce 




console.log('Task 1.');

function myReduceFunction(array, reducer, initialValue) {
    let accumulator = initialValue;

    for (let index = 0; index < array.length; index++) {
        accumulator = reducer(accumulator, array[index]);
    }

    return accumulator;
}

const numberOfPeopleAbove50 = myReduceFunction(
    persons,
    (accumulator, persons) => (persons.age > 50 ? accumulator + 1 : accumulator),
    0
);

console.log(`People above 50: ${numberOfPeopleAbove50}.`);





// 2
// Implement your own forEach function and use it to greet all the people in the persons array (say Hi, persons name).
// Read about forEach https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach




console.log('Task 2.');


function myForEachFunction(array, callback) {
    for (let index = 0; index < array.length; index++) {
        callback(array[index], index, array);
    }
}

function greetAllThePeople(person) {
    console.log(`Greetings, ${person.name}!`);
}

myForEachFunction(persons, greetAllThePeople);





// 3
// Implement your own map function and make everyone a year older.
// You can read about what the map function should do https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map 




console.log('Task 3.');


function myOwnMapFunction(array, callback) {
    let result = [];
    for (let index = 0; index < array.length; index++) {
        result.push(callback(array[index], index, array));
    }

    return result;
}

function letsGetOneYearOlder(person) {
    return {
        ...person,
        age: person.age + 1
    };
}

let personsOneYearOlder = myOwnMapFunction(persons, letsGetOneYearOlder);

console.log(personsOneYearOlder);




// 4
// Implement your own filter function, and use it to find everyone under the drinking age.
// Read about filter https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter



console.log('Task 4.');


function myOwnFilterFunction(array, condition) {
    const filteredArray = [];
    for (let index = 0; index < array.length; index++) {
        if (condition(array[index])) {
            filteredArray.push(array[index])
        }
    }
    return filteredArray;
}

const theDrinkingAgeInNorway = 18;
function isUnderDrinkingAge(person) {
    return person.age < theDrinkingAgeInNorway;
}

const underTheDrinkingAge = myOwnFilterFunction(persons, isUnderDrinkingAge);

console.log(underTheDrinkingAge);




// 5
// Now create a function sum, that takes a list of numbers and returns the sum
// Try to use your previously created functions to make this function 
// Sum the total age of persons using this new function 
// NB! Do not manualy create the age listing



console.log('Task 5.');

function sum(numbers) {
    return myReduceFunction(numbers, (accumulator, current) => accumulator + current, 0);
}

let ages = myOwnMapFunction(persons, person => person.age);

let totalAges = sum(ages);

console.log(`Total age of persons from the array: ${totalAges}.`);




// 6
// Now create a function average, that returns the average of a list of numbers
// Try to use your previously created functions to make this function 
// calculate the average age of the persons using this function
// NB! Do not manualy create the age listing


console.log('Task 6.');

function average(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    const sum = myReduceFunction(numbers, (accumulator, current) => accumulator + current, 0);
    return sum / numbers.length;
}

let averageAge = average(ages);

console.log(`Average age: ${averageAge}.`);



// 7
// Finaly create a max and a min function that respectivly returns the maximum value and the minimum value
// Only use previously created functions to acchive this.
// Then find the min and max age of ther persons.


console.log('Task 7.');

function max(numbers) {
    if (numbers.length === 0) {
        return undefined;
    }
    return myReduceFunction(numbers, (max, current) => (current > max ? current : max), numbers[0]);
}

function min(numbers) {
    if (numbers.length === 0) {
        return undefined;
    }
    return myReduceFunction(numbers, (min, current) => (current < min ? current : min), numbers[0]);
}

let maxAge = max(ages);
let minAge = min(ages);

console.log(`Max age: ${maxAge}.`);
console.log(`Min age: ${minAge}.`);


