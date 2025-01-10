/**
   -reutilizacion de código
   -organización
   -encapsulación
   -presentación
   -prestaciones
   -Bundlers (empaquetadores)


   Criterios para dividir en módulos
   -principio responsabilidad individual
   -cohesión alta
   -acoplamiento débil API
   -reusabilidad API sencilla y bien definida
   -Si hay interaccion con API 3as partes -> módulo
   -Adaptación a la lógica de negocio -> productos, proveedores
   -Tamaño y complejidad -> ni demasiado grande ni demasiado pequeño

   dos formas de hacerlo
        -Common JS (antigua) -> node.js y en algunos empaquetadores (bundlers)
        -ES6 (moderna) ->

    */    

/* Antigua: no usar
const opMatematicas=require('./funciones1.js');

console.log(opMatematicas.sumar(5,2));
*/

//moderna

//import {sumar as adicion, restar as sustraccion} from './funciones1.js';
//console.log(adicion(5,2), sustraccion(10,3));

import * as operaciones from './funciones1.js';

import unaCosa, {sumar as sum,restar} from './funciones1.js';

import * as operaciones2 from './funciones2.js';

console.log(operaciones.sumar(5,2),operaciones.restar(10,3));

console.log(sum(5,2), restar(10,3),
operaciones.PI, unaCosa(3,2));

console.log(operaciones2.numero);
console.log(operaciones2.potencia(2,3));
console.log(operaciones2.mod(2,3));






