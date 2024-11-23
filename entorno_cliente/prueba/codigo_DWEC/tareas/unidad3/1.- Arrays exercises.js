////////////////////////
////simple exercises////
////////////////////////

//1. Creating arrays

//Exercise 1: Create an empty array and then add numbers from 1 to 5.
let array= [];
for(let i=0;i<5;i++){
  array.push(i);
}
console.log(array);
//Exercise 2: Create an array with the names of five fruits and access the third element.
let frutas=["manzana","pera","platano","mandarina","naranja"];

console.log(frutas[2]);
//Exercise 3: Create an array with five elements, including numbers, strings, and a boolean.
const array2=["manzana",10,25.3,false,true];
console.log(array2);

//Exercise 4: Create a 3x3 two-dimensional array that contains numbers from 1 to 9.
let array3=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ]
  
  console.log(array3);

//2. Accessing elements

//Exercise 1: Create an array with the names of four cities. Access and display the first and last elements.
let ciudades=["Granada", "Malaga", "Valencia","Sevilla"];

console.log(ciudades[0],ciudades[3]);
//Exercise 2: Given the array [2, 4, 6, 8, 10], access the second and penultimate elements.
let prueba=[2, 4, 6, 8, 10];

console.log(prueba[1],prueba[3]);
//Exercise 3: Given an array of arrays [[1,2], [3,4], [5,6]], access the second element of the third array.
let prueba2=[[1,2], [3,4], [5,6]];

console.log(prueba[2]);
//Exercise 4: Create an array with the days of the week. Use a negative index to access the last day.
let semana=["Lunes","Martes","Miercole","Jueves","Viernes","Sabado","Domingo"];

console.log(semana.slice(-1));

//3. Inserting and removing elements

//Exercise 1: Create an array with three colors. Add a new color at the end.
let colores=["Rojo","Azul","Verde"];
console.log(colores);

colores.push("Amarillo");

console.log(colores);

//Exercise 2: Create an array with five numbers. Use pop() to remove the last element and push() to add a new one at the end.
let numeros=[1,2,3,4,5];
console.log(numeros);

numeros.pop();
numeros.push(10);
console.log(numeros);

//Exercise 3: Use splice() to remove the third element from a five-fruit array.
let frutas2=["manzana","pera","platano","mandarina","naranja"];

frutas.splice(2,1);
console.log(frutas2);
//Exercise 4: Insert two elements at position 2 in a three-element array using splice().
let elearray=[1,2,3];

elearray.splice(2,0,"manzana","jugar");

console.log(elearray);

//4. Arrays behaving like stacks and queues

//Exercise 1: Create an empty array. Use push() to add three elements and pop() to remove the last one.
let empty=[];
empty.push(1,2,3);
empty.pop();
console.log(empty);
//Exercise 2: Use an array as a queue. Add elements to the end using push() and remove the first element with shift().
let array4=[1,2,3,4];
array4.push(5);

let eliminado=array4.shift();

console.log(array4);
//Exercise 3: Simulate the behavior of a stack using push() and pop() with an array of numbers.
let pila=[1,2,3];
for(let i=0;i<pila.length;i++){
    pila.pop();
    pila.push(i);
}
console.log(pila);
//Exercise 4: Simulate the behavior of a queue using push() and shift() with an array of names.
let nombre=["pablo","mario","pepe"];
let nombre2=["juan","marco","link"];
for(let i=0;i< nombre.length;i++){
  nombre.shift();
  nombre.push(nombre2[i]);

}
console.log(nombre);

// 5. Iterating over arrays

//Exercise 1: Given an array of numbers [1, 2, 3, 4, 5], use a for loop to display each number.
let numeros3=[1, 2, 3, 4, 5];
for(let i=0;i<numeros3.length; i++){
  console.log(numeros3[i]);
}
//Exercise 2: Use forEach() to iterate over an array of names and display each one in uppercase.
let nombres4=["Link","Zelda","Ganon"];
 nombres4.forEach(element=> console.log(element.toUpperCase()));
