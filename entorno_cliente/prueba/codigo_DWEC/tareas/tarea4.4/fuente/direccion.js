/**
 * @module Direccion_modulo
 * 
 */

/**
 * # Creamos una clase para saber la dirección de cada <br>estudiante
 * 
 */
export class Direccion {
    /**
     * ## Atributos privados
     * 
     * @private
     * @property {string} #calle - La calle de la dirección.
     * @private
     * @property {number} #numero -  El número de la calle.
     * @private
     * @property {string} #piso - El número del piso.
     * @private
     * @property {string} #codigo_postal - El código postal de la dirección.
     * @private
     * @property {string} #provincia - La provincia.
     * @private
     * @property {string} #localidad - La localidad  de dicha provincia.
     * 
     * 
     */
    #calle;
    #numero;
    #piso;
    #codigo_postal;
    #provincia;
    #localidad;

    /**
    * ## Constructor de la clase Dirección<br>
    * 
    * Se inicializa una nueva instancia de la clase Dirección.<br>
    * 
    * ### Parámetros
    * @param {string} calle - *La calle de la dirección.*
    * @param {number} numero - *El número de la calle.*
    * @param {number} piso - *El número del piso.*
    * @param {string} codigo - *El código postal de la dirección (debe tener 5 dígitos). Si no cumple el formato, se asignará `"Error"`*.
    * @param {string} provincia - *La provincia.*
    * @param {string} localidad - *La localidad de dicha provincia.*
    */

    constructor(calle, numero, piso, codigo, provincia, localidad) {
        let patron = /^[0-9]{5}$/;
        let comprobacion = (patron.test(codigo) ? codigo : "Error");

        this.#calle = calle;
        this.#numero = numero;
        this.#piso = piso;
        this.#codigo_postal = comprobacion;
        this.#provincia = provincia;
        this.#localidad = localidad;
    }
    /**
     * ## Métodos Getters<br>
     * Métodos para obtener los valores de los atributos privados.
     */

    /**
     *  Indicará la calle en la que pertenece<br>
     * @returns {string} El nombre de la calle.
     */
    get calle() {
        return this.#calle;
    }
    /**
     * Indicará el número de calle
     * @returns {number} 
     */
    get numero() {
        return this.#numero;
    }

    /**
    * Indicará el número de piso 
    * @returns {string} 
    */
    get piso() {
        return this.#piso;
    }

    /**
    * Indicará el codigo postal (5 números, ni mas ni menos) 
    * @returns {string} El código postal de la dirección.
    */
    get codigo_postal() {
        return this.#codigo_postal;
    }

    /**
     * Indicará la provincia
     * @returns {string}
     */
    get provincia() {
        return this.#provincia;
    }

    /**
     * Indicará la localidad de dicha provincia
     * @returns {string} 
     */
    get localidad() {
        return this.#localidad;
    }

    /**
     * ## Método toString<br>
     * También se contará con el método toString() para mostrar todos los atributos por pantalla.<br>
     * @returns {string} Una cadena con la dirección en formato "calle, número, piso, código postal, localidad, provincia".
     */
    toString() {
        return this.#calle + " " + this.#numero + " " + this.#piso + "  " + this.#codigo_postal + " " + this.#localidad + " " + this.#provincia + " ";
    }


}