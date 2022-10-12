console.log("Hello World!");
console.log("Welcome To JavaScript");
console.log(2022);
console.log(true);
console.log(false);

// Type: String
var username = "Fabi";
console.log("Fabi escrito a mano");
console.log(username);

// Type: Number
var age = 28;
// Type: Boolean
var isMarried = false;

console.log(age); // Output: 28
console.log(isMarried); // Output: false

// Type: Array - []
// Array of strings
var animals = ["Perro", "Gato", "Tortuga", "Koala"];
console.log(animals); // Output: ["Perro", "Gato", "Tortuga", "Koala"]
// El primer elemento del array tiene el índice 0
// El segundo elemento del array tiene el índice 1
// El tercer elemento del array tiene el índice 2
// El n-ésimo elemento del array tiene el índice n-1

// Array of numbers
var numbers = [1, 2, 3, 4, 5];
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// Type: Object - {}
// Object with strings, numbers and booleans
var mentor = {
    name: "Fabi",
    age: 28,
    targetNumber: 554676542007,
    havePets: true,
};
console.log(mentor); // Output: {name: "Fabi", age: 28, targetNumber: 554676542007, havePets: true}

// Type: Object of objects
var mentorWithPets = {
    name: "Fabi",
    age: 28,
    targetNumber: 554676542007,
    havePets: true,
    infoPet: {
        name: "Sra. Misha",
        type: "Cat",
        age: 2,
    },
};
console.log(mentorWithPets); // Output: {name: "Fabi", age: 28, targetNumber: 554676542007, havePets: true, infoPet: {…}}
