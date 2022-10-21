console.log("Estoy en arrays-objects.js");

// Array
const arrayExample = [1, 2, 3, 4, 5]; // Array de números
console.log("arrayExample", arrayExample, typeof arrayExample);
console.log("is Array?", Array.isArray(arrayExample));

const objectExample = {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    4: 5,
};
console.log("objectExample", objectExample, typeof objectExample);
console.log("is Array?", Array.isArray(objectExample));

const fruitsArray = [
    "apple",
    "banana",
    "orange",
    "watermelon",
    "pineapple",
    "strawberry",
    "apple",
    "banana",
    "orange",
    "watermelon",
    "pineapple",
    "strawberry",
    "apple",
    "banana",
    "orange",
    "watermelon",
    "pineapple",
    "strawberry",
    "apple",
    "banana",
    "orange",
    "watermelon",
    "pineapple",
    "strawberry",

    "orange",
    "watermelon",
    "pineapple",
    "strawberry",
    "apple",
    "banana",
    "orange",
    "watermelon",
    "pineapple",
    "strawberry",
];
//Quiero acceder al primer elemento del array
//Invoco al array y le paso el índice del elemento que quiero
// Para el primer elemento, el índice es 0. Lo coloco entre corchetes
console.log(fruitsArray[0]); // Output: "apple"

// Quiero acceder al segundo elemento del array
console.log(fruitsArray[1]); // Output: "banana"

//Quiero acceder a la cantidad de elementos del array (Longitud del array)
console.log("Longitud del array", fruitsArray.length); // Output: 4

//Quiero acceder al elemento "orange"
console.log(fruitsArray[2]); // Output: "orange"

//Quiero acceder al último elemento del array
console.log(fruitsArray[23]); // Output: "strawberry" // Camino mejorable
console.log(fruitsArray[fruitsArray.length - 1]); // Output: "strawberry" // Camino correcto

console.log("Antes del ciclo de iteración while");

// Ciclo - Bucle - Iteración - Loop
// While cycle
// El ciclo while se ejecuta mientras la condición sea verdadera
// La palabra reservada es "while"

let countWhile = 10;
while (countWhile < 20) {
    console.log("Contador", countWhile);
    countWhile = countWhile + 1;
    // Debo tener cuidado de que no se transforme en un loop infinito
}

console.log("Después del ciclo de iteración while");

// Do While cycle

console.log("Antes del ciclo de iteración do while");
let countDoWhile = 10;
do {
    console.log("Contador", countDoWhile);
    countDoWhile = countDoWhile + 1;
} while (countDoWhile < 20);

console.log("Después del ciclo de iteración  do while");

// For cycle
// El ciclo for se ejecuta mientras la condición sea verdadera
// La palabra reservada es "for"
console.log("Antes del ciclo de iteración for");

let countFor = 10;

// i++ reemplaza a i = i + 1

for (i = 0; i <= countFor; i = i + 1) {
    console.log("Iniciatec");
}

for (let i = 0; i < countFor; i++) {
    // console.log("Contador", i);
    console.log(`El valor del contador es ${i}`);
}
console.log("Después del ciclo de iteración for");

// For in an array
const arrayToFor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arrayToFor.length; i++) {
    console.log("usando la longitud del array");
}

for (let i = 0; i < arrayToFor.length; i++) {
    console.log(
        `El valor del índice del elemento es ${i} y el valor del elemento es 
        ${arrayToFor[i]}`
    );
}
console.log("arrayToFor", arrayToFor);
console.log(typeof arrayToFor); // Why?

// for (let i = 0; i < fruitsArray.length; i++) {
//     console.log(
//         `El valor del índice del elemento es ${i} y el nombre de la fruta es ${fruitsArray[i]}`
//     );
// }

// Objects

const userJL = {
    //Format - Key: Value
    name: "Jose",
    lastName: "Vallejos",
    age: 27,
    isMarried: false,
    isWorking: true,
    placeJob: {
        namePosition: "Secretario",
        typeCompany: "Abogacía",
        seniorityInAges: 3,
    },
    hasPets: true,
    pets: ["marmota", "nutria"],
    isStudent: true,
    studies: [
        {
            id: 1,
            technology: "HTML",
            level: "Advanced",
        },
        {
            id: 2,
            technology: "CSS",
            level: "Advanced",
        },
        {
            id: 3,
            technology: "JS",
            level: "Intermediate",
        },
    ],
};

console.log("userJL", userJL);

// Quiero mostrar el nombre y el apellido en un console.log utilizando los datos del objeto userJL
console.log(userJL[0]); // No funciona - No me muestra el nombre
console.log(userJL[1]); // No funciona - No me muestra el apellido

// Método accesor para las propiedades de un objeto: . (punto) - Dot notation
// object.property
console.log(userJL.name); // Output: "Jose"
console.log(userJL.lastName); // Output: "Vallejos"

console.log(
    `El nombre del usuario es ${userJL.name} y su apellido es ${userJL.lastName}`
); // Output: "El nombre del usuario es Jose y su apellido es Vallejos"

// Veamos las claves del objeto
console.log(Object.keys(userJL)); // Output: ["name", "lastName", "age", "isMarried", "isWorking", "placeJob", "hasPets", "pets"]
// Veamos los valores de cada clave del objeto
console.log(Object.values(userJL)); // Output: ["Jose", "Vallejos", 27, false, true, {…}, true, Array(2)]
// Cómo hago para mostrar que trabaja como secretario?
console.log(userJL.placeJob.namePosition); // Output: "Secretario"

//Quiero mostrar que Jose está estudiando JS
// console.log(userJL.studies[2]); // Output: "JS"

// console.log(
//     `El nombre del usuario es ${userJL.name} y su apellido es ${userJL.lastName} y trabaja como ${userJL.placeJob.namePosition}. Actualmente está estudiando ${userJL.studies[2]}`
// );

console.log("Esteban", userJL.studies[2].technology); // No accesible
console.log("Jose", userJL.studies[2].technology);
console.log("Sher", userJL.studies[1].technology);

console.log(
    `El nombre del usuario es ${userJL.name} y su apellido es ${userJL.lastName} y trabaja como ${userJL.placeJob.namePosition}. Actualmente está estudiando ${userJL.studies[2]}`
);
