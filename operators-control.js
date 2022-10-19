console.log("Estoy en operators-control.js");

var userName = "Fabi";
var userLastName = "Tureo";
var userAge = 28;

console.log(userName, userLastName, userAge);

// Operador "+" sirve para dos cosas: concatenar y sumar
// Concatenar: unir dos o más strings
// Sumar: sumar dos o más números
var userFullName = userName + " " + userLastName;
var userFullNameWithoutSpace = userName + userLastName;

console.log(userFullName);
console.log(userFullNameWithoutSpace);

console.log(
    "Mi nombre es " +
        userName +
        ", mi apellido es " +
        userLastName +
        " y tengo " +
        userAge +
        " años"
);

console.log(
    "Mi nombre es" +
        " " +
        userName +
        ", " +
        "mi apellido es" +
        " " +
        userLastName +
        " " +
        "y tengo" +
        " " +
        userAge +
        " " +
        "años"
);

// Concatenación con template literals (template strings)
// Template literals (template strings) es una nueva forma de concatenar strings en ES6
// Template literals (template strings) se escriben con backticks (``) al principio y al final
// Si solo queremos concatenar strings (NO VARIABLES), no es necesario utilizar el operador "+", se escribe como una oración tradicional
// Los template literals nos sirven para concatenar strings y variables. Cuando quiera invocar a una variable, debo hacerlo con el signo$ y la variable dentro de {}. i.e. ${variable} - Reemplazo "variable" por el nombre de la variable que quiero invocar

console.log(
    "Mi nombre es" +
        " " +
        userName +
        ", " +
        "mi apellido es" +
        " " +
        userLastName +
        " " +
        "y tengo" +
        " " +
        userAge +
        " " +
        "años"
);

console.log(
    `Mi nombre es ${userName}, mi apellido es ${userLastName} y tengo ${userAge} años`
);

// usando el operador "+" para sumar dos números

var numberOne = 10;
var numberTwo = 20;

var sum = numberOne + numberTwo; // 30

// Console.log para mostrar el resultado de la suma con dos parámetros
console.log("La suma es", sum);
// Console.log para mostrar el resultado de la suma con un solo parámetro y convierte el número en string
console.log("La suma es " + sum);

console.log("La suma de " + numberOne + " y " + numberTwo + " es " + sum);

console.log(`La suma de ${numberOne} y ${numberTwo} es ${sum}`);

// Usando el operador "-" para restar dos números

var substraction = numberOne - numberTwo; // -10
console.log(`La resta es ${substraction}`);

var numberThree = 30;
console.log("numberThree", numberThree);

numberThree += 10; // 40
console.log("numberThree", numberThree);

const numberFour = 40;
console.log("numberFour", numberFour);

console.log("numberThree", numberThree); // 40

var isMarriedVar = false;
const isMarriedConst = false;

console.log("isMarriedVar", isMarriedVar);
console.log("isMarriedConst", isMarriedConst);

// numberFour += 10; // Error: assignment to constant variable - Forbidden

// Esto, además, genera que se corte el hilo de ejecución del programa

// Las variables de tipo const no pueden ser reasignadas a diferencia de las variables de tipo let y var

// Operadores de comparación

//Operador de igual estricta (===) son tres signos "="

const isEqualNumber = 10 === 10; // true
console.log("isEqualNumber", isEqualNumber);

//Operador de igual débil (==) son dos signos "="
const isEqualStringStrict = "10" === 10;
const isEqualStringWeak = "10" == 10;

console.log("isEqualStringStrict", isEqualStringStrict); // False
console.log("isEqualStringWeak", isEqualStringWeak); // True

// El operador de igualdad débil (==) convierte los tipos de datos para compararlos (es decir, solo compara su valor) no su tipo de dato mientras que el operador de igual estricta compara el valor y el tipo de dato

// Operadores de comparación de mayor, mayor igual, menor y menor igual

const isGreaterToLeft = 10 > 5;
console.log("isGreaterToLeft", isGreaterToLeft); // True

const isGreaterToRight = 5 < 10;
console.log("isGreaterToRight", isGreaterToRight); // True

const isLessToRight = 10 < 5;
console.log("isLessToRight", isLessToRight); // False

const isLessToLeft = 5 > 10;
console.log("isLessToLeft", isLessToLeft); // False

const isLess = 5 < 10;
console.log("isLess", isLess); // True

const isGreaterOrEqual = 10 <= 10;
console.log("isGreaterOrEqual", isGreaterOrEqual); // True

const isLessOrEqual = 9 <= 10;
console.log("isLessOrEqual", isLessOrEqual); // True

const isLessOrEqual2 = 11 <= 10;
console.log("isLessOrEqual2", isLessOrEqual2); // False

const numberFive = 10;
const numberSix = 20;
console.log("Is numberFive less than numberSix?", numberFive < numberSix); // True
console.log("Is numberSix less than numberFive?", numberSix < numberFive); // False

