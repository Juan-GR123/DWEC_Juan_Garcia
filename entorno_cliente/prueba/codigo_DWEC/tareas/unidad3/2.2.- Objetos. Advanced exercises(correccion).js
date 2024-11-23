//1.- Establishing Context
//Exercise 1. Given an object with a greet method, create another object 
//and use the greet method from the first object with it.
let persona={
    nombre:"Lum",
    edad:12,
    saludar:function(){
      console.log(`Hola soy ${this.nombre}`);
    }
  };
  persona.saludar();
  
  let persona2={
    nombre:"Edward",
    edad:15
  };
  
  let persona3=persona.saludar.bind(persona2);
  console.log(persona3());

//Exercise 2. Create a function that accepts an object as an argument and adds a new property to it.
// Use call to execute the function with different objects.

let objeto={
    nombre:"Balmung"
  }
  function argumento(objeto){
    this.precio=100;
  }
  
  argumento.call(objeto);
   console.log(objeto);

//Exercise 3. Define an object with a describe method. Create another object and use bind to link
// the describe method to the new object.
let objeto2={
    nombre:"Gram",
    descripcion: function(){
      console.log(`Espada ${this.nombre}: una espada perteneciente al heroe nórdico Sigurd`);
    }
  };
  
  let objeto3={
    nombre:"Balmung"
  }
  let espada=objeto2.descripcion.bind(objeto3);
  console.log(espada());

//Exercise 4. Write a function that logs the values of an object’s properties. 
//Use bind to create a new function with a predefined context for this logging.
let fantasia={
    nombre:"Gugnir",
    propietario:"Odin",
    valor:function(){
        console.log(this.nombre, this.propietario);
      }
  };
  
  
  const valores= function(){
    console.log(this.nombre, this.propietario);
  }
  
  
  
  let aux=valores.bind(fantasia);
  console.log(aux());

//2.- Encapsulation (Private Properties and Getters/Setters)
//Exercise 5. Create a constructor function that initializes private 
//properties _name and _age. Add public getters and setters to access and modify them.
function Persona(nombre,edad){
  let _nombre=nombre;
  let _edad=edad;
  
  this.getNombre=function(){
    return _nombre;
  };
  
  this.setNombre=function(nombre){
    _nombre=nombre;
  };

  this.getEdad=function(){
    return _edad;
  };
  
  this.setEdad=function(edad){
    _edad=edad;
  }
}

const pepe= new Persona("pepe",40);
console.log(pepe._nombre);
pepe.getNombre();
pepe.setNombre("pepin");
pepe.getNombre();
console.log(pepe.edad);
pepe.edad=50;
console.log(pepe.edad);
//Exercise 6. Define a class that has a private property _balance. 
//Add a method to increase the balance and another to retrieve its value.
class PrimeraC{
  #nombre;
  #balance;
  
  constructor(nombre,balance){
    this.#nombre=nombre;
    this.#balance=balance;
  };
  get nombre(){
    return this.#nombre;
  };
  
  set nombre(nuevoNombre){
    this.#nombre=nuevoNombre;
  };
  
  get balance(){
    return this.#balance
  };
  
  set balance(nuevoBalance){
    this.#balance=nuevoBalance;
  };
  
