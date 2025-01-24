//adjuntar eventos
//attach events

//let nodo= console.log(document.querySelector("#botones>button:nth-of-type(1)"));

/*
let nodo= document.querySelector("#botones");

const cambiar=()=> {
    nodo.firstElementChild.classList.toggle("rojo");
}
nodo.addEventListener("click", cambiar);
*/


//nodo.addEventListener("click",()=>{console.log("manejador1")});
//nodo.addEventListener("click",()=>{console.log("manejador2")});

//definirlo como class
/*
class manejadorEventos{
    constructor(element){
        if(!element){
            throw new Error("el elemento no existe");
        }else{
            element.addEventListener("click", this.decirHola);
        }
    }
    decirHola(){
        alert("hola, criatura, te saludo");
    }
}

let nodo= document.querySelector("#botones").firstElementChild;

try{
    const boton= new manejadorEventos(nodo);
}catch(error){
    console.log(error.message);
}
*/

//propiedades
//type ->  tipo de evento
//target -> nodo que disparó el evento
//currentTarget -> nodo al que se le asignó el manejador de eventos
//isTrusted -> true cuando lo lanza el usuario
//timeStamp -> cuenta en milisegundos 
//clientX -> coordenadas
//clientY -> coordenadas
//altKey -> te dice si estabas pulsando la tecla alt
//ctrlKey ->te dice si estabas pulsando la tecla ctrl
//shiftKey ->te dice si estabas pulsando la tecla shift
//dataset.nombre
//dataset.fecha
/*
let nodo=document.querySelector("#botones").firstElementChild;
nodo.addEventListener("click", (evento)=>{
    console.log(evento.type,
                evento.target,
                evento.currentTarget,
                evento.isTrusted,
                evento.timeStamp,
                evento.clientX,
                evento.clientY,
                evento.altKey,
                evento.ctrlKey,
                evento.shiftKey,
                evento.target.dataset.fecha
    );

    if(evento.target.dataset.mostrar){

    }

});
*/

//evitar el comportamiento por defecto
//prevent default behaviour
/*
document.querySelector("a").addEventListener("click",evento=>{
    evento.preventDefault();
    alert("No te vas a poder ir nunca");
});



document.querySelector("#botones").addEventListener("contextmenu", evento=>{
    evento.preventDefault();
    alert("no copies el texto de esta web, que está protegido");
});
*/


//eliminar manejadores de eventos

/*
document.querySelector("#mouseover").addEventListener("mouseover",()=>{
    document.querySelector("p.informacion").innerText+="has pasado el raton por encima del botón";
});
*/

/*
añadir texto
*/
/*
let caja_texto=document.querySelector("p.informacion");

function respondermouseOver(){
    caja_texto.innerText+="has pasado el raton por encima del botón"
}
let botonOver=document.querySelector("#mouseover");
botonOver.addEventListener("mouseover",respondermouseOver)
*/
/*
eliminar el texto y limpiar el text area
*/
/*
function eliminarManejador(){
    botonOver.removeEventListener("mouseover", respondermouseOver);
    caja_texto.innerText="Ya no se escuchan eventos";
}
document.querySelector("#eliminar-manejador").addEventListener("click",eliminarManejador)
*/
/* 
volver ha habilitar el texto
*/
/*
function aniadirManejador(){
    botonOver.addEventListener("mouseover", respondermouseOver);
}
document.querySelector("#aniadir-manejador").addEventListener("click",aniadirManejador);
*/

//propagacion de eventos -> delegacion de eventos

//Fase 1: capturing (captura)
//Fase 2: target (objetivo)
//Fase 3: bubbling (burbujeo)

//Fase 1: window -> document -> html -> body -> section -> article -> p
// - No es la fase por defecto



