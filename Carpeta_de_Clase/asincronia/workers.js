//trabajador web que hace una tarea pesada

import tareaPesada from './tareaPesada.js';


self.onmessage=(evento)=>{
    if(evento.data=="a trabajar"){
        const resultado = tareaPesada();
        self.postMessage({texto: "he terminado", resultado: `${resultado}`});
    }else{
        console.log("Muriendo....");
        self.close();
    }
  
}


