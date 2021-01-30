// OBJECTS
// Collection of name - value pairs
// They are known in Ruby as Hashes, in Python as Dictionaries , C++ like Hash tables

// Creando un objeto
var myName = {
    1: 'Chris',
    2: 'Agnieshka',
    3: 'Patrycja'
};

// Accediendo a una propiedad del objeto
console.log(myName['1']);

// Creando un objeto
var persona1 = {
    firstName: 'Rodolfo',
    lastName: 'Lazo',
    age: 50,
    siblings: ['Annie', 'Fernando'],
    numbers: {
        mobile: '0899506133',
        pps: '2077760JA'
    },
    imprimir: function(){
        console.log("My full name is : "+ this.firstName + " "+ this.lastName);
    }
}

// Acceder a valores de un objeto
console.log(persona1.firstName);
console.log(persona1.siblings[0]);
console.log(persona1.numbers.pps);
persona1.imprimir();

//Constructor pattern for creating objects

function DonutConstructor(type, glazed, sweetness, hasChocolate){
    this.type = type;
    this.glazed = glazed;
    this.sweetness = sweetness;
    this.hasChocolate = hasChocolate;
    this.sayType = function(){
        console.log("Type: "+ this.type);
    };
    this.showSweetness = function(){
        console.log("Sweetness: "+ this.sweetness + "/10");
    }
}

var coconutDonut = new DonutConstructor("coconut", false, 8, true);
console.log(coconutDonut);
console.log(coconutDonut.type);

var vanillaDonut = new DonutConstructor("vanilla", true, 10, false);
console.log(vanillaDonut);
console.log(vanillaDonut.type);