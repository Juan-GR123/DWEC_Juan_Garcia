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
//localStorage.removeItem("nombre");



window.addEventListener("storage", (evento) => {
    console.log("esto en el evento");
    console.log(`algo se ha introducido en el localStorage ${evento.key} ${evento.newValue}`);
});

localStorage.setItem("objeto","OBJ1");
console.log(localStorage.getItem("objeto"));
console.log(JSON.stringify(localStorage.getItem("objeto")));