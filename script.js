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

// ---------------------------- Tarea uno ----------------------------

// Creá una variable que contenga tu nombre
var usernameTask = "Leo Peñalver";
console.log("usernameTask", usernameTask);
// Creá una variable que contenga tu edad
var ageTask = 21;
console.log("ageTask", ageTask);
// Creá una variable que indique si estás en pareja (T/F)
var isMarriedTask = true;
console.log("isMarriedTask", isMarriedTask);
// Creá una variable que contenga un array con los números del 1 al 10
var numbersTask = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("numbersTask", numbersTask);
// Creá una variable que contenga un array con los nombres de 5 colegas de Iniciatec
var friendsTask = ["Fabi", "Carla", "Silvi", "Leo", "Isa"];
console.log(friendsTask);
// Creá un objeto que contenga el valor de todas las variables anteriores (sin llamar a esas variables, es decir, handle-made)
var allTask = {
    usernameTask: "Leo Peñalver",
    ageTask: 21,
    isMarriedTask: true,
    numbersTask: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    friendsTask: ["Fabi", "Carla", "Silvi", "Leo", "Isa"],
};
console.log(allTask);
// Crea un objeto con información de un usuario y que contenga un array con sus números favoritos y data de al menos dos mascotas con dos propiedad cada una

var user = {
    // Type: String
    name: "Sher",
    // Type: Number
    age: 24,
    // Type: Boolean
    isMarried: true,
    // Type: Array of numbers
    favoriteNumbers: [2, 4],
    // Type: Array of two objects
    pets: [
        {
            namePetOne: "Annika",
            typePetOne: "Dog",
            specimenOne: "Caniche Toy",
            agePetOne: 4,
        },
        {
            namePetSecond: "Nina",
            typePetSecond: "Dog",
            specimenSecond: "Caniche Toy",
            agePetSecond: 11,
        },
    ],
};
console.log(user);

// Escribimos un console.log para mostrar todos los datos juntos
console.log(
    usernameTask,
    ageTask,
    isMarriedTask,
    numbersTask,
    friendsTask,
    allTask,
    user
);

console.log("user petNameOne", user.pets[0].specimenOne);

// Para mostrar los console del archivo en la consola (es decir, no en el navegador), escribimos en la terminal: node + nombre del archivo. i.e. node script.js
