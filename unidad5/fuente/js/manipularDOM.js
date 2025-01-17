/* tipos de nodos
1-> elemento <p>
2-> atributos
3-> texto elemento
8->comentario
*/
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

//REVISAR
//imagen.setAttribute("hola","aa");
//console.log(imagen.hasAttribute("asdasd"));