//Exercise 3: Use a for...of loop to iterate over an array of fruits and display only those starting with "a."
let frutas3=["naranja","melon","sandia","aceituna"];
for (elemento of frutas3){
  if(elemento.startsWith('a')){
      console.log(elemento);
  }
}
//Exercise 4: Iterate over a two-dimensional array and display each number in the console.
let ejercicio=[[1,2], [3,4], [5,6]];

for(elemento of ejercicio){
  for(segundo of elemento){
      console.log(segundo);
  }
}

//6. Returning the position of an element or checking if it exists

//Exercise 1: Given an array of fruits, use indexOf() to find the position of "mango."
let frutas4=["naranja","melon","sandia","aceituna","mango"];
console.log(frutas4.indexOf("mango"));

//Exercise 2: Use includes() to check if the array [3, 5, 7, 9] contains the number 5.
let numeros4=[3,5,7,9];
console.log(numeros4.includes(5));
//Exercise 3: Given an array with repeated elements, use lastIndexOf() to find the last occurrence of "banana."
let repetidos=["banana","pera","mango","sandia","banana"];
console.log(repetidos.lastIndexOf("banana"));
//Exercise 4: Given an array of names, use indexOf() to return the position of a name, or -1 if it doesn't exist.
let nombres5=["Captain","Jack","Cyntia","Steven"];
nombres5.indexOf("Jack");

//7. Array comparison

//Exercise 1: Compare two arrays [1, 2, 3] and [1, 2, 3] using === and explain the result.
let comparar1=[1,2,3];

let comparar2=[1,2,3];

console.log(comparar1===comparar2);//false

console.log(JSON.stringify(comparar1)===JSON.stringify(comparar2));//true
//Exercise 2: Write a function that compares two arrays and returns true if they are equal in content and length.
let comparacion1=[1,2,3];
let comparacion2=[1,2,3];
function comparara(comparacion1,comparacion2){
  if((comparacion1.length==comparacion2.length) && (JSON.stringify(comparacion1)==JSON.stringify(comparacion2))){
    return true;
  }
  return false;
}
console.log(comparara(comparacion1,comparacion2));
//Exercise 3: Create two two-dimensional arrays and compare them element by element.
let ejercicio2=[[1,2], [3,4], [5,6]];
let ejercicio3=[[3,4],[3,4],[5,6]];

for(let i=0;i<ejercicio2.length;i++){
  console.log(JSON.stringify(ejercicio2[i])==JSON.stringify(ejercicio3[i]));
}
//Exercise 4: Use JSON.stringify() to compare two arrays and check if they have the same content.
let juno=[1,2,3];
let jdos=[1,5,3];

for(let i=0;i<juno.length;i++){
  console.log(juno[i]==jdos[i]);
}

//8. Finding elements in arrays

//Exercise 1: Given an array of numbers, use find() to locate the first number greater than 10.
let buscar=[1,20,34,54,25,16,37,68];
buscar.find(elemento=> elemento>10);
//Exercise 2: Use findIndex() to find the position of the first negative number in an array.
let buscar2=[1,20,34,54,-43,16,37,68];
buscar2.findIndex(elemento=>elemento<0);
//Exercise 3: Given an array with repeated elements, use findLastIndex() to find the last position of a number greater than 5.
let buscar3=[1,20,34,54,-43,16,37,3];
buscar3.findLastIndex(elemento=>elemento>5);
//Exercise 4: Given an array of objects representing people, use find() to locate the first person over 30 years old.
let buscar4=[
  {nombre:"pablo",edad:10},
  {nombre:"Paula" ,edad:20},
  {nombre:"Light",edad:3},
  {nombre:"Lux",edad:34},
  {nombre:"Kuro",edad:5}
];
buscar4.find(elemento=>elemento.edad>30);

//9. Filtering elements

