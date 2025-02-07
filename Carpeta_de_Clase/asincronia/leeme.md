asincronía 

1.- sincronia 

instruc. secuencialmente y hasta que no

Ciclo de eventos (event loop) -> como se ejecuran las instr en JS

        pila de ejecución (call stack) -> inst síncronas.
        coña de microtareas ->
        cola de tareas (tasj queue -> instr asíncronas)


mecanismos 
    -funciones globales- setTimeout, setInterval
    -eventos
    -callbacks (funciones de retorno) hasta ES6
    -promesas- surgen en 2015 (ES6)

# Promesas
Un objeto que representa el estado de una operacion asincrona

-pendiente
-cumplida (fulfill)
-rechazada (rejected)

Métodos
    then () -> gestionar el resultado de la promesa cuando tiene exito
    catch () -> resultado cuando no tiene éxito
    finally() -> opcional


    Promise.all()-> Espero a todas las promesas y resuelvo si todas resuelven (AND)
    any() -> Espero a todas las promesas y resuelvo solo la primera que se resuelva
    race() ->
    allSettled() ->

promesa.then(
    codigo que lee datos
).catch(
    codigo de error
)


API fetch (XMLHTTPRequest)
    -fetch(URL) -> hace la solicitud
    -request -> solicitud HTTP
    -response -> respuesta del serv
        -status->200,203,403,404
        -ok
        -body
        -headers
        -url
        -tipo (basic, cors, etc.)
        -json()
        -blob (imagen, pdf)
        -text()
    -Headers
    -formData

flujo de trabajo:
    -solicitud HTTP (fetch(url)) -> return Promise
    -usar métodos del obj promise para inter con promesa 
        -.then si se resuelve
        -catch si se rechaza
    -la promesa devuelve response
    -comprobar objeto response
        -si ok, trato datos
        -si no, error y acabo



Sintaxis nueva: ES8 (2017) await/async desaparecen then y catch


- async -> antepone a la función -> func asinc dev promesa
- await -> esperar a que la prom se resuleva -> SOLO en func. con async

async function conexion(){
    let respuesta = await fetch("http://www.miapi.com/dameFoto");
    if(respuesta.ok){ //ok significa que devuelve datos si es true
        let datos = await respuesta.json();
        console.log(datos.nombre, datos.apellidos);
    }else{
        throw new Error("error");
    }
}

conexion();


//trabajadores web
(web workers)

//hilo ejecución 

//SE ejecuta en el hilo principal
//hilo principal -> por defecto todo el cod JS y el renderizado del DOM
código síncrono -> pila de ejecución -> console.log(for);
código asíncrono -> cola de microtareas -> (más prioridad) promesas NO SE PUEDE INTERRUMPIR
codigo asíncrono -> cola de tareas -> eventos (menos prioridad tiene) SE PUEDE INTERRUMPIR


//web workers -> mandan código sinc a un hilo secundario

//métodos 

trabajador.postMessage("msj"); --> hilo principal

self.postMessage("msj") -> msj del trabaj. al hilo princi

const traba = new Worker();

traba.terminate(); //--> en el hilo principal
self.close(); //->trabajador


self.importScripts(url)


//eventos

-message

    trabajador.addEventListener("message", (evento) =>{
        console.log("he recibido" + evento.message)
    });

  trabajador.onmessage =(evento) =>{
        console.log("he recibido" + evento.message)
    };


-messageerror

-error 
    trabajador.onerror=()=>{
        console.log("ocurrío un error")
    }

