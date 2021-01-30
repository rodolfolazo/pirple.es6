// Array
// Collection of data

// Declaration
var miArreglo = [1, 2, 3, "test", 'prueba', true, ['uno', 'dos', 'tres']];

// Acceder a un arreglo
console.log('Acceder a un arreglo');
console.log(miArreglo[0]);
console.log(miArreglo[6][1]);

var nombres1 = ['Rodolfo', 'Fernando', 'Annie'];
console.log(nombres1);

// Agregar valores a un arreglo con la funcion push
// Esta funcion devuelve la cantidad de valores que tiene un arreglo
var cantidad = nombres1.push('Romina', 'Andre');
console.log(typeof(cantidad));

// nombres2 no es una copia de nombres1, lo que es en realidad es un apuntador a nombres1
// Eso significa que si se altera uno, se alterara el otro
nombres2 = nombres1;
console.log(nombres1);
console.log(nombres2);

// Eliminar el ultimo valor de un array, esto devuelve el elemento eliminado
var nombre = nombres2.pop();
console.log(nombre);
console.log(nombres2);

// Ordenar los elementos de un vector
console.log(nombres1.sort());
console.log(nombres2.reverse());

// Concatenar vectores
var lazo = ['Rodolfo', 'Fernando', 'Annie'];
var vasquez = ['Romina', 'Andre'];

// No altera el arreglo inicial
var primos = lazo.concat(vasquez);
console.log(primos);

// Crea un string con el contenido de los dos arreglos
// Forma 1: funcion join :Rodolfo Fernando Annie Romina Andre 
var cadena1 = primos.join(" ");
console.log(cadena1);


// Forma 2 : Rodolfo,Fernando,Annie,Romina,Andre
var primos2 = lazo + ","+vasquez;
console.log(primos2);

//Crear un arreglo partiendo de otro
var subArreglo = primos.slice(2,4);
console.log(subArreglo);
