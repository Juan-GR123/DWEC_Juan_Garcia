//Destructuring

//Exercise 1: Create a function that receives an object with the properties name and age, 
//and uses destructuring to return a string that says 
//"Hello, my name is [name] and I am [age] years old."
let personacons={
  nombre:"Laura",
  edad:29
}

function recibir(nombre,edad){
    this.nombre=nombre;
    this.edad=edad;
      this.saludar=function(){
      console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    };
  };


let persona1= new recibir(personacons.nombre,personacons.edad);
 console.log(persona1.saludar());
//Exercise 2: Create an object representing a book with properties like title, author, and year. Use destructuring to print each of these properties to the console.
let libro={
    titulo:"La ILIADA",
    autor:"Homero",
    edad:"1892"
  }
  Object.values(libro).forEach(valor=>{
    console.log(valor);
  });
//Exercise 3: Create a function that receives an array of objects 
//(each object representing a person with properties name and age) and uses destructuring 
//to return a new array that contains only the names.
let arrayper={};
let persona2 = [
  { 
    nombre: 'murphy',
    edad: 4
  },
  { 
    nombre: 'Lux',
    edad: 10
  },
  { 
    nombre: 'Kuro',
    edad: 20
  },
  { 
    nombre: 'Akane',
    edad: 30
  },
]
  let i=0;
Object.values(persona2).forEach(valor=>{
  arrayper[i]=[valor.nombre];
  i++;
});

 console.log(arrayper);
//Exercise 4: Given a nested object that contains information about a city (name, population, country), 
//use destructuring to access the country property and display it in the console.
//Advanced Usage of this
const ciudad={
  //nested property
  info:{
    nombre:"pez",
    poblacion:300,
    pais:"Algun lugar"
  },
    habla(){
    console.log(this.info.pais);
  }
};

const ciudad1=Object.create(ciudad);

ciudad1.habla();


//Exercise 5: Create an object representing a car with a method showDetails that uses 
//this to access its properties brand and model. Then, create a function that calls 
//this method and demonstrates the correct use of this.
let coche={
    marca:"Tesla",
    modelo:"H4"
  };
  //sin this
  showDetails=function(coche){
    console.log(coche.marca,coche.modelo);
  }
  
  showDetails(coche);
  
  function CocheF(coche){
    this.marca=coche.marca;
    this.modelo=coche.modelo;
  };

  //con this
  CocheF.prototype.ShowDetails2=function(){
    console.log(this.marca,this.modelo);
  }
  const coche1=new CocheF(coche);
  coche1.ShowDetails2();
//Exercise 6: Define an arrow function inside a method of an object that tries to access this
// and shows what happens. Then, fix the problem using a traditional function.
let usuario = {
    nombre: "John",
    flecha: () => this.nombre
  };
  //No pasa nada
  console.log(usuario.flecha());
  
  //solucionar
  function usuario2(nombre){
    this.nombre=nombre;
    this.flecha=()=>console.log("Hola " + this.nombre + ", ¿como estas?");
  }
  //Ahora si se realiza correctamente
  let us1=new usuario2("John");
  us1.flecha();
//Exercise 7: Create an object representing a counter with methods to increment and show the value. 
//Ensure that this works correctly in both methods.
let contador={
    valor:10
  };
  
  contador.incremento=function(numero){
   this.valor=this.valor+numero;
  }
  
  contador.incremento(10);
  
  contador.mostrar=function(){
    console.log(this.valor);
  }
  contador.mostrar();
//Exercise 8: Create a user object with a present method. 
//Then, call this method from another context (outside the object) using call or apply 
//to demonstrate how the context of this can be changed.
let usuarioNuevo={
    nombre:"Pepe",
    array:[3,4,5,6],
    metodo: function (){
      console.log(this.array);
    }
  };
  usuarioNuevo.metodo();
  
  
  const aplicar= Math.min.apply(null,usuarioNuevo.metodo());
  
  console.log(aplicar);
//Optional Chaining

//Exercise 9: Create a nested object that represents a student with properties name and course. 
//Use optional chaining to access a property that may not exist (e.g., student.course.name) 
//and display a message in the console if the property exists.
let estudiante={
    nombre:"John",
    curso:{
      nombre:"2 DAW"
    }
  }
  const comprobacion=estudiante.curso?.nombre;
  const comprobacionF=estudiante.curso.edad;
  console.log(comprobacion);
  console.log(comprobacionF);
//Exercise 10: Define an object representing a person with optional properties. 
//Use optional chaining to access properties that may not be defined and return a 
//default value if they do not exist.
let personaMAS={
    nombre:"Ramon",
    fecha:{
      nacimiento:"21/03/1999"
    }
  }
  
  let comprob1=personaMAS.fecha?.nacimiento;
  let default1=personaMAS.fecha?.cumple;
  
  
  function comprobacion3(a){
    if(a==null){
      a="valor por defecto";
    }
    return a;
  }
  //console.log(comprob1,default1);
  
  console.log(comprobacion3(comprob1));
  console.log(comprobacion3(default1));
//Exercise 11: Create an object that contains information about a company and use optional 
//chaining to access the company's address, displaying a message in the console if the address is not defined.
let empresa={
    nombre:"",
    info:{
      direccion:undefined
    }
  }
  
  let empresa1=empresa.info?.direccion;
  
   function comprobacion4(a){
      if(a==null){
        a="La direccion de la empresa no esta definida";
      }
      return a;
    }
  
  console.log(comprobacion4(empresa1));
//Exercise 12: Define an object representing a book with a review property that can be null. 
//Use optional chaining to display the review in the console only if it exists.
let libroNuevo={
    info:{
    nombre:"Viaje hacia el este",
    fecha:1592,
    reseñas:null
  }
  }
  
  function existencia(libro){
    if(libro!=null){
      console.log(libro);
    }
  }
  
  let libro1=libroNuevo.info?.reseñas;
  
  existencia(libro1);
//Getters and Setters

//Exercise 13: Create an object representing an employee with properties name and salary. Define a getter for salary that returns the salary in currency format and a setter that validates if the salary is a positive number.

//Exercise 14: Define an object representing a circle with a radius property. Create a getter that calculates and returns the area of the circle and a setter that validates the value of the radius.

//Exercise 15: Create an object representing a student with properties name and grades. Define a getter that returns the average grade and a setter that adds a new grade.

//Exercise 16: Define an object representing a product with properties name, price, and discount. Create a getter that returns the final price after the discount and a setter that validates that the price and discount are positive.

//Prototypical Inheritance and Method Overriding

//Exercise 17: Create an object animal with a method makeSound. Then, create a dog object that inherits from animal and overrides the makeSound method to return "Woof".

//Exercise 18: Define a vehicle object with a type property and an info method. Create a motorcycle object that inherits from vehicle and overrides the info method to include specific information about the motorcycle.

//Exercise 19: Create a base person object with properties name and age. Then, create a teacher object that inherits from person and adds a subject property, overriding the method that presents the information.

//Exercise 20: Define a book object with a description method. Then, create a novel object that inherits from book and overrides the description method to include additional information specific to a novel.