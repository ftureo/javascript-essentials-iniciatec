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

const isMarriedConditional = false;
if (isMarriedConditional) {
    // Si isMarried es true entonces muestra el siguiente console.log
    console.log("Está casado");
}
if (!isMarriedConditional) {
    // Lo contrario (!) de false es true
    // Si isMarried es false entonces muestra el siguiente console.log
    console.log("No está casado");
}

const ageUser = prompt("¿Cuál es tu edad?");
console.log("ageUser", ageUser);
// TypeOf para saber el tipo de dato de una variable
console.log("TypeOf ageUser", typeof ageUser); // string
// Al tipo string lo convierte a tipo number con el método Number()
const ageUserToNumber = Number(ageUser);
console.log("TypeOf ageUser", typeof ageUserToNumber); // number

if (ageUserToNumber < 18) {
    console.log("El usuario es menor de edad. No puedes ingresar");
}
if (ageUserToNumber >= 18) {
    console.log("El usuario es mayor de edad. Puedes ingresar");
}

// Operador condicional if else
// if (condición) { código a ejecutar si la condición es verdadera } else { código a ejecutar si la condición es falsa }

if (ageUserToNumber < 18) {
    console.log("El usuario es menor de edad. No puedes ingresar");
} else {
    console.log("El usuario es mayor de edad. Puedes ingresar");
}

// Operador condicional if else if
// if (condición) { código a ejecutar si la condición es verdadera } else if (condición) { código a ejecutar si la condición es verdadera } else { código a ejecutar si la condición es falsa }

if (ageUserToNumber < 18) {
    console.log("El usuario es joven");
} else if (ageUserToNumber >= 18 && ageUserToNumber < 80) {
    console.log("El usuario es adulto");
} else {
    console.log("El usuario es adulto mayor");
}
