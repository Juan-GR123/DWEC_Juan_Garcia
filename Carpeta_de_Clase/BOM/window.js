//window objeto global
//screen

//propiedades

console.log(window.innerHeight,
    window.innerWidth,
    window.outerHeight,
    window.outerWidth
);



// métodos
window.setTimeout(()=>{
    console.log("mensaje diferido");
},2000);

/*
window.setInterval(()=>{
    console.log("tic", "tac");
},5000);
*/
/*
let numero=0;
let incremento=1000;

let intervalo= window.setInterval(()=>{
    numero+=incremento;
    console.log(`El script se mostro hace ${numero} segundos`);
},incremento);


window.setInterval(()=>{
    clearInterval(intervalo);
},5000); */


//window.alert("hola esto es una ventana bastante molesta");

//window.confirm("¿aceptas?");

//let valor = window.prompt("dame un valor");
let URL="https://duckduckgo.com/";
let destino="_blank";
let carac = "heigth=400, width=600, resizable";

let ventana= window.open(URL,destino,carac);

//cambia a esas dimensiones
    //ventana.resizeTo(1000,800);

//añadir el tamaño original, lo que yo le ponga
//resizeBy
ventana.resizeBy(200,200);


//moveto
//lleva a las coordenadas indicadas
ventana.moveTo(900,500);


//screen

console.log(
    screen.width,
    screen.height,
    screen.availHeight,
    screen.availWidth,
    screen.colorDepth,
    screen.orientation
);

//navigator -> geolocalización