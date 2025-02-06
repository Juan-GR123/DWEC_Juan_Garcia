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

