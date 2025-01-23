//movernos por los hijos

let nodoOrigen=document.body;
/*
console.log(nodoOrigen.children,
            nodoOrigen.firstElementChild,
            nodoOrigen.lastElementChild
);

for (let nodo of nodoOrigen.children){
    console.log(nodo.nodeType);
}

Array.from(nodoOrigen.children).forEach((nodo)=>{
    console.log(nodo);
});*/

/*
console.log(nodoOrigen.childNodes,
            nodoOrigen.firstChild,
            nodoOrigen.lastChild
);
*/
//movernos por los hermanos
nodoOrigen=document.querySelector("#lista");

/*
console.log(nodoOrigen.previousElementSibling,
            nodoOrigen.nextElementSibling
);
*/

//console.log(nodoOrigen.previousSibling,
//            nodoOrigen.nextSibling
//);

/*
//movernos al padre
console.log(nodoOrigen.parentElement,
            nodoOrigen.parentNode
);

//encadenaremos movimientos
document.querySelector("main").
children[1].
nextElementSibling.
classList.add("fondo-rojo");

document.querySelector("main").
children[1].
nextElementSibling.
setAttribute("fecha_nacimiento", "1/1/25");
*/

//métodos adicionales
//closest
let nodo=document.querySelector("[href*='ecosia']");
console.log(nodo.closest("section"));
//closest -> el padre mas cercano a la condicion lo devuelve
//contains
nodoOrigen=document.querySelector("#lista");
console.log(nodoOrigen.contains(document.querySelector("ul")));
