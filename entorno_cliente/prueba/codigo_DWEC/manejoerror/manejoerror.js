/**
 * 2 tipos errores:
 -predecibles
 -impredecibles

formas de manejar errores:
 - if -> predecibles
 - try..catch

¿cuando if?
    -predecibles
    -elegir si quiero interrumpir el flujo o no

¿cuando try..catch?
    -impredecibles
    -quiero que la ejecución del codigo se interrumpa para tratar el error

try{
    condición
}catch(error){
    console.log(error.)
}finally{
    siempre se ejecuta
}

 */

function dividir(num1,num2){
    if(num2!=0){
        let resultado=num1/num2;
        return resultado;
    }else{
        console.log("no puedo hacer la operación");
    }

}

try{
    funcionQueNoExiste();
}catch(error){
console.log(error.name,error.message,error.stack);
}finally{
    console.log("esto siempre se ejecuta");
}

function procesarJSON(datos){
    try{
        let objeto=JSON.parse(datos);
    }catch(error){
        console.log(error.message);
    }
  
}

procesarJSON('{nombre:procopio,edad:25}');

//rethrowing errors
//relanzar errores

function conectarServidor(){
        try{
            const servidorEncendido=false;
            if(!servidorEncendido){
                throw new Error("servidor apagado");
            }
        }catch(error){
            console.log(error.stack);
            throw error;
        }
}

function iniciarConexion(){
    try{
        conectarServidor();
    }catch(error){
        console.log(`estoy en iniciarconexion ${error.message}`);
    }
}

iniciarConexion();


//where to handle errors try..catch(impredecibles)
/*
mejor forma 1 o 2
    1. dentro de cada funcion donde se puedan producir
    2. igual que la 1 le añado el código donde se llama al cofigo que puede dar error
    3. solo en el código que llama a el código donde se puede producir el error
    4. meter gran parte del código en un try..catch
*/


function obtenerPropiedad(objeto,propiedad){
    try{
        return objeto.propiedad;
    }catch(error){
        console.log(error.message);
        throw error;
    }
   
}

function procesarNombre(nombre){
    try{
        return nombre.length;
    }catch(error){
        console.log(error.message);
        throw error;
    }
}

function procesarDatos(objeto){
    try{
        let usuario=obtenerPropiedad(objeto,nombre);
        let nombre=procesarNombre(usuario);
    }catch(error){
        console.log(error.message);
    }
 
}

    let usuario={nombre:"perico"};
    procesarDatos(usuario);


/*
4 forma

function obtenerPropiedad(objeto,propiedad){
        return objeto.propiedad;
}

function procesarNombre(nombre){
        return nombre.length;
}

function procesarDatos(objeto){
        let usuario=obtenerPropiedad(objeto,nombre);
        let nombre=procesarNombre(usuario);
    
 
}

try{
    let usuario={nombre:"perico"};
    procesarDatos(usuario);
}catch(error){
    console.log(error.message);
}
*/

//lanzar errores personalizados
//Throwing customized errors
//normalmente detecta un error y lo lanza
/*
    -SyntacError let hola=
    -ReferenceError console.log(x);
    -TypeError let a="z" let b=5 console.log(b*a);  
    -Error
*/

function dividir(num1,num2){
    if(num2==0){
        throw new Error("No se puede dividir por 0");
        //throw ("no dividas por 0");
    }else{
        return num1/num2;
    }
}

function procesar(datos){
    try{
        let usuario=JSON.parse(datos);
        if(!usuario.direccion){
            throw new SintaxError("La dirección no existe");
        }
    }catch(error){

    }
}

//
function manejarErrores(error){
    console.log(error.message);
}

try{
    funcionQueNoExiste();
}catch(error){
    throw new manejarErrores(error);
}

////
class validarError extends Error{
    constructor(mensaje){
        super(mensaje);
        this.name="ErrorDeValidacion";
    }
}

function ValidarUsuario(usuario){
    if(!usuario){
        throw new validarError("el usuario no existe");
    }
    return `Bienvenido ${usuario.nombre}`;
}