//Fase 3: p-> article -> section -> body -> html -> document -> window
/*
document.querySelector("article").addEventListener("mouseover", 
    (evento)=>{
    console.log("Fase de captura: el evento ha llegado a " + evento.currentTarget.tagName + " pero lo ha lanzado "
        + evento.target.tagName);
},{capture:true});

document.querySelector("p").addEventListener("click", ()=>{
    console.log("estoy en p y he hecho click");
});*/
/*
document.addEventListener("click", evento=>{
    console.log("Fase de burbujeo: el evento ha llegado a " +  evento.currentTarget.tagName + " pero lo ha lanzado "
        + evento.target.tagName); 
});

document.querySelector("section").addEventListener("click", 
    (evento)=>{
    console.log("Fase de burbujeo: el evento ha llegado a " + evento.currentTarget.tagName + " pero lo ha lanzado "
        + evento.target.tagName);
        evento.stopPropagation();
});


document.querySelector("article").addEventListener("click", 
    (evento)=>{
    console.log("Fase de burbujeo: el evento ha llegado a " + evento.currentTarget.tagName + " pero lo ha lanzado "
        + evento.target.tagName);
});

//rebota hacia arriba
//fase de captura- va primero


document.querySelector("section").addEventListener("click", 
    (evento)=>{
    console.log("Fase de captura: el evento ha llegado a " + evento.currentTarget.tagName + " pero lo ha lanzado "
        + evento.target.tagName);
},{capture:true});


document.querySelector("article").addEventListener("click", 
    (evento)=>{
    console.log("Fase de captura: el evento ha llegado a " + evento.currentTarget.tagName + " pero lo ha lanzado "
        + evento.target.tagName);
},{capture:true});
*/


/*document.querySelector("p").addEventListener("click", ()=>{
    console.log("estoy en p y he hecho click");
});*/

/*
document.querySelector("article").addEventListener("click", (evento) => {
    console.log("has pulsado el botón");
    evento.stopPropagation();
});*/





//parar propagacion de eventos
//stopPropagation

//algunos eventos comunes
//click, mouseover

//click: the user clicks on an element.
//dblclick: the user double clicks.
//mouseover: the mouse passes over an element.
//mouseout: the mouse leaves an element.
//mousemove: the mouse moves inside an element.
//mouseenter: Similar to mouseover, but does not propagate to child elements.
//mouseleave: Similar to mouseout, but does not propagate to child elements.
//contextmenu: the user presses right click (opens the context menu).

//Eventos del teclado:

//keydown: el usuario presiona una tecla.
//keyup: el usuario suelta una tecla.


/*document.querySelector("input").addEventListener("keyup", (evento)=> {
    console.log("el evento que ha ocurriod es "+evento.type+ " y has pulsado la tecla " + evento.code);
    document.querySelector("input").classList.add("rojo");
});*/


//Eventos de formulario:

//submit: un formulario es enviado.
//change: el valor de un campo de entrada cambia.
//input: Similar a change, pero ocurre mientras el usuario está escribiendo.
//focus: un campo de entrada recibe el foco.
//blur: un campo pierde el foco.

//pendiente
/*
document.querySelector("form").addEventListener("focus", (evento)=> {
    console.log("el evento que ha ocurriod es "+evento.type+ " y has pulsado la tecla " + evento.type);
    document.querySelector("input").classList.add("rojo");
});

document.querySelector("form").addEventListener("blur", (evento)=> {
    console.log("el evento que ha ocurriod es "+evento.type+ " y has pulsado la tecla " + evento.type);
    document.querySelector("input").classList.remove("rojo");
});
*/






/*
Eventos de documento/ventana:

- DOMContentLoaded: Cuando el DOM está completamente cargado.
- load: todos los recursos (imágenes, scripts, etc.) están completamente cargados.
- resize: la ventana del navegador se redimensiona.
- scroll: el usuario desplaza la página.
*/

/*
window.addEventListener("scroll", () => {
    alert("has redimensionado el navegador");
});
*/


//Eventos del portapapeles:

//cut: el usuario corta texto.
//copy: el usuario copia texto.
//paste: el usuario pega texto.

document.querySelector("input").addEventListener("copy", (evento)=>{
    alert("oye, no me copies");
    evento.preventDefault();
});


//carga dinámica de bibliotecas con JS
//al pulsar en boton 1 se carga un script en la web
//dynamic loading (lazy loading)

document.querySelector("button").addEventListener("click",(evento)=>{
    const script= document.createElement("script");
    script.src="js/script.js";
    script.type="text/javascript";
    document.head.append(script);

});


