/**
 * # Clase ErrorPersonalizado<br>
 * 
 * Extiende de la clase "Error" para crear un tipo de error personalizado que puede ser utilizado en validaciones específicas.
 * <br>
 * */

export class ErrorPersonalizado extends Error {
    /**
     * ## Constructor<br>
     * 
     * 
     * @param {string} mensaje - El mensaje de error que describe el problema.
     */
    constructor(mensaje) {
        super(mensaje);
        this.name = "ErrorPersonalizado";
    }
}


/**
 * @typedef {Object} estudiante - **El objeto que representa al estudiante.**
 * @property {string} estudiante.nombre - *El nombre del estudiante. Debe ser una cadena no vacía.*
 * @property {number} estudiante.edad - *La edad del estudiante. Debe ser un número positivo.*
 * 
 */

/**
 * # Función: validarEstudiante <br>
 * 
 * Valida los datos de un estudiante y lanza un error personalizado si no cumple con las condiciones.
 * <br>
 * @param {Object} estudiante - *El objeto que representa al estudiante.*
 * @throws {ErrorPersonalizado} **Si el nombre o la edad no son validos**
 */



export function validarEstudiante(estudiante) {
    if (typeof estudiante.nombre != 'string' || estudiante.nombre.trim() === "") {
        throw new ErrorPersonalizado("El nombre es obligatorio.");
    }
    if (typeof estudiante.edad != 'number' || estudiante.edad <= 0) {
        throw new ErrorPersonalizado("La edad debe ser un número positivo.");
    }
    console.log("Estudiante validado con éxito:");
}


