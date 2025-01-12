//Hacemos una clase que representará a los estudiantes

/**
 * # Clase que representa a un estudiante.
 */

export class Estudiantes {
    /** 
     *  @type {number}  
     *  
    */
    //ID único del estudiante
    //El id se asignará automáticamente sin la necesidad de que el usuario lo introduzca
    #id;

    /** 
     *  @type {string} 
     * 
    */
    //Nombre del estudiante 
    //El nombre indicará el nombre del estudiante

    #nombre;

    /** 
     *  @type {number} 
     *  
    */
    //Edad del estudiante 
    #edad;

    /** 
     * @type {Object} 
     * 
     */
    //Dirección del estudiante, incluyendo calle, número, código postal, provincia y localidad
    #direccion;

    /**
     *  @type {Array<Object>} 
     * 
    */
    //Lista de asignaturas matriculadas, cada una con nombre y nota 
    //El atributo #asignaturas será un array asociativo el cual contará por cada
    //elemento con dos valores, nombre de asignatura y nota de asignatura.



    #asignaturas;

    /** 
     * @type {Array<Object>} 
     * 
     */
    //El atributo #registros también será un array asociativo el cual contará por cada elemento
    //con tres valores, nombre de la asignatura, tipo de registro (matriculación/desmatriculación) y 
    //fecha de matriculación/desmatriculación
    #registros;

    /** 
     * @type {Array<number>} 
     * 
    */
    //IDs de estudiantes generados 
    static numeros = [];

    /*
    Esta clase contará con un constructor el cual se encargará de que el nombre contenga solo letras y 
    espacios y de asignar los valores introducidos por el usuario a sus atributos correspondientes.
    */
    /**
     * Constructor de la clase Estudiantes.
     * @param {string} N_nombre - Nombre del estudiante (solo letras y espacios).
     * @param {number} N_edad - Edad del estudiante.
     * @param {Object} N_direc - Dirección del estudiante.
     * @throws {error} Si el nombre del estudiante contiene algo mas que letras o espacios
     */
    constructor(N_nombre, N_edad, N_direc) {
        let patron = /^[a-zA-ZáéíóúüÁÉÍÓÚÜ ]+$/;//que contenga letras y espacios 1 o mas veces
        try {
            if (!patron.test(N_nombre)) {
                throw new Error("Error solo pueden mostrase espacios o letras");
            } else {
                this.#nombre = N_nombre;
            }
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }


        let ID = 0;

        while (Estudiantes.numeros.includes(ID)) {//En caso de que el id actual se encuentre en el array
            //se le sumará al id un valor para poder darle el nuevo valor a un nuevo estudiante
            ID++;
        }
        Estudiantes.numeros.push(ID);
        this.#id = ID;

        this.#edad = N_edad;
        this.#direccion = N_direc;//N_direc será una clase direccion con todos sus valores
        this.#asignaturas = [];
        this.#registros = [];
    }

    /**
     * ## Obtiene el ID del estudiante.
     * @returns {number} ID del estudiante.
     */
    get id() {
        return this.#id;
    }

    /**
     * ## Obtiene el nombre del estudiante.
     * @returns {string} Nombre del estudiante.
     */
    get nombre() {
        return this.#nombre;
    }

    /**
     * ## Obtiene la edad del estudiante.
     * @returns {number} Edad del estudiante.
     */
    get edad() {
        return this.#edad;
    }

    /**
     * ## Obtiene la dirección del estudiante.
     * @returns {Object} Dirección del estudiante.
     */
    get direccion() {
        return this.#direccion;
    }

