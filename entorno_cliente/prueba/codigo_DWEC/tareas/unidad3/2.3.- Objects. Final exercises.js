//Exercise 1: Create a person object with properties name and age. Define a greet method that prints a greeting to the console. Then, create a function that changes the context of this to greet from another object.
  
class persona1{
  #nombre;
  #edad;
  constructor(nombre,edad){
    this.#nombre=nombre;
    this.#edad=edad;
  }

  saludar(){
    console.log(`Hola ${this.#nombre}!`);
  }
}

let mipersona= new persona1("pepe",12);
mipersona.saludar();
  
//Exercise 2: Define a book object with properties title, author and year.
// Use destructuring to print each of these properties to the console.
let libro={
    titulo:"The Fullmetal Alchemist",
    autor:"Desconocido",
    anio:2012
  }
  
  Object.values(libro).forEach(valor=>{
    console.log(valor);
  });
//Exercise 3: Create a product object with properties name, price and discount. Implement a method that returns the final price after the discount and another method that validates that the price and discount are positive.
let producto={
    nombre:"libro",
    precio:12,
    descuento:10,
    precioF:function(){
      let final=this.precio*(this.descuento/100);
      return final;
    },
    validar:function(){
      if(this.precio>0 && this.descuento>0){
        return true;
      }else{
        return false;
      }
    }
  };
  
  console.log(producto.precioF());
  console.log(producto.validar());
//Exercise 4: Create a company object with an employee property, which is an array of person objects. 
//Access the name property of a specific employee and display a message in the console if it exists.

let compania={
    empleado:[
      {
        nombre:"John"
      },
      {
        nombre:"Edward"
      },
      {
        nombre:"Hoenheim"
      },
      {
      nombre:"Daemon"
      }
    ]
  };
  
  function buscarN(texto){
    let buscar= compania.empleado.find((valor)=>valor.nombre===texto);
    if(buscar){
        console.log("El empleado si existe");
    }else{
         console.log("El empleado no existe");
    }
  }
  console.log(buscarN("Edward"));
//Exercise 5: Define an animal object with a method makeSound. 
//Create a cat object that inherits from animal and override the method to return ‘Meow’. 
//Then, create a dog object that also inherits from animal and override the method to return ‘Woof’.
class Animal{
  makeSound(){
    console.log("Haciendo un sonido");
  }
};


class Gato extends Animal{
  
    constructor(nombre){
    super();
    this.nombre=nombre;
  }
  
  makeSound(){
    console.log("Meow");
  }
}

const miGato=new Gato("tizón");
miGato.makeSound();


class Perro extends Animal{
   constructor(nombre){
    super();
    this.nombre=nombre;
  }
  makeSound(){
    console.log("Woof");
  }
};

const miPerro=new Perro("Lucky");
miPerro.makeSound();
//Exercise 6: Create a function that accepts two objects and returns true if 
//they have at least one property in common, or false if they do not.


class objeto1{
  nombre;
  edad;
  ciudad;
  constructor(nombre1,edad1,ciudad1){
    this.nombre=nombre1;
    this.edad=edad1;
    this.ciudad=ciudad1;
  }
}


class objeto2{
  nombre;
  apellidos;
  pais;
  constructor(nombre1,apellidos1,pais1){
    this.nombre=nombre1;
    this.apellidos=apellidos1;
    this.pais=pais1;
  }
}

function acepta(a1,a2){
  let obj1=Object.keys(a1);
  let obj2=Object.keys(a2);
  for(let i=0; i<obj1.length;i++){
    if(obj1[i]===obj2[i]){
      return true
    }
  }
  return false;
}
miobjeto1=new objeto1("silla",12,"Malaga");
miobjeto2=new objeto2("Mesa",5,"Alemania");


acepta(miobjeto1,miobjeto2);
//Exercise 7: Create a car object with properties make and model. Define a method that uses these 
//properties and displays a message on the console.
let Coche={
  make:"algo",
  model:"C9",
  metodo(){
    console.log(`Vamos a savar al mercado el producto ${this.make} del modelo ${this.model}`);
  }
};

Coche.metodo();
//Exercise 8: Define a student object with properties name and grades. 
//Implement a method that calculates and returns the average grade of the students.
let estudiante={
  nombre:"Max",
  notas_tri:{
    primero:10,
    segundo:5,
    tercero:7
  },
  media:0,
  calcular: function(){
     this.media=(this.primero+this.segundo+this.tercero)/3;
    console.log(`La media de todas sus notas es  + ${this.media}`);
  }
};

estudiante.calcular();
//Exercise 9: Create a book object with a review property that can be null. Make sure to display the review in the console only if it exists.
class libro2{
  review;
  constructor(review1){
    this.review=review1;
  }
}
let milibro2=new libro2(null);

console.log(milibro2?.review);
//Exercise 10: Create a university object with a faculties property, which is an array of objects. 
//Use the appropriate syntax to access a specific faculty and display its name in the console.

let university={
  nombre:"Oxford",
  localizacion: "Londres",
   Facultades: [
     { nombre: "Facultad de Ingenieria", profesor: "Dr. Smith",departamentos: 10},
     { nombre: "Facultad de Artes", profesor: "Dr. Johnson",departamentos: 8 },
     { nombre: "Facultad de ciencias", profesor: "Dr. Lee", departamentos: 12 }
   ]
 };
 const miuni=university.Facultades[1];
 console.log(miuni.nombre);
