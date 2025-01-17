/* tipos de nodos
1-> elemento <p>
2-> atributos
3-> texto elemento
8->comentario
9- document
*/

let titulo1=document.getElementById("titulo1");

console.log(titulo1.nodeType, titulo1.nodeName, titulo1.nodeValue);
console.log(document.body.nodeType, document.body.nodeName, document.body.nodeValue);

console.log(titulo1.firstChild.nodeType,titulo1.firstChild.nodeName, titulo1.firstChild.nodeValue);

/*
interpretan las etiquetas HTML
-innerHTML
-outerHTML

Nolas interpretan
-innerText puesdes leer o escribir contenido
-outerText
-textContent
*/


let cabecera=document.getElementsByTagName("header");
console.log(cabecera);
//cabecera[0].outerHTML="<h2>Esto es un sustituto del h1</h2>";
//titulo1.innerHTML="<h2>Esto es un sustituto del h1</h2>";
//titulo1.outerHTML="<h2>Esto es un sustituto del h1</h2>";

//cabecera[0].innerText="<h2>Esto es un sustituto del h1</h2>";
//console.log(cabecera[0].innerText);

//cabecera[0].innerText="<h2>Esto es un sustituto del h1</h2>";

cabecera[0].textContent="<h2>Esto es un sustituto del h1</h2>";

//console.log(cabecera[0].textContent);





/*
console.log(document.getElementById("titulo1").nodeType);
console.log(document.body.firstChild.nodeType,document.body.firstChild.nodeValue);

//REVISAR
console.log(document.body.getElementsByTagName("section")[0].firstChild.nodeValue);

//innerHTML, outerHTML
document.getElementById("titulo1").innerHTML="<strong>Esto es un texto generado por JS</strong>";

document.getElementsByTagName("h2")[0].outerHTML="<strong>esto es un titulo de nivel 2</strong>";

let lista=Array.from (document.getElementsByTagName("p"));
console.log(lista);
/*
lista.forEach(elemento => {
    setTimeout(()=>{//con el inner te cargas el texto
        elemento.innerHTML="este texto está recién generado";
    },3000);
    
});

lista.forEach(elemento => {
    setTimeout(()=>{//con el outer te cargas la etiqueta y el texto
        elemento.outerHTML="<h3>este texto está recién generado</h3>";
    },3000); 
});
*/
/*
//innerText//outerText//textContent
//incluir etiquetas HTML, incluir espacios
lista2=document.getElementsByTagName("p");
lista2[0].innerText="<p>hola</p>";
lista2[1].outerText="<p>hola</p>";
lista2[2].textContent="hola";

//

let imagen=document.getElementsByTagName("img");
imagen.alt="un precioso paisaje";
imagen.nombreimagen="paisaje.jpg";
*/


//REVISAR
//imagen.setAttribute("hola","aa");
//console.log(imagen.hasAttribute("asdasd"));


//manipular atributos
/*
dos tipos
    -estandar
    -definidos por el usuario
*/

//comprobar si un nodo tiene un atribito
let imagen=document.querySelector("img");
console.log(imagen.hasAttributes());
console.log(imagen.hasAttributes("src"));

//crear propiedad no estándar (o crearla si no existe)
document.body.fecha="17/1/25"; //no funciona
document.body.setAttribute("fecha","17/1/25");
//imagen.fecha="17/1/25";

//darle valor a prop estándar
imagen.alt="una imagen estupenda";
imagen.setAttribute("alt","una imagen maravillosa");


//leer valor
console.log(document.body.fecha, document.body.getAttribute("fecha"));

let id=document.getElementsByTagName("p")[0];
//let id=document.querySelector("p");
id.id="rojo";
//document.setAttribute("id", "rojo");


console.log(imagen.getAttributeNames());
imagen.getAttributeNames().forEach(atributo=> {
    console.log(atributo);
});

//console.log(imagen.attributes);

for(let atributo of imagen.attributes){
    console.log(`nombre:${atributo.name} valor:${atributo.value}`);
};

console.log(document.getElementsByTagName("p")[0].attributes);

document.body.removeAttribute("id");



//clases
/* obtener información
classList -> DOMTokenList
.length
.value
.name
.item(0)
.contains("algo")
*/

let lista= Array.from(document.getElementsByClassName("especial"));

lista.forEach(parrafo=>{
    console.log(parrafo.classList.length);
    console.log(parrafo.classList.value);
    console.log(parrafo.classList.name);
    console.log(parrafo.classList.contains("unaclasequenoexiste"));
    console.log(parrafo.classList.contains("especial"));
    parrafo.classList.forEach(clase=>{
        console.log(clase);
    });
});

//eliminar
lista[0].classList.remove("especial");

//añadimos
lista[0].classList.add("una_clase_nueva");

lista[1].className="una_clase otra_clase";// sobreescribe la clase

lista[1].classList.add("otra_clase_mas");//solo añade clases nuevas

lista[2].classList.replace("especial","del_monton");//reemplace una clase por otra

lista[1].classList.toggle("verde");
//toggle: alternar

//atributos lógicos (boolean)
/*
valor=true
valor=false
*/

let boton=document.getElementsByTagName("button");
console.log(boton[0]);
boton[0].toggleAttribute("disabled","");
setTimeout(()=>{
    boton[0].toggleAttribute("disabled");
},5000);





