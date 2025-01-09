//terminal
/**
 * @type{string}
 */


const nombre="perico";


/**
 * 
 * @type{number}
 */

const numero=23;


/**
 * 
 * @type{number[]}
 * 
 */
const numeros=[1,2,3,4];

/**
 * @type{Array<number|string>}
 * 
 */
const matrizVariada=[1,2,3,4,"hola","don pimpon"];


/**
 * 
 * @param {*} mensaje -El mensaje que se va a mostrar
 */
function saludar(mensaje){
    console.log(mensaje);
}

/**
 * 
 * @param {number} a - El primer número a sumar 
 * @param {number} b  - El segundo número a sumar
 * @returns {number} El resultado de sumar a y b
 */

function sumar(a,b){
    return (a+b);
}

/**
 * 
 * @param {Boolean} condicion La condición que va a ser invertida 
 * @returns {Boolean} La condicion invertida
 */
function invertir(condicion){
    return (!condicion);
}