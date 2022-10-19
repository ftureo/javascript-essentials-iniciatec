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
        `El valor del índice del elemento es ${i} y el valor del elemento es ${arrayToFor[i]}`
    );
}

for (let i = 0; i < fruitsArray.length; i++) {
    console.log(
        `El valor del índice del elemento es ${i} y el nombre de la fruta es ${fruitsArray[i]}`
    );
}
