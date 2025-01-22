// Exercises on Objects in JavaScript

// Exercise 1: Create an object with properties that describe a car (brand, model, year).
let coche={
    marca:"seat",
    modelo:"g3",
    año:"1992"
  };
// Exercise 2: Create a constructor function for a Person and instantiate two objects from it.
function persona (nombre,edad){
    this.nombre=nombre;
    this.edad=edad;
     this.hablar=function(){
      console.log("hola");
    };
  };
  
  let persona1=new persona("pepe",21);
  let persona2=new persona("jeanne",32);
// Exercise 3: Access properties of a book object using both dot notation and bracket notation.
let libro={
    nombre:"Alas rojas",
    autor:"Pierce Brown"
  };
  
  let punto= libro.nombre;
  console.log(punto);
  let bracket=libro["nombre"];
  console.log(bracket);
// Exercise 4: Modify the year published property of the book object.
let libro2={
    nombre:"Alas rojas",
    autor:"Pierce Brown",
    año_publicacion:2014
  };
console.log(libro2);
libro2.año_publicacion=2000;
console.log(libro2);

// Exercise 5: Add a new property (color) to the car object.
let coche2={
    marca:"seat",
     modelo:"g3",
     anio:"1992"
 };
 coche2["color"]="rojo";
 console.log(coche2);
// Exercise 6: Remove the model property from the car object.
let coche3={
    marca:"seat",
     modelo:"g3",
     anio:"1992"
 };
 delete coche3.modelo;
 console.log(coche3);
// Exercise 7: Create an object and freeze it. Try to change one of its properties.
let objeto={
    nombre:"obj"
  };
  Object.freeze(objeto);
  console.log(objeto);
  objeto.saluda="hola";
  console.log(objeto);
// Exercise 8: Create an object and prevent it from having new properties added. Try to add a new property.
let objeto1={
    nombre:"obj"
  };
  Object.seal(objeto1);
  
  console.log(objeto1);
  objeto1.edad=12;
  console.log(objeto1);
// Exercise 9: Use Object.keys() to get the keys of a student object and print them.
let estudiante={
    nombre:"pablo",
    edad:12
  };
  
  
  Object.keys(estudiante).forEach(valor=>{
  console.log(valor);
  });
// Exercise 10: Use Object.values() to get the values of a student object and print them.
let estudiante2={
    nombre:"pablo",
    edad:12
  };

  Object.values(estudiante).forEach(valor=>{
  console.log(valor);
  });
// Exercise 11: Iterate through the properties of a pet object and print each property with its value.
let mascotas={
    nombre:"Kuro",
    animal:"Gato",
    Anios:2
  };
  
  Object.values(mascotas).forEach(valor=>{
    console.log(valor);
  });
// Exercise 12: Write a function that checks if two objects have at least one property in common.
let comparacion1={
  nombre:"John",
  apellido:"Smith"
};
let comparacion2={
  nombre:"John",
  apellido:"Doe"
};


function comparar(comparacion1,comparacion2){
 if(comparacion1.length != comparacion2.length){
  console.log("No son iguales");
  return false;
}else{
for(let i=0;i<comparacion1.length;i++){
  if(comparacion1!=comparacion2){
    return false;
      }
   }
}
return true; 
}

console.log(comparar(comparacion1.nombre,comparacion2.nombre));
console.log(comparar(comparacion1.apellido,comparacion2.apellido));
// Exercise 13: Create a function that returns a new object that merges two given objects.
let obj1={
    nombre:"objeto1"
  };
  
  let obj2={
    nombre2:"objeto2"
  }
  
  let juntar={...obj1,...obj2};
  console.log(juntar);
// Exercise 14: Create a function that clones a given object.
let clon1={
    nombre:"clon1",
    propiedad:"original"
  }
  
  let clonacion=Object.assign({},clon1);
  
  console.log(clon1);
  console.log(clonacion);
// Exercise 15: Create a function that compares two objects and returns true if they are equal, false otherwise.
let comparacion3={
  nombre:"John",
  apellido:"Smith"
};
let comparacion4={
  nombre:"John",
  apellido:"Doe"
};

function comparar(a,b){
  return JSON.stringify(a)==JSON.stringify(b);
}

console.log(comparar(comparacion3,comparacion4));
// Exercise 16: Write a function that destructures an object and returns its properties as variables.

const { a, ...otros } = { numero1: 1, numero2: 2, numero3: 3 };

console.log(otros);
// Exercise 17: Create an object that uses 'this' in a method and show how to call it correctly.
let producto={
  nombre:"silla",
  precio: 123,
}

producto.descuento= function(porcentaje){
  const descuento=this.precio*(porcentaje/100);
  console.log(this.precio-descuento);
}

console.log(producto.descuento(10));


function Producto(nombre,precio){
  this.nombre=nombre;
  this.precio=precio;
  this.descontar=function(porcentaje){
    const descuento=this.precio*(porcentaje/100);
    console.log(this.precio-descuento);
  }
}


const producto1=new Producto("zapatos",120);
  producto1.descontar(20);