    /**
     * ## Obtiene las asignaturas del estudiante.
     * @returns {Array<Object>} Lista de asignaturas.
     */
    get asignaturas() {
        return [...this.#asignaturas];
    }



    /**
     * ## Método toString()<br>
     * mostramos por pantalla el id del estudiante y su nombre y edad
     * 
     * @returns {string} Información del estudiante.
     */
    toString() {
        return `${this.#id}: ${this.#nombre},  ${this.#edad}, ${this.#direccion}`;
    }

    /**
    * @typedef {Object} asignatura - Objeto con el nombre y nota de la asignatura.
    * @property {string} nombre - el nombre de la asignatura
    * @property {number} nota - La nota de la asignatura
    */
    /**
     * ## Matricula al estudiante en una asignatura.<br>
     *
     * En el método matricular, se introducirá un nombre de una asignatura indicada
     * por el usuario.
     * <br>
     * En caso de no estar se crearía un objeto con los atributos nombre y nota y se guardarian en el array
     * #asignaturas y además se crearía un registro de la fecha de matriculación de esa asignatura y se 
     * guardaría en el array #registros.
     * <br>
     * 
     * @param {Object} asignatura - Objeto con el nombre y nota de la asignatura.
     * @returns {boolean} Indica si la operación fue exitosa.
     * @throws {error}  Si en el array #asignaturas se encuentra alguna coincidencia en el nombre con la
     * asignatura indicada esto dará un error debido a que en caso de estar en el array #asignaturas
     * el estudiante ya estaría matriculado en esa asignatura.
     */



    matricular(asignatura) {//introduces un objeto de la clase asignatura como parametro
        // Comprobar si la asignatura ya está matriculada por nombre
        try {
            if (this.#asignaturas.find(asig => asig.nombre.toLowerCase() === asignatura.nombre.toLowerCase())) {
                throw new Error(`El estudiante ya está matriculado en ${asignatura.nombre}`);
            } else {
                const asignaturaObj = { nombre: asignatura.nombre, nota: asignatura.nota };
                this.#asignaturas.push(asignaturaObj); // Agrega la asignatura a la lista
                this.#registros.push({
                    nombre: asignatura.nombre,//Crea el campo `nombre` con el valor nombre de la asignatura
                    tipo: 'Matrícula', // Crea el campo `tipo` con el valor "Matrícula"
                    fecha: new Date() // Crea el campo `fecha` con la fecha y hora actual
                });
                return true;
            }
        } catch (error) {
            console.log(`Error: ${error.message}`);
            return false;
        }

    }


    /**
    * @typedef {Object} asignatura - Objeto con el nombre y nota de la asignatura.
    * @property {string} nombre - el nombre de la asignatura
    * @property {number} nota - La nota de la asignatura
    */

    /**
    * ## Desmatricula al estudiante de una asignatura.<br>
    * En el método desmatricular, se introducirá de nuevo como valor el nombre de una asignatura indicada
    * por el usuario y si se encuentra el indice de la coincidencia del nombre 
    * de esa asignatura en el array #asignaturas entonces se eliminará la asignatura del array con el método
    * splice() (el cual cambia el contenido de un array eliminando elementos existentes) y se añadirá un 
    * registro de la desmatriculacion de esa asignatura.<br>
    * 
    * 
    * @param {Object} asignatura - Objeto con el nombre y nota de la asignatura.
    * @returns {boolean} Indica si la operación fue exitosa.
    * @throws {error} Si no se encuentra ninguna coincidencia del nombre de la asignatura en el array #asignaturas se lanzará un error
    */

    desmatricular(asignatura) {
        const indice = this.#asignaturas.findIndex(asig => asig.nombre.toLowerCase() === asignatura.nombre.toLowerCase());//buscamos en el array una asignatura con el mismo nombre

        try {
            if (indice !== -1) {//si no es valor negativo la asignatura existe ya que se encuentra en alguna posicion del array
                let nombre = asignatura.nombre;
                this.#asignaturas.splice(indice, 1);// Elimina la asignatura de la lista ej:splice(lugar_de_eliminacion,numero_de_elemento_a_eliminar)
                this.#registros.push({
                    nombre: nombre,//Crea el campo `nombre` con el valor nombre de la asignatura
                    tipo: 'Desmatriculación', // Crea el campo `tipo` con el valor "Desmatriculación"
                    fecha: new Date()
                }); // Crea el campo `fecha` con la fecha y hora actual
                return true;
            } else {
                throw new Error(`El estudiante no está matriculado en ${asignatura.nombre.toLowerCase()}`);
            }
        } catch (error) {
            console.log(`Error: ${error.message}`);
            return false;
        }

    }




    /**
     * registra la fecha de matriculación o desmatriculación
     * @returns {Array<string>} Lista de registros en formato legible.
     */
    get registros() {
        let resultado = []; // Creamos una variable resultado que funcionará como un array vacío para almacenar los resultados
        this.#registros.forEach(registro => { // Recorremos el array registros con forEach
            const fecha = registro.fecha.toLocaleDateString('es-ES'); //convertimos la fecha que le hemos introducido a registros en la matriculacion y desmatriculacion en el horario español
            resultado.push(`${registro.nombre} - ${registro.tipo}: ${fecha}`); // Agregamos el resultado al array creado anteriormente
        });
        return resultado; // devolvemos el array con los valores transformados
    }




    /**
   * @typedef {Object} asignatura - Objeto con el nombre y nota de la asignatura.
   * @property {string} nombre - el nombre de la asignatura
   * @property {number} nota - La nota de la asignatura
   */

    /**
    * ## Agrega una calificación a una asignatura.<br>
    * Cambia la nota de calificacion si existe esta asignatura.<br>
    *  
    * En este método se introducirá como parametros un objeto de la clase Asignatura y una nota que se 
    * quiera dar a esa asignatura para el estudiante.<br>
    *
    * En caso de cumplirse las condiciones anteriores se buscará en el array asignaturas una asignatura
    * con el nombre de la asignatura introducida y en caso de encontrarse se le asignará a la asignatura del 
    * array asignaturas la nota introducida por el usuario. <br>
    *
    * 
    * @param {Object} asignatura - Objeto con el nombre y la nota de la asignatura
    * @param {number} nota - Nota a asignar por el usuario.
    * @returns {boolean} Indica si la operación fue exitosa.
    * @throws {error} Si la nota es mayor que 10 o menor que 0 o si no es del tipo 'number' entonces se mostrara un error.
    */


    agregar_calificacion(asignatura, nota) {
        // Validar que la nota sea un número válido
        try {
            if (typeof nota != 'number' || nota < 0 || nota > 10) {
                throw new Error('La nota debe ser un número entre 0 y 10.');
            } else {
                const asignaturaEncontrada = this.#asignaturas.find(asig => asig.nombre.toLowerCase() === asignatura.nombre.toLowerCase());
                //console.log(asignaturaEncontrada); devuelve un objeto {nombre:, nota:}
                //Con find recorre todo el array asignaturas y busca la coincidencia de nombre
                if (asignaturaEncontrada) {
                    asignaturaEncontrada.nota = nota;
                    return true;
                } else {
                    throw new Error(`El estudiante no está matriculado en la asignatura ${asignatura.nombre.toLowerCase()}`);
                }
            }
        } catch (error) {
            console.log(`Error: ${error.message}`);
            return false;
        }

    }


    /**
     * ## método asig_mostrar()
     * <br>
     * En este método se mostrarán por consola las asignaturas y las notas del estudiante
     */
    asig_mostrar() {
        console.log(this.#asignaturas);
    }

    /**
     * 
     *    ## Calculará el promedio de todas las calificaciones del estudiante.<br>
     *
     *    En este método se contará si el array #asignaturas contiene asignaturas. <br>
     *    En el caso de que las contenga y de que su longitud sea mayor que 0 entonces se recorrerá la totalidad del array y si las notas de 
     *    las asignaturas son numericas se sumarán esas notas a una variable en la que se almacenará la suma
     *    de todas las notas de cada asignatura.<br>
     *
     *    Por ultimo la suma de todas las asignaturas se dividirá por el número de notas que se hayan sumado
     *    <br>
     * 
     * @returns {string} Promedio de las calificaciones, redondeado a 2 decimales.
     */
    promedio() {
        if (this.#asignaturas.length === 0) {
            return 0;
        }
        let prom = this.#asignaturas.reduce((promedioF, asig) => {
            if (asig.nota == undefined) {
                asig.nota = 0;
            }
            promedioF = promedioF + asig.nota;
            return promedioF;
        }, 0);

        return Number(prom / this.#asignaturas.length).toFixed(2);  // toFixed(2): Redondea a 2 decimales.
        //se devuelve la suma de notas dividido entre el numero de notas
    }

}
