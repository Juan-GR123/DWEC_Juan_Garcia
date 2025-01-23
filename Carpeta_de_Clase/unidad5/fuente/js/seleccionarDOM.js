/*
window
document
*/


/*console.log(document.head);
console.log(document.body);
*/

let elemento=document.getElementById("unico");
//console.log(elemento);


//colección
let lista=document.getElementsByTagName("p");
//console.log(lista[1]);

let aux= document.getElementsByClassName("nombre");
//console.log(aux);

aux=document.querySelector("p");
//console.log(aux);

aux= document.querySelectorAll("p");
console.log(aux);

aux= document.querySelector('section:last-of-type ul>li:last-of-type');
console.log(aux);


