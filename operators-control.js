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

// Consoe.log para mostrar el resultado de la suma con dos parámetros
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