//Exercise 1: Given the array [1, 2, 3, 4, 5], use filter() to return a new array with numbers greater than 3.
let filtro=[1,2,3,4,5];
filtro.filter(elemento=> elemento>3);
//Exercise 2: Filter an array of names to return only those that start with the letter "J."
let nombres6=["Juan","John","Giovani","Touma"];
nombres6.filter(elemento=>elemento.startsWith("J"));
//Exercise 3: Given an array of objects {name: "John", age: 25}, use filter() to return an array of people over 18.
let objetos=[
  {nombre:"pablo",edad:10},
  {nombre:"Paula" ,edad:20},
  {nombre:"Light",edad:3},
  {nombre:"Lux",edad:34},
  {nombre:"Kuro",edad:5}
];
objetos.filter(elemento=>elemento.edad>18);
//Exercise 4: Use filter() and map() to filter numbers greater than 10 and return a new array with the numbers multiplied by 2.
let objetos2=[1,21,43,56,76,8,7];

console.log(objetos2.filter(elemento=>elemento>10).map((x)=>x*2));

//10. Operations with elements (map, reduce)

//Exercise 1: Use map() to create a new array containing the squares of the numbers [1, 2, 3, 4].
let cuadrado=[1,2,3,4];
cuadrado.map((x)=>x*x);
//Exercise 2: Use reduce() to sum all the numbers in the array [5, 10, 15, 20].
let suma=[5,10,15,20];
suma.reduce((total,actual)=>total+actual);
//Exercise 3: Given an array of names, use map() to return a new array where each name is in lowercase.
let nombres7=["Raul","Paul","Azul","Gary"];
nombres7.map((x)=>x.toLowerCase())
//Exercise 4: Use filter() followed by reduce() to filter numbers greater than 5 and then sum them.
let numeros7=[5,10,15,20];
numeros7.filter(elemento=>elemento>5).reduce((total,actual)=>total+actual);

//11. Array concatenation

//Exercise 1: Use concat() to join two arrays of numbers [1, 2, 3] and [4, 5, 6].
let numbers=[1,2,3];
let numbers2=[4,5,6];
let combinar=numbers.concat(numbers2);
console.log(combinar);
//Exercise 2: Concatenate two arrays of strings and display the length of the new concatenated array.
let nombress=["Pikachu","Charizar","Greninja"];
let nombresss=["Blastoise","Venusaur","Lucario"];
let combinacion=nombress.concat(nombresss);
console.log(combinacion.length);
//Exercise 3: Concatenate three arrays of fruits and use join() to convert the new array into a string.
let frutasfinal=["manzana","pera"];
let frutas5=["Naranja","Mandarina"];
let frutas6=["mango","platano"];

let combinar2=frutasfinal.concat(frutas5,frutas6);
console.log(combinar2.join());
//Exercise 4: Use concat() to join two-dimensional arrays and then access one of their elements.
let dimensional=[[1,2],[3,4],[5,6]];
let dimensional2=[[7,8],[9,10],[11,12]];
let combinar3=dimensional.concat(dimensional2);
console.log(combinar3[0]);

//12. Sorting arrays

//Exercise 1: Use sort() to sort an array of numbers [3, 1, 4, 1, 5, 9] in ascending order.
let prueba3=[3,1, 4, 1, 5, 9];
console.log(prueba3.sort((a,b)=>a-b));
//Exercise 2: Alphabetically sort an array of names using sort().
let prueba4=["Juan","Pepe","Marco", "Alfonso"];
console.log(prueba4.sort());
//Exercise 3: Use sort() with a comparison function to sort an array of numbers from largest to smallest.
let prueba5=[30,13, 42, 14, 5, 9];
console.log(prueba5.sort((a,b)=>a-b));
//Exercise 4: Sort an array of objects {name: "John", age: 25} by the age property using sort().
let objetos3=[
  {nombre:"pablo",edad:10},
  {nombre:"Paula" ,edad:20},
  {nombre:"Light",edad:3},
  {nombre:"Lux",edad:34},
  {nombre:"Kuro",edad:5}
];

