// Booleans

var verdadero = true;
var falso = false;

// Siempre que una variable tenga un valor asignado sera verdadera
// Será falso para 0, NaN, undefined
var nombreA;
var nombreB = "alianza";

var numA;
var numB = 5;
var numC = 0;

var arrA = [];
var arrB = [1, 2, 3];

var objA = {};
var objB = {
    nombre : 'Rodolfo'
};

console.log(Boolean(nombreA));
console.log(Boolean(nombreB));
console.log(Boolean(numA));
console.log(Boolean(numB));
console.log(Boolean(numC));
console.log(Boolean(arrA));
console.log(Boolean(arrB));
console.log(Boolean(objA));
console.log(Boolean(objB));

// Undefined is not the same as null
console.log(null === undefined);

// Si solo queremos saber si tienen valores iguales 
console.log(5 == '5');

// Si queremos saber si tienen el mismo tipo y el mismo valor
console.log(5 === '5');
