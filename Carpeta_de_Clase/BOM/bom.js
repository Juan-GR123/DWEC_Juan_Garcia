//location

//console.log(location.href);
//location.href="https://www.ecosia.org";

/*console.log(location.protocol,
        location.host,
        location.hostname,
        location.port,
        location.pathname,
        location.hash, //te dice el nombre de lo que haya detras de la # en el path



);
location.replace() //-> redirigit y sustituir (historial)
location.assign() //-> redirige pero no sustituye*/

//history
//SPA

//history.back() -> llevar a la pagina anterior
/*
let numero=1;
document.getElementById("anyadir").addEventListener("click", ()=>{
    const informacion = {pagina: numero, titulo: `Pagina ${numero}`};
    history.pushState(informacion, `Página: ${numero}`, `?pagina=${numero}`);
    console.log(`se ha añadido al historial la info ${numero}`);
    numero++;
});


document.getElementById("anterior").addEventListener("click",()=>{
    history.back();
});

document.getElementById("siguiente").addEventListener("click",()=>{
    history.forward();
});

window.addEventListener("popstate", ()=>{
    console.log(history.state.titulo);
});
*/


//almacenamiento en el cliente
//history
//localStorage
//sessionStorage
//cookies (galletitas)

//localStorage
/*
1.- vida util -> No tiene fecha de fin (hasta que se borren explicitamente)
2.- alcance -> solo las web del mismo dominio origen (protocolo+dominio+puerto)
3.  Disponibilidad -> Cuealquier pestaña o ventana del navegador (tener en cuenta alcance)
4. Capacidad -> depende del navegador (5MB) 
5. tipos de datos-> string. Si quiero objetos -> JSON
 */
//meter los datos del usuario en local
localStorage.setItem("nombre","Atanasio");
localStorage.setItem("edad","25");
localStorage.setItem("profesion","deshollinador");
localStorage.clear();
console.log(localStorage.getItem("nombre"));
console.log(localStorage.length);
//localStorage.removeItem("nombre");


//funciona solo cuando se modifica el almac. en otra pestaña del mismo dominio
//window.addEventListener("storage", (evento) => {
//    console.log("esto en el evento");
//    console.log(`algo se ha introducido en el localStorage ${evento.key} ${evento.newValue}`);
//});


//sessionStorage
/*
1.- vida util -> la sesion (hasta que se borren explicitamente)
2.- alcance -> solo las web del mismo dominio origen (protocolo+dominio+puerto)
3.  Disponibilidad -> Solo la pestaña actual
4. Capacidad -> depende del navegador (5MB) 
5. tipos de datos-> string. Si quiero objetos -> JSON
 */
sessionStorage.setItem("nombre","Atanasio");
sessionStorage.setItem("edad","25");
sessionStorage.setItem("profesion","deshollinador");
console.log(sessionStorage.getItem("nombre"));
console.log(sessionStorage.length);


// Galletitas
//BOM -> DOM (document) window
//stateless

//origen (first-party) -> dominio actual
//terceros (third-party) -> otros dominios

/*
1.- vida util -> fecha de fin
2.- alcance -> solo las web del mismo dominio origen (protocolo+dominio+puerto)
3.  Disponibilidad -> Solo la pestaña actual
4. Capacidad -> 4kB por galletita 
5. tipos de datos-> string. Si quiero objetos -> JSON
*/

/*
- expires: Fecha en formato UTF: "Thu, 6 Feb 2025, 12:00:00 UTC" PD: sesion  
- max-age: validez en sg
- path: Ruta para la que es válida www.midominio.com/productos PD: directorios en el que este 
- domain: dominio www.midominio.com
- secure: sólo si la conex es HTTPS PD: FALSE
- samesite: controla las solicitudes entre sitios PD:LAX
    - strict -> solo se manda si la solicitud viene del mismo dominio
    - lax -> se manda si viene del mismo dom Y DE DOMINIOS DISTINTOS CUANDO EL USUARIO pincha en un 
    enlace. NO cuando se manda automatico.
    - none -> se manda en TODAS LAS SOLICITUDES (secure tiene que estar habilitado)



clave
valor
validez(expires o max-age)
path
domain
secure
samesite

console.log(document.cookie);
*/

//crear una cookie
document.cookie = "nombre=Atanasio ; max-age=3600";

//para la tarea 5
///history -> //guardar variables 
//localStorage //para reutilizar datos del usuario
