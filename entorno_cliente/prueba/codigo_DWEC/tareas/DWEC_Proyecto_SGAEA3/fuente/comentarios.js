/**
 * @module funcionesEnGeneral
 * 
 */


//terminal
/**
 * @type{string}
 */


const nombre = "perico";


/**
 * 
 * @type{number}
 */

const numero = 23;


/**
 * 
 * @type{number[]}
 * 
 */
const numeros = [1, 2, 3, 4];

/**
 * @type{Array<number|string>}
 * 
 */
const matrizVariada = [1, 2, 3, 4, "hola", "don pimpon"];


/**
 * Representa una persona
 * @property {string} nombre - El nombre de la criatura
 * @property {number} edad - La edad de la criatura
 */
const persona = {
    nombre: "perico",
    edad: 25
};

/**
 * 
 * @param {*} mensaje -El mensaje que se va a mostrar
 */
function saludar(mensaje) {
    console.log(mensaje);
}

/**
 * Divide dos números
 * @deprecated Esta funcion es obsoleta y pronto será reemplazada.Usa nuevaDivisión en su lugar
 * @param {number} a - El primer número a dividir
 * @param {number} b  - El segundo número a dividir
 * @returns {number} El resultado de dividir a y b
 * @throws {error} Si el divisor es 0
 * @todo Falta implementar la división de números reales
 * @example 
 * //Devuelve 10
 * dividir 100/10
 */

function dividir(a, b) {
    if (b == 0) {
        throw new Error("división por 0");
    } else {
        return (a / b);
    }
}

/*markdown
    #
    ##
    ###
    **texto en negrita**
    *cursiva*
    [texto del enlace](https://www.duckgoduckgo.com)
    '''JavaScript
*/
/**
 * 
 * **Ejemplo de uso**
 * ```js
 *  invertir(true) devuelve false
 * ```
 * 
 * @param {Boolean} condicion La condición que va a ser invertida 
 * @returns {Boolean} La condicion invertida
 * @example
 * //Devuelve lo contrario de la condición
 * invertir (true)
 */
function invertir(condicion) {
    return (!condicion);
}

/*
    -anónimas
    -flecha
    -asíncronas
    -dentro de objetos
    -con nombres dinámicos
*/


/**
 * 
 * @async
 * @function
 * @returns {Promise<Object[]>}
 * 
 * 
 */

async function obtenerDatos() {
    //función asíncrona
}

/**
 * @function
 */
const saludo = function () {
    console.log("hola");
}

const objeto = {
    /**
     * @function
     * @param {*} x 
     * @returns {number} numero duplicado
     */
    duplicar: function(x){
        return x*2; 
    }
}


/**
 * 
 * @param {number[]} datos - Matriz de números a procesar
 * @param {CallbackParaProcesar} funcion - Función a ejecutar tras procesar los números 
 */
function procesarDatos(datos, funcion){
    const resultado=datos.map(x=>x*2);
    funcion(resultado);
}   

/**
 * @callback CallbackParaProcesar
 */

procesarDatos([1,2,3],(resultado)=>{
    console.log(resultado);
});

/**
 * 
 * @ignore 
 * @todo - Hacer algo interesante y útil 
 */

let funcionIrrelevante=(a=>console.log(a));


/**
 * @namespace funcionesMatematicas
 */

/**
 * @memberof funcionesMatematicas
 * @param {number} a - Elemento a ser sumado
 * @param {number} b - Elemento a ser sumado
 * @returns {number} La suma de los números
 */

let sumar=((a,b)=>a+b);

/**
 * 
@memberof funcionesMatematicas
 * @param {number} a - Elemento a ser restado
 * @param {number} b - Elemento a ser restado
 * @returns {number} La resta de los números
 */
let restar=((a,b)=>a-b);

/**
 * 
@memberof funcionesMatematicas
 * @param {number} a - Elemento a ser multiplicado
 * @param {number} b - Elemento a ser multiplicado
 * @returns {number} La multiplicación de los números
 */
let multiplicar=((a,b)=>a*b);


/**
 * @typedef {Object} persona
 * @property {string} nombre - El nombre del tipo
 * @property {number} edad - La edad del tipo
 * 
 * 
 */


/**
 * @param {string} name
 * @param {number} edad
 * @return {persona}  
 */

function createPersona(nombre,edad){
    return(nombre,edad);
}