console.log(objetos3.sort((a,b)=>a.edad-b.edad));

//13. Reversing arrays

//Exercise 1: Use reverse() to reverse an array of numbers [1, 2, 3, 4, 5].
let reverso=[1,2,3,4,5];
reverso.reverse();
//Exercise 2: Reverse an array of strings and use join() to create a string with the words in reverse order.
let reverso2=["Juan","Marco","Polo","Pepe"];
reverso2.reverse();
console.log(reverso2.join());
//Exercise 3: Given a two-dimensional array, use reverse() to reverse the order of the rows.
let reverso3=[[1,2],[3,4],[5,6]];
reverso3.reverse();
//Exercise 4: Use sort() and then reverse() to sort and then reverse an array of numbers.
let reverso4=[1,32,3,4,5,6];
console.log(reverso4.sort((a,b)=>a-b).reverse());

//14. Filling arrays with values (fill)

//Exercise 1: Use fill() to fill an empty array of length 5 with the number 0.
let vacio=new Array(5);
vacio.fill(0);
//Exercise 2: Fill part of an array of numbers [1, 2, 3, 4, 5] with the value 9 starting from index 2.
let vacio2=[1, 2, 3, 4, 5];
vacio2.fill(9,2);
//Exercise 3: Create an array of length 10 and fill it with the value "x" in the last 5 elements.
let vacio3=new Array(10);
vacio3.fill("x",-5);
//Exercise 4: Use fill() to replace the first 3 elements of an array with the value "A."
let vacio4=[1, 2, 3, 4, 5];
vacio4.fill("A",0,3);

//15. Destructuring

//Exercise 1: Destructure a two-element array [10, 20] into two variables.
function imprimir(a,b){
  console.log(a,b);
}
let destru=[10,20];
imprimir(...destru);
//Exercise 2: Destructure the first two elements of an array and store the rest in another variable using the spread operator.
function imprimir2(a,b,c,d){
  console.log(a,b);
  let variable=0;
  variable=[c,d];
  return variable;
}
let destru2=[10,20,30,40];
imprimir2(...destru2);
//Exercise 3: Given a two-dimensional array, destructure the first row into three variables.
let destru3=[[1,2,3],[4,5,6],[7,8,9]];
function imprimir3(a,b,c){
  console.log(a[0],a[1],a[2]);
}
imprimir3(...destru3);
//Exercise 4: Destructure an array of objects {name: "John", age: 25} to get the name and age properties from the first object.
let destru4=[
  {nombre:"pablo",edad:10},
  {nombre:"Paula" ,edad:20},
  {nombre:"Light",edad:3},
  {nombre:"Lux",edad:34},
  {nombre:"Kuro",edad:5}
];

function imprimir4(...cosas){
  console.log(cosas[0]);
}
imprimir4(...destru4);
/////////////////////////////
////final array exercises////
/////////////////////////////

//Exercise 1: Given an array of numbers, remove all negative numbers, reverse the order of the array, and then sum the remaining even numbers. Return the result.
let final=[1,2,-3,4,-5,6,7,8,9,-10];
console.log(final.filter(elemento=>elemento>0).reverse().reduce((total,actual)=>total+actual));
//Exercise 2: You have an array of objects representing people, where each object has the properties name, age, and profession. Filter out people older than 30 who work as "engineers." Then, sort the filtered people by age in descending order and return a new array with just their names.
let final2=[
  {nombre:"pablo",edad:60,profesion:"ingeniero"},
 {nombre:"Paula" ,edad:20,profesion:"biologo"},
 {nombre:"Light",edad:3,profesion:"tenista"},
 {nombre:"Lux",edad:34,profesion:"ingeniero"},
 {nombre:"Kuro",edad:50,profesion:"ingeniero"}
];

final2.filter(elemento=>elemento.edad>30 && elemento.profesion=="ingeniero").sort((a,b)=>b.edad-a.edad);

final2.forEach(valor=>{
 console.log(valor.nombre);
});
//Exercise 3:Given an array of words, remove words that are less than 5 letters long, convert them all to uppercase, sort them alphabetically, and join them into a single string separated by dashes (-). Return the resulting string.
let final3=["hola","adios","trabajo","cansancio"];
let cansado=final3.filter(elemento=>elemento.length>=5);
console.log(cansado.map(x=>x.toUpperCase()).sort().join("-"));
//Exercise 4:You have two arrays of numbers. First, combine both arrays, removing any duplicates. Then, find the highest and lowest numbers and return a new array containing only the numbers between the second lowest and the second highest values (inclusive).
final4=[1,2,3];
final41=[3,4,5];

let combinarfinal=final4.concat(final41);
let finalizacion= combinarfinal.filter((objeto,igual)=> combinarfinal.indexOf(objeto)==igual);
console.log(finalizacion);

let maximo= Math.max(...finalizacion);
//console.log(maximo);
let minimo=Math.min(...finalizacion);
//console.log(minimo);

function segundoalto(array) {
  let largest = array[0];
  let secondLargest = 0;
for (let i = 1; i < array.length; i++) {
    if (array[i] > largest) {
      secondLargest = largest;
      largest = array[i];
    } else if (array[i] < largest && array[i] > secondLargest) {
      secondLargest = array[i];
    }
  }
  return secondLargest;
}
function segundobajo(array){
  let bajo=array[0];
  let segundobajo=+Infinity;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < bajo) {
      segundobajo = bajo;
      bajo = array[i];
    } else if (array[i] > bajo && array[i] < segundobajo) {
      segundobajo = array[i];
    }
  }
  return segundobajo;
}
console.log(segundoalto(finalizacion));
console.log(segundobajo(finalizacion));
finalizacion.forEach(valor=>{
  if(finalizacion.indexOf(valor)>finalizacion.indexOf(segundobajo(finalizacion))){
    if(finalizacion.indexOf(valor)<finalizacion.indexOf(segundoalto(finalizacion))){
            console.log(valor);
    }
  }

});

//Exercise 5:Given a two-dimensional array representing a warehouse table of products (each subarray contains the product name, quantity in stock, and price per unit), do the following:
let final5=[
  {nombre:"mesa",stock:60,precio:100},
 {nombre:"silla" ,stock:20,precio:30},
 {nombre:"cortina",stock:3,precio:62},
 {nombre:"lampara",stock:34,precio:30},
 {nombre:"ventana",stock:50,precio:52}
];
  //Find the product with the highest quantity in stock.

  let caja=0;
  let argumento=final5.sort((a,b)=>b.stock-a.stock);
for(let i=0;i<final5.length;i++){
  if(argumento[i]==argumento[0]){
    caja=argumento[i];
    console.log(argumento[i]);
  }
}
    //Calculate the total value of that product based on its quantity and price.
    let total=caja.stock*caja.precio;
    console.log(total);
       //Return an object with the product name and the total value calculated.
       let objetillo={
        nombre:caja.nombre,
        totalcalculado:total
      }
        console.log(objetillo);
//Exercise 6:Given an array of numbers, separate the odd numbers from the even ones. Then, multiply the even numbers by 2 and the odd numbers by 3. Finally, combine both sets of numbers into a single array sorted from lowest to highest and return the result.
let final6=[1,2,3,4,5,6,7,8,9,10];


  //se filtran los impares
  let impar =final6.filter((numero) => numero % 2 === 1).map((x)=>x*3);
  
  // se filtran los pares
  let par = final6.filter((numero) => numero % 2 === 0).map((x)=>x*2);

  let pareimpar=par.concat(impar).sort((a,b)=>a-b);


console.log(par);
console.log(impar);
console.log(pareimpar);
//Exercise 7:You have an array of objects representing different books, where each object has the properties title, author, and year of publication. Filter out books published after the year 2000, group them by author, and return an object where each key is the author’s name, and the value is an array with the titles of their books.
let final7=[
  
  {titulo:"Breves respuestas a las grandes preguntas",autor:"Stephen Hawking",año:2018},
  {titulo:"Amanecer rojo",autor:"Pierce Brown",año:2014},
  {titulo:"Memorias de Idún",autor:"Laura Gallego",año:1900}
];

  let resultado= final7.filter(elemento=>elemento.año>2000).sort(function(a,b){
  if(a.autor>b.autor){
    return 1;
  }
  if (a.autor < b.autor) {
    return -1;
  }
  return 0
 });
  
console.log(resultado);


let libros={
  Pierce_Brown:"Amanecer rojo",
  Stephen_Hawking:"Breves respuestas a las grandes preguntas"
};
Object.keys(libros).forEach(valor=>{
console.log(valor);
});
Object.values(libros).forEach(valor=>{
console.log(valor);
});

console.log(libros);
//Exercise 8:Given an array of numbers, return a new array where the numbers are squared if they are odd and cubed if they are even. Then, remove any number greater than 500 and return the result.
let final8=[1,2,3,4,5,500];

let impar2=final8.filter(elemento=>elemento%2===1).map((x)=>x*x);
let par2=final8.filter(elemento=>elemento%2===0).map((x)=>x*x*x);

  let pareimpar2=par2.concat(impar2).sort((a,b)=>a-b).filter(elemento=>elemento<500);
console.log(pareimpar2);

//como función
let final81=[1,2,3,4,5,500];

function funcionf(final8){
  let impar2=final8.filter(elemento=>elemento%2===1).map((x)=>x*x);
  let par2=final8.filter(elemento=>elemento%2===0).map((x)=>x*x*x);
  
  let pareimpar2=par2.concat(impar2).sort((a,b)=>a-b).filter(elemento=>elemento<500);
return pareimpar2
}

console.log(funcionf(final81));
//Exercise 9:You have an array of strings representing usernames. You must perform the following actions:

let final9=["Loco","KingExplosion","Ultraman","QueenOfTheCastle","Rambling","Loco"];
//Remove duplicate names.
  let finalizacion2=final9.filter((objeto,igual)=> final9.indexOf(objeto)==igual);
  console.log(finalizacion2);
//Filter names that start with a vowel.
    function vocal(value){
      if(value.startsWith('A',0) ||value.startsWith('U',0) || value.startsWith('E',0)||   value.startsWith('I',0)|| value.startsWith('O',0)){
        return value
    }
    }
let finalizacion3=finalizacion2.filter(vocal);
console.log(finalizacion3);
     //Sort the remaining names in descending order by length.
     let finalizacion4=finalizacion3.sort(function(a,b){
      if(a>b){
        return 1;
      }
      if (a < b) {
        return -1;
      }
      return 0
     });
     console.log(finalizacion4);
    //Return a string where each name is separated by a comma and a space.
    console.log(finalizacion4.join(', '));
//Exercise 10: Given a two-dimensional array representing a grid of colors (each subarray is a row of colors), do the following:
let final10=[["Verde","Azul","Amarillo"],["Violeta","Morado"],["Rojo","Naranja"],["Marrón","Negro","Blanco"]];

//Reverse the order of the rows and columns of the array (matrix transposition).
          let reverso10=final10.reverse();
        //console.log(reverso10);
//Replace all colors containing the letter "a" with "black."
        reverso10.forEach((valor)=>{
          for(let i=0;i<valor.length;i++){
            if(valor[i].startsWith("A")){
              // console.log(valores.replace(valores,'black'));
            valor[i]= valor[i].replace(valor[i],'black');
          }
        }
          return valor.reverse();
      });
//Return the new grid.
    console.log(reverso10);