  incrementar=function(incremento){
    this.#balance=incremento+this.#balance;
  };
}
const clase=new PrimeraC("tizon",20);
clase.nombre="claro";
console.log(PrimeraC.nombre);
clase.balance=20;
clase.incrementar(20);
console.log(clase.balance);
//Exercise 7. Create a constructor function for an object with a private property _score.
// Add a getter that returns the score and a setter that updates it only if it’s higher
// than the previous score.
function constructor(nombre,apellidos,puntuacion){
  let _nombre= nombre;
  let _apellidos= apellidos;
  let _puntuacion= puntuacion;
this.getNombre=function(){
  return _nombre;
};
 this.setNombre=function(nombre){
   _nombre=nombre;
};
 this.getApellidos=function(){
  return _apellidos;
}
 this.setApellidos=function(apellidos){
   _apellidos=apellidos;
}
this.getPuntuacion=function(){
  return _puntuacion;
}
this.setPuntuacion=function(nuevaPuntuacion){
  if(nuevaPuntuacion>_puntuacion){
    _puntuacion=nuevaPuntuacion;
  }
}
};
const nuevo1=new constructor("Algo","De algo",123);
nuevo1.getNombre();
nuevo1.getPuntuacion();
nuevo1.setPuntuacion(12);
nuevo1.getPuntuacion();
nuevo1.setPuntuacion(1200);
nuevo1.getPuntuacion();
//Exercise 8. Define a class with a private _password property.
// Add a setter that allows updating the password only if a certain condition is met 
//(e.g., minimum length).
class sesion{
  #usuario;
  #contrasenia;
  
  constructor(usuario,contrasenia){
    this.#usuario=usuario;
    this.#contrasenia=contrasenia;
  }
  get usuario(){
    return this.#usuario;
  }
  
  set usuario(nuevoNombre){
    this.#usuario=nuevoNombre;
  }
  
  get contrasenia(){
    return this.#contrasenia;
  }
  
  set contrasenia(nuevaContrasenia){
    if(nuevaContrasenia.length>6){
         this.#contrasenia=nuevaContrasenia;
    }
 
  }
}

const password=new sesion("Dragoon","fwlafkn12");
console.log(password.usuario);
password.contrasenia="hyrksmdfns43";
console.log(password.contrasenia);



//3.- Inheritance
//Exercise 9. Define a base class Person with a greet method. 
//Create a Student class that inherits from Person and adds a study method.
class Persona{
  saludar(){
    console.log("Buenos dias");
  }
}


class estudiante extends Persona{
  estudiar(){
    console.log("Estoy estudiando");
  }
}
const persona1=new estudiante();
persona1.saludar();
//Exercise 10. Create a Vehicle base class with a drive method. 
//Define a Car subclass that inherits from Vehicle and adds an accelerate method.
class Vehiculo{
  conducir(){
    console.log("Estoy conduciendo");
  }
}

class Coche extends Vehiculo{
    accelerar(){
      console.log("Vamos a accelerar, que suene Running in the 90s");
    }
}
let auxiliar1=new Coche();
auxiliar1.conducir();
auxiliar1.accelerar();

//Exercise 11. Write a Product class with a displayInfo method.
// Create a Book subclass that inherits from Product and adds an author property.
class Producto{
  mostrarInfo(){
    console.log("Estoy mostrando informacion");
  }
}

class Libro extends Producto{
  #autor
  constructor(nuevoAutor){
    super();
    this.#autor=nuevoAutor
  }
    set autor(nuevoAutor){
    this.#autor=nuevoAutor;
  }
  get autor(){
    return this.#autor;
  }
}

const aux12=new Libro("Pierce Brown");
aux12.mostrarInfo();
aux12.autor;

//Exercise 12. Define a Device class with a turnOn method. Create a Smartphone class that inherits from Device and adds a call method.
class Dispositivo{
  turnOn(){
    console.log("cambiando el algoritmo");
  }
}

class movil extends Dispositivo{
  llamar(){
    console.log("llamando");
  }
}

const auxiliar2=new movil();
auxiliar2.llamar();
auxiliar2.turnOn();
//4.- Overriding
//Exercise 13. Define a Person class with a greet method. Create a Friend class that overrides greet to provide a personalized greeting.
class Persona{
  saludar(){
   console.log("Hola");
 }
}

class Amigo extends Persona{
 #nombre
 constructor(nuevoNombre){
   super();
   this.#nombre=nuevoNombre;
 }
 saludar(){
   super.saludar();
   console.log(`Hola de nuevo,${this.#nombre} `);
 }
 
}
const miAmigo=new Amigo("Tom");
miAmigo.saludar();

