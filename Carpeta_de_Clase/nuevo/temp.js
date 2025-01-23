//polyfills
//trozos de código que expresan código nuevo en función del antiguo
//NO MODIFICA LA SINTAXIS
//implementan funcionalidad que no existía en navegadores antiguos
//Ejemplo: Array.includes()
//opcion 1: escribir yo mis propios polyfills
//NO SE HACE
if(!Array.prototype.includes){
    //el navegador no soporta el método includes y hay que hacer un polyfill
    Array.prototype.includes=function(elemento){
        //codigo que simula el comportamiento de Array.includes()
     /*   for()
            this[i]==element return true;*/
    }
}

/*//OPCION 2: usar bibliotecas externas corejs, regenerator-runtime´
    -node.js -> corejs junto con empaquetadores (bundlers) webpack babel (parcel)
    -CDN (content delivery networks)


    OPCION 3: usar servicios web polyfill.io
        <script src="https://cdn.polyfill.io/v3/polyfill.min.js?features=es2015,es2016"></script>

*/




//transpilación(transpilling)
//
/*
    Traduccion sintáctica
    const suma=(a,b)=>a+b;

    ver suma=function(a,b){
    return (a+b);
    }




configure babel
    -babel.config.js or babel.config.json
    -.browserlistrc
    -información bajo un apartado browserlist en package.json
    -un fichero webpack.json


configurar webpack: tres ficheros
    -webpack.common.js -> conf comunes a las dos versiones
    -webpack.antiguo.js -> conf para navegadores antiguos
    -webpack.modernos.js -> conf para navegadores modernos
 */
