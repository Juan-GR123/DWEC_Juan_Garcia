/**
 * @module Asignaturas_modulo
 * 
 */

/**
 * # Clase que representa una asignatura con su nombre y <br> calificaciones.
 */

export class Asignaturas {
    /**
    * @type {string} 
    */
    //El nombre de la asignatura. (No es privado para ser usado por métodos de la clase Estudiante).
    nombre;

    /**
     * @type {number[]} 
     */

    //#calificaciones: Calificaciones será un array que contenga las calificaciones que se le irán añadiendo a
    //una asignatura concreta.
    #calificaciones;//[[10],[9]]

    /**
     * Constructor de la clase Asignaturas.
     * 
     * @param {string} nombre1 - *El nombre de la asignatura. Debe contener solo letras, espacios y números romanos.*
     * 
     * @throws {error} **Si el nombre no cumple con el patrón, se lanza un error y se registra en la consola.**
     */
    constructor(nombre1) {
        let patron = /^[a-zA-ZáéíóúüÁÉÍÓÚÜ ]+$/;//que contenga letras y espacios 1 o mas veces
        try {
            if (!patron.test(nombre1)) {
                throw new Error("Error solo pueden mostrase espacios o letras");
            } else {
                this.nombre = nombre1;//se inicializa
            }
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }

        this.#calificaciones = [];
    }

    /**
    * ## Getter para obtener el nombre de la asignatura.
    * 
    * @returns {string} El nombre de la asignatura.
    */

    get nombre_A() {
        return this.nombre;
    }

    /**
     * ## Getter para obtener las calificaciones de la asignatura.
     * 
     * @returns {number[]} Una copia del array de calificaciones.
     */

    get calificaciones() {
        return [...this.#calificaciones];
    }

    /**
     * ## Se mostrará por pantalla el nombre de la asignatura<br>
     * ### toString()<br>
     * 
     * @returns {string} El nombre de la asignatura en formato "Asignatura: [nombre]".
     */
    toString() {
        return `Asignatura: ${this.nombre}`;
    }


    /**
     * ## Agrega una calificación a la asignatura elegida.<br>
     * ###  agregar_calificacion(nota) <br>
     * En este método se introducirá una nota que se le quiera añadir a una asignatura. Si la nota esta entre
     * 0 y 10 entonces se añadira al array #calificaciones. <br>
     * 
     * @param {number} nota - *La nota a añadir. Debe estar entre 0 y 10.*
     * 
     * @returns {boolean} `true` si la nota es válida y se añade correctamente, `false` en caso contrario.
     * 
     * @throws {error} **Si no cumple con esas condiciones se mostrará un error.** 
    */
    agregar_calificacion(nota) {
        try {
            if ((nota >= 0 && nota <= 10)) {
                this.#calificaciones.push(nota);
                return true;
            } else {
                throw new Error("La nota " + nota + " no es valida");
            }
        } catch (error) {
            console.log(`Error: ${error.message}`);
            return false;
        }
    }

    /**
    * ## Elimina una calificación de la asignatura en la posición especificada.<br>
    * ### eliminar_calificacion(indice)<br>
    * En caso de que el indice especificado este dentro de rango del array #calificaciones
    * se eliminará la calificación con el método splice().
    * <br>
    * 
    * @param {number} indice - *El índice de la calificación a eliminar.*
    * 
    * @returns {boolean} `true` si la calificación se elimina correctamente, `false` si ocurre un error.
    * 
    * @throws {error} **Si el índice está fuera del rango válido.**
    *
    */
    eliminar_calificacion(indice) {
        try {
            if (indice < 0 || indice >= this.#calificaciones.length) {
                throw new Error("Índice fuera de rango.");
            } else {
                this.#calificaciones.splice(indice, 1);//splice es para eliminar o reemplazar un numero especifico de elementos en una posicion concreta. 
                //ejemplo: splice(posicion,numero_de_eliminaciones)
                return true;
            }
        } catch (error) {
            console.log(`Error: ${error.message}`);
            return false;
        }
    }
    /**
       * ## Calcula el promedio de las calificaciones de la asignatura.<br>
       * ### calcular_promedio() <br>
       *  En este caso se recorre todo el array #calificaciones y se van sumando todas las calificaciones
       *  que el estudiante ha ido sacando en la asignatura.<br>
       * 
       *  Por último, se dividirá la suma de todas las calificaciones por la longitud del array de calificaciones
       *  que serán el número de notas de la asignatura.<br>
       * 
       * @returns {number} El promedio de las calificaciones, redondeado a dos decimales. 
       *                   devuelve `0` si no hay calificaciones.
       * 
       * @throws {error} **Si el array no tiene longitud lanza un error.**
       */
    calcular_promedio() {
        if (this.#calificaciones.length === 0) {
            return 0;
        }
        let prom_as = this.#calificaciones.reduce((suma, calificacion) => suma + calificacion, 0);
        let suma_F = prom_as / (this.#calificaciones.length);
        return Number(suma_F.toFixed(2));//toFixed es para que solo muestre un numero determinado de decimales
    }

}