//Exercise 14. Create a Shape class with a draw method. Define a Circle class that overrides the draw method with a specific message for circles.
class Forma{
  dibujar(){
    console.log("Estoy dibujando");
  }
}

class Circulo extends Forma{
  dibujar(){
    console.log("Estoy dibujando un Circulo");
  }
}

const miDibujo= new Circulo();
miDibujo.dibujar();
//Exercise 15. Define a Player class with a play method. Create a Musician subclass that overrides play to specify the instrument being played.
class Jugador{
  jugar(){
    console.log("Estoy tocando un instrumento");
  }
}

class Musico extends Jugador{
  #tipo;
  constructor(tipo){
  super();
    this.#tipo=tipo;
  }
  jugar(){
     console.log(`Estoy tocando un/una ${this.#tipo}`);
  }
}

const miInstrumento= new Musico("guitarra");
miInstrumento.jugar();
//Exercise 16. Write a Machine class with a start method. Create a Car subclass that overrides start to add a message about engine type.
class Maquina{
  start(){
    console.log("La maquina esta arrancando");
  }
}

class Coche extends Maquina{
  #tipo;
  constructor(tipo){
    super();
    this.#tipo=tipo;
  }
  start(){
    console.log(`La maquina con el motor ${this.#tipo} esta arrancando`);
  }
}

const miMotor= new Coche("Diesel HDi");
miMotor.start();

//5.- Destructuring
//Exercise 17. Given an object with properties title, author, and year, destructure it to extract these values and log them.
const objeto10={
  titulo:"pipo",
  autor:"colorin",
  año:2004
};
const{titulo,autor}=objeto10;
console.log(titulo,autor);
//Exercise 18. Destructure an array with three elements and assign them to individual variables, then log the values.
let array=[1,2,3];
const[num1,num2,num3]=array;
console.log(num1);
console.log(num2);
console.log(num3);
//Exercise 19. Create a function that takes an object with properties name, age, and country and destructures them directly in the parameter list.
function destruc(objeto){
  const{nombre,edad,ciudad}=objeto;
  console.log(nombre,edad,ciudad);
}

objeto9={
  nombre:"algo",
  edad:19,
  ciudad:"alguna"
}

destruc(objeto9);
//Exercise 20. Given a nested object with properties user and address, destructure it to extract userName and city.
const persona10={
  usuario:{
    user:"pez",
    direccion:"Malaga"
  }
};

const {usuario:{user,direccion}}=persona10;
console.log(user,direccion);
//6.- Optional Chaining (?.)
//Exercise 21. Create an object with a user property containing nested properties.
// Use optional chaining to access a non-existent property without causing an error.
let personaFinal={
  usuario:{
    nombre:"Shiro",
    edad:43,
  },
};

  let comprob1=personaFinal.persona?.coche;

console.log(comprob1);
//Exercise 22. Given a book object with an author property, use optional chaining to access the authorName. 
//Try to access a property that doesn’t exist, verifying that it returns undefined.
"use strict"
let libro={
    autor:{
      nombre:"Laura Gallego",
      edad:30
    },
    nombre:"Memorias de Idhun"
  }
  let amigo=null;
  let book=libro.autor?.nombre;
  console.log(book);
  
  let book2=amigo?.autor.getNombre;
  console.log(book2);
//Exercise 23. Create a shop object with nested product properties. 
//Use optional chaining to access the price of a product that doesn’t exist, 
//ensuring it returns undefined.
let tienda={
  leche:{
    peso:21,
    altura:12,
    precio:19
  }
}
let producto1=tienda.vaso?.precio;
console.log(producto1);
//Exercise 24. Define an object with properties representing a movie and director. 
//Use optional chaining to access the director's name and a non-existent property.
let pelicula={
    nombre:"jojo Rabbit",
    director:{
      nombre:"Taika Waititi",
      fecha:2019
    }
  };
  
  let pelicula1=pelicula.director?.nombre;
  let pelicula2=pelicula.director?.edad;
  console.log(pelicula1);
  console.log(pelicula2);
