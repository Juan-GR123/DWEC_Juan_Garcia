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

document.querySelector("#mouseover").addEventListener("mouseover",()=>{
    document.querySelector("p.informacion").innerText+="has pasado el raton por encima del botón";
});