//Exercise 11: Define a house object with properties colour and number of rooms. Use a getter to return a description of the house and a setter to validate the colour before assigning it.
class Casa{
  color;
  numero;
  constructor(color1,numero1){
    this.color=color1;
    this.numero=numero1;
  }
  set color1(NuColor) {
    const colores = ["blanco", "azul", "verde", "amarillo", "rojo", "gris"];
    if (colores.includes(NuColor)) {
      this.color = NuColor;
    } else {
      console.log(`Color invalido: ${NuColor}.`);
    }
  }
  get color1(){
    return this.color;
  }
  get descripcion(){
    return `Esta casa tiene un color ${this.color} y ${this.numero} habitaciones`;
  }
 
}
const miCasa= new Casa("rojo",10);

console.log(miCasa.descripcion);
miCasa.color1="verde";
console.log(miCasa.descripcion);
//Exercise 12: Create a counter object with methods to increment and display the value. Make sure the value is updated correctly.
class contador{
  _valor;
  constructor(valor1){
    this._valor=valor1;
  }
  incrementar(numero){
    this._valor=this._valor+numero;
  }
  mostrar(){
    console.log(this._valor);
  }
}

micontador=new contador(1);
micontador.mostrar();
micontador.incrementar(2);
micontador.mostrar();
//Exercise 13: Create a game object that contains information about a board game. Implement a method that displays the description of the game and its number of players.
class juego{
  info;
  descripcion;
  numero_jugadores;
  constructor(info1,descripcion1,numeros1){
    this.info=info1;
    this.descripcion=descripcion1;
    this.numero_jugadores=numeros1;
  }
  mostrar(){
    console.lof(`El juego trata de ${this.descripcion} y hay ${this.numero_jugadores} jugadores`);
  }
}
//Exercise 14: Define an employee object with properties name, age and position. Implement a getter that returns a description of the employee.
class juego{
  nombre;
  descripcion;
  numero_jugadores;
  constructor(nombre1,descripcion1,numeros1){
    this.nombre=nombre1;
    this.descripcion=descripcion1;
    this.numero_jugadores=numeros1;
  }
  mostrar(){
    console.log(`El juego ${this.nombre} ${this.descripcion} y participan ${this.numero_jugadores} jugadores`);
  }
}

let miJuego=new juego("Catan", "es un juego donde los jugadores desarrollan estrategias para conseguir puntos",10);
miJuego.mostrar();
//Exercise 15: Create a food object with properties name and calories. Implement a method that determines if the food is healthy based on its calorie count.
class comida{
  nombre;
  calorias;
  constructor(nombre1,calorias1){
    this.nombre=nombre1;
    this.calorias=calorias1;
  }
  
  saludable(){
    if(this.calorias>=200){
      console.log(`El producto ${this.nombre} no es saludable`);
    }else{
      console.log(`El producto ${this.nombre} si es saludable`);
      
    }
  }
}

let micomida= new comida("Pollo frito", 398);
micomida.saludable();
//Exercise 16: Create a user object with properties name, email and a method to display the user's information in the console.
class usuario{
  #nombre;
  #email;
  constructor(nombre1,email1){
    this.#nombre=nombre1;
    this.#email=email1;
  }
  mostrar(){
    console.log(`El nombre de usuario es ${this.#nombre} y su email es ${this.#email}`);
  }
}

miUsu=new usuario("algo","algo@gmail.com");
miUsu.mostrar();
//Exercise 17: Define a movie object with properties title, director and year. Implement a method to return the synopsis of the movie.
class pelicula{
  #titulo;
  #director;
  #anio;
  
  constructor(titulo,director,anio){
    this.#titulo=titulo;
    this.#director=director;
    this.#anio=anio;
  }
  
  sinopsis(){
    console.log(`La pelicula ${this.#titulo} fue dirigida por ${this.#director} y debuto en el año ${this.#anio}`);
  }
}

let mipeli= new pelicula("Iron Man","Stan Lee","2004");

mipeli.sinopsis();
//Exercise 18: Create a vehicle object with properties make, model and year. Implement a method that returns a string describing the vehicle.
class vehiculo{
  _marca;
  _modelo;
  _anio;
  constructor(marca,modelo,anio){
    this._marca=marca;
    this._modelo=modelo;
    this._anio=anio;
  }
  
  descripcion(){
    console.log(`El siguiente vehiculo pertenece a la marca ${this._marca} ,es del modelo ${this._modelo} y salio en el año ${this._anio}`);
  }
}

mivehiculo= new vehiculo("marca1","modelo1","1999");
mivehiculo.descripcion();
//Exercise 19: Define a fruit object with properties name and colour. Implement a method that returns a message about the fruit.
class fruta{
  #nombre;
  #color;
  constructor(nombre,color){
    this.#nombre=nombre;
    this.#color=color;
  }
  mensaje(){
    console.log(`La fruta ${this.#nombre} posee el color ${this.#color}`);
  }
}

let mifruta=new fruta("Pera","verde");
mifruta.mensaje();
//Exercise 20: Create a device object with properties type, make and model. Implement a method that prints the device information to the console.
class dispositivo{
  #tipo;
  #marca;
  #modelo;

  constructor(tipo,marca,modelo){
    this.#tipo=tipo;
    this.#marca=marca;
    this.#modelo=modelo;
  }
  
  info(){
    console.log(`El tipo de dispositivo es ${this.#tipo} su marca es ${this.#marca} y pertenece al modelo ${this.#modelo}`);
  }
}

let midispositivo=new dispositivo("tipo1","marca2","modelo90");
midispositivo.info();
