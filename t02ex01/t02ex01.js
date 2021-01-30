//Comentarios de una línea

/*
 * Comentarios de más de una línea
 */

//Numbers
var numA = 5;
var numB = 6;

//Operaciones
console.log(numA + numB);
console.log(numA - numB);
console.log(numA * numB);
console.log(numA / numB);
console.log(numB % numA);

//Funciones matemáticas
console.log(Math.random());
console.log(Math.PI);
console.log(Math.pow(2,3));

//Convertir a enteros
console.log(parseInt('5'));
console.log(parseInt('1010001',2));     //El primer argumento es el numero y el segundo es la base del sistema , binario en este caso

//Convertir a decimal
console.log(parseFloat('3.14159'));

//Infinite : Number
var miNumber = 1/0;
console.log(typeof(miNumber));

//NaN 
console.log(isNaN("hello"));
console.log(isNaN(numA));

//Strings
//Podemos utilizar single quotes and double quotes

console.log('Hello');
console.log("Hello");

//Funciones de Strings
var fullName = "Rodolfo Lazo";
var name = "Rodolfo";
var lastname = "Lazo";

//Longitud
console.log(fullName.length);

//Ubicar caracter
console.log(fullName.charAt(0));

//Concatenar 1
console.log(name.concat(lastname));

//Concatenar 2
console.log(name + " " + lastname);

//UpperCase
console.log(fullName.toLocaleUpperCase());

//Lower Case
console.log(fullName.toLocaleLowerCase());





