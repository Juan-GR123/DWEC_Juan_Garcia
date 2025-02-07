const trabajador=new Worker('./workers.js');
trabajador.postMessage('a trabajar');
trabajador.postMessage("muere, maldito");


trabajador.addEventListener("message", (evento)=>{
    console.log(evento.data.mensaje);
    const parrafo =  document.createElement("p");
    parrafo.innerText = evento.data.resultado;
    document.body.append(parrafo);
});

//document.querySelector("button").addEventListener("mouseover",(evento)=>{
//    evento.toggle("rojo");
//});