// Operadores lógicos
// AND (&&) compara dos o más condiciones y devuelve true si todas las condiciones son verdaderas - Pending!
// OR (||) compara dos o más condiciones y devuelve true si al menos una de las condiciones es verdadera - Pending!
// NOT (!) invierte el valor de una condición - Pending!
// i.e. !true = false y !false = true

// Operadores condicionales
// Operador condicional if
// if (condición) { código a ejecutar si la condición es verdadera }
// Si Condicion es true, se ejecuta el código dentro de las llaves y si es false, no se ejecuta nada

// const isMarriedConditional = false;
// if (isMarriedConditional) {
//     // Si isMarried es true entonces muestra el siguiente console.log
//     console.log("Está casado");
// }
// if (!isMarriedConditional) {
//     // Lo contrario (!) de false es true
//     // Si isMarried es false entonces muestra el siguiente console.log
//     console.log("No está casado");
// }

// const ageUser = prompt("¿Cuál es tu edad?");
// console.log("ageUser", ageUser);
// // TypeOf para saber el tipo de dato de una variable
// console.log("TypeOf ageUser", typeof ageUser); // string
// // Al tipo string lo convierte a tipo number con el método Number()
// const ageUserToNumber = Number(ageUser);
// console.log("TypeOf ageUser", typeof ageUserToNumber); // number

// if (ageUserToNumber < 18) {
//     console.log("El usuario es menor de edad. No puedes ingresar");
// }
// if (ageUserToNumber >= 18) {
//     console.log("El usuario es mayor de edad. Puedes ingresar");
// }

// // Operador condicional if else
// // if (condición) { código a ejecutar si la condición es verdadera } else { código a ejecutar si la condición es falsa }

// if (ageUserToNumber < 18) {
//     console.log("El usuario es menor de edad. No puedes ingresar");
// } else {
//     console.log("El usuario es mayor de edad. Puedes ingresar");
// }

// // Operador condicional if else if
// // if (condición) { código a ejecutar si la condición es verdadera } else if (condición) { código a ejecutar si la condición es verdadera } else { código a ejecutar si la condición es falsa }

// if (ageUserToNumber < 18) {
//     console.log("El usuario es joven");
// } else if (ageUserToNumber >= 18 && ageUserToNumber < 80) {
//     console.log("El usuario es adulto");
// } else {
//     console.log("El usuario es adulto mayor");
// }

// Operador condicional switch
// switch (variable) { case valor: código a ejecutar si la variable es igual al valor; break; case valor: código a ejecutar si la variable es igual al valor; break; default: código a ejecutar si la variable no es igual a ninguno de los valores; break; }

console.log("Un código que se ejecuta antes del switch");

// El switch no es más que un par de if else anidados
const expression = "Apple";
switch (expression) {
    case "Oranges":
        console.log("Oranges are $0.59 a pound.");
        break;
    case "Mangoes":
        console.log("Mangoes are $2.79 a pound.");
        break;
    case "Papayas":
        console.log("Mangoes and papayas are $2.79 a pound.");
        // expected output: "Mangoes and papayas are $2.79 a pound."
        break;
    case "Apple":
        console.log("We are fruits and a great source of vitamin C!");
        break;
    default:
        console.log(`Sorry, we are out of ${expression}.`);
}

console.log("Un código que se ejecuta después del switch");

if (expression === "Apple") {
    console.log("We are fruits and a great source of vitamin C!");
}
if (expression === "Mangoes") {
    console.log("Mangoes are $2.79 a pound.");
}
if (expression === "Papayas") {
    console.log("Mangoes and papayas are $2.79 a pound.");
}
if (expression === "Oranges") {
    console.log("Oranges are $0.59 a pound.");
}

// const fruitUser = prompt(
//     "¿Cuál es tu fruta favorita? 1. Manzana 2. Mango 3. Papaya 4. Naranja"
// );
// console.log("fruitUser", fruitUser, typeof fruitUser);

// Condicionales ternarios
// En ECMA6 se puede usar el operador ternario para simplificar el código

// const animal = prompt("¿Cuál es tu animal favorito?");

// if (animal === "cat") {
//     // Si animal es igual a cat, es decir "true"
//     console.log("The cats are amazing");
// } else {
//     console.log("The other pets too are funny");
// }

// Condicional ternario
// Analiza una condición y devuelve un valor si es true o false. Para simplificar el código, ECMA6 implementa los operadores "?" y ":" para reemplazar el if y else respectivamente

// condición '?' valor si es true ':' valor si es false

// animal === "cat"
//     ? console.log("The cats are amazing", animal)
//     : console.log("The other pets too are funny");

// const teamUser = prompt("¿Cuál es tu equipo favorito?");

// teamUser === "River Plate"
//     ? console.log("You're a great fan")
//     : console.log("You're only a fan");
