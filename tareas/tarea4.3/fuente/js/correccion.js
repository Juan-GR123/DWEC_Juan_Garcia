//Este proyecto esta disponible en mi github
//El enlace es: https://github.com/Juan-GR123/DWEC_Juan_Garcia/blob/main/tareas/tarea4.3/fuente/js/correccion.js


//Todas las salidas serán por consola y todas las entradas por teclado
//promt y console.log



/**
 * @module Proyecto3
 * 
 */


/**
 * # Creamos una clase para saber la dirección de cada <br>estudiante
 * 
 */
class Direccion {
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

//Hacemos una clase que representará a los estudiantes

/**
 * # Clase que representa a un estudiante.
 */
class Estudiantes {
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
     * @param {string} N_nombre - *Nombre del estudiante (solo letras y espacios).*
     * @param {number} N_edad - *Edad del estudiante.*
     * @param {Object} N_direc - *Dirección del estudiante.*
     * @throws {error} **Si el nombre del estudiante contiene algo mas que letras o espacios**
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
    * @typedef {Object} asignatura - **Objeto con el nombre y nota de la asignatura.**
    * @property {string} nombre - *El nombre de la asignatura*
    * @property {number} nota - *La nota de la asignatura*
    */
    /**
     * ## Matricula al estudiante en una asignatura.<br>
     * ### matricular(asignatura)<br>
     * En el método matricular, se introducirá un nombre de una asignatura indicada
     * por el usuario.
     * <br>
     * En caso de no estar se crearía un objeto con los atributos nombre y nota y se guardarian en el array
     * #asignaturas y además se crearía un registro de la fecha de matriculación de esa asignatura y se 
     * guardaría en el array #registros.
     * <br>
     * 
     * @param {Object} asignatura - *Objeto con el nombre y nota de la asignatura.*
     * @returns {boolean} Indica si la operación fue exitosa.
     * @throws {error}  **Si en el array #asignaturas se encuentra alguna coincidencia en el nombre con la
     * asignatura indicada esto dará un error debido a que en caso de estar en el array #asignaturas
     * el estudiante ya estaría matriculado en esa asignatura.**
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
    * @typedef {Object} asignatura - **Objeto con el nombre y nota de la asignatura.**
    * @property {string} nombre - *El nombre de la asignatura*
    * @property {number} nota - *La nota de la asignatura*
    */

    /**
    * ## Desmatricula al estudiante de una asignatura.<br>
    * ### desmatricular(asignatura)<br>
    * En el método desmatricular, se introducirá de nuevo como valor el nombre de una asignatura indicada
    * por el usuario y si se encuentra el indice de la coincidencia del nombre 
    * de esa asignatura en el array #asignaturas entonces se eliminará la asignatura del array con el método
    * splice() (el cual cambia el contenido de un array eliminando elementos existentes) y se añadirá un 
    * registro de la desmatriculacion de esa asignatura.<br>
    * 
    * 
    * @param {Object} asignatura - *Objeto con el nombre y nota de la asignatura.*
    * @returns {boolean} Indica si la operación fue exitosa.
    * @throws {error} **Si no se encuentra ninguna coincidencia del nombre de la asignatura en el array #asignaturas se lanzará un error**
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
     * ## Registra la fecha de matriculación o desmatriculación
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
   * @typedef {Object} asignatura - **Objeto con el nombre y nota de la asignatura.**
   * @property {string} nombre - *El nombre de la asignatura*
   * @property {number} nota - *La nota de la asignatura*
   */

    /**
    * ## Agrega una calificación a una asignatura.<br>
    * ### agregar_calificacion(asignatura,nota)<br>
    * 
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
    * @param {Object} asignatura - *Objeto con el nombre y la nota de la asignatura*
    * @param {number} nota - *Nota a asignar por el usuario.*
    * @returns {boolean} Indica si la operación fue exitosa.
    * @throws {error} vvSi la nota es mayor que 10 o menor que 0 o si no es del tipo 'number' entonces se mostrara un error.**
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
     *    ### promedio()<br>
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

/**
 * # Clase que representa una asignatura con su nombre y <br> calificaciones.
 */

class Asignaturas {
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


/**
 * # Clase Gestores <br>
 * Clase que representa un gestor de elementos almacenados en un array.<br>
 * El atributo principal es protegido para permitir el acceso en subclases. <br>
 */
class Gestores {
    /**
     * @type {Object[]} 
     *
     */

    /*
        Array protegido que almacena objetos instanciados como clases
        Ha sido creado como un atributo protegido para que las subclases tambien puedan acceder a él.
     */
    _gestor;

    /**
     * ## Constructor de la clase Gestores.
     * 
     * Inicializa el atributo `_gestor` como un array vacío.
     * 
     */
    constructor() {
        this._gestor = [];
    }

    /**
     * ## Getter: gestor<br>
     * Getter para obtener una copia del array `_gestor`.
     * 
     * @returns {Object[]} 
     */
    get gestor() {
        return [...this._gestor];
    }

    /**
     * ## Método: toString <br>
     * Devuelve la longitud del array `_gestor` en forma de cadena.
     * 
     * @returns {string} Un mensaje indicando la cantidad de elementos en la lista.
     */
    toString() {
        return `Lista con ${this._gestor.length} elementos.`;
    }

}


/**
 * # Clase GestorEs <br>
 * 
 * La clase GestorEs es una subclase de Gestores y contará con los mismo atributos que la clase de la
 * que hereda, en este caso, Gestores.<br>
 */
class GestorEs extends Gestores {
    /**
     * ## Constructor<br>
     * 
     * Su costructor será diferente ya que ademas de heredar los atributos de su clase madre
     * con super() tambien se recorrerá todo el array y se realizará el método agregar_estudiante con 
     * todos los elementos del array _gestor para que se puedan guardan en el array los estudiantes 
     * automáticamente y no se tengan que estar agregando al array uno por uno.<br>
     * 
     * Sin este método en el constructor no se podrían añadir estudiantes al inicializar la clase.
     * <br>
     * 
     * @param {...Object} elementos - *Estudiantes iniciales a agregar en el gestor.*
     */
    constructor(...elementos) {
        super();

        for (let estudiante of elementos) {

            this.agregar_estudiante(estudiante);//agregamos a los estudiantes necesarios para que se puedan
            //añadir automáticamente en el constructor

        }

    }

    /**
   * @typedef {Object} estudiante - **Objeto con el nombre y nota del estudiante**
   * @property {number} id - *El id del estudiante* 
   * @property {string} nombre- *El nombre del estudiante*
   * @property {number} edad - *La edad del estudiante*
   * @property {Object} direccion - *La dirección del estudiante*
   */

    /**
     * ## Método: agregar_estudiante <br>
     * 
     * ### agregar_estudiante(estudiante): <br>
     * Con este método se agregará un objeto de la clase estudiante a la lista introduciendolo como valor.
     * <br>
     * Antes de agregar al estudiante se buscará en la lista un estudiante con el mismo id que el que 
     * se quiere agregar y en caso de existir lanzará un error indicando que el estudiante ya ha sido agregado
     * anteriormente a la lista.
     * <br>
     * Si no existiese se agregaría a la lista con el metodo push, introduciendo el elemento en la última
     * posición del array
     * <br>
     * 
     * @param {Object} estudiante - *El estudiante que se agrega como parametro*
     * @returns {boolean} `true` si se agregó correctamente, `false` en caso de error.
     * @throws {error} **Cuando exista el id del estudiante que se quiera agregar en la lista**
     */


    agregar_estudiante(estudiante) {//agrega un estudiante a la lista

        try {
            if (this._gestor.find(elemento => elemento.id === estudiante.id)) {//si se introduce un id que ya exista entonces no se podrá agregar al estudiante
                throw new Error("Ya existe el estudiante.");
            }
            this._gestor.push(estudiante);
            return true;
        } catch (error) {
            console.log(`Error: ${error.message}`);
            return false;
        }

    }

    /**
     * ## Método: eliminar_estudiante <br>
     * 
     * ### eliminar_estudiante(id):<br>
     * Este método eliminará a un estudiante de la lista mediante el id que se la haya introducido como 
     * parametro.<br>
     * 
     * Se buscará la posición del array donde coincidan el id introducido con el id de un estudiante
     * <br>
     * En caso de que el id introducido exista en la lista se cogerá el número de la posición 
     * donde se encuentre el estudiante coincidente y se eliminará al estudiante que posea ese id mediante
     * el metodo splice().
     * <br>
     * 
     * @param {number} id - *El ID del estudiante a eliminar.*
     * @returns {boolean} `true` si se eliminó correctamente, `false` en caso de error.
     * @throws {error} **En caso de que el id introducido no exista en la lista se lanzará un mensaje de error.**
     */
    eliminar_estudiante(id) {
        let eliminar = this._gestor.findIndex(elemento => elemento.id === id);
        //findIndex:devuelve el indice del primer elemento que cumpla la funcion definida
        try {
            if (eliminar === -1) {
                throw new Error(`No se encontró ningún estudiante con ID ${id}.`);
            } else {
                this._gestor.splice(eliminar, 1);
                return true;
            }
        } catch (error) {
            console.log(`Error: ${error.message}`);
            return false;
        }


    }

    /**
     * ## Método: listar_estudiantes<br>
     * 
     * Se recorrerá todo el array _gestores y los elementos que posea, en este caso estudiantes,
     * se mostrarán en pantalla mediante el metodo toString de la clase Estudiantes. <br>
     */
    listar_estudiantes() {//da una lista completa de cada estudiante
        for (let persona of this._gestor) {
            console.log(persona.toString());//toString: método de estudiante
        }
    }


    /**
     * ## Método: listar_informes<br>
     * 
     *  Este método generará un informe con la direccion de cada estudiante, 
     *  sus asignaturas junto a sus calificaciones, sus matriculaciones y sus
     *  promedios.<br>
     * 
     *  Esto se conseguirá recorriendo todo el array _gestor y accediendo a los getters y metodos de 
     *  los objetos pertenecientes a la clase Estudiantes.
     * <br>
     */

    listar_informes() {
        for (let informe of this._gestor) {
            console.log(informe.toString());

            console.log("Direccion:");
            console.log("Calle: " + informe.direccion.calle);
            console.log("Número: " + informe.direccion.numero);
            console.log("Piso: " + informe.direccion.piso);
            console.log("Código Postal: " + informe.direccion.codigo_postal);
            console.log("Provincia: " + informe.direccion.provincia);
            console.log("Localidad: " + informe.direccion.localidad);

            console.log("Asignaturas y calificaciones");
            console.log(informe.asignaturas);

            console.log("Fechas de matriculacion y desmatriculacion");
            console.log(informe.registros);

            console.log("Promedio del estudiante");
            console.log(informe.promedio());//arreglar
        }
    }

    /**
     * 
     * ## Método: obtener_estudiante <br>
     * 
     * ### obtener_estudiante(id):<br>
     *  Este método tratará de buscar en el array _gestor a un estudiante mediante su id.
     * <br>
     * Esto se conseguirá mediante el método find() y en caso de que devuelva algo se devolverá al 
     * estudiante encontrado y en caso de que el método no devuelva nada entonces se lanzará un error.
     * <br>
     * 
     * @param {number} id - *El ID del estudiante a buscar.*
     * @returns {Object|boolean} El estudiante encontrado o en caso de que no exista en la lista será "false".
     * @throws {error} **Si el metodo no devuelve ningun estudiante**
    */
    obtener_estudiante(id) {
        let obtener = this._gestor.find(elemento => elemento.id === id);
        //find:devuelve el valor del primer elemento que cumpla la funcion definida
        try {
            if (obtener) {
                return obtener;
            } else {
                throw new Error(`No se encontró ningún estudiante con ID ${id}.`);
            }
        } catch (error) {
            console.log(`Error: ${error.message}`);
            return false;
        }


    }

    /**
     * 
     * ## Método: obtener_nombre_estudiante<br>
     * 
     * ### obtener_nombre_estudiante(nombre):<br>
     *  Este método tendrá la misma función que el método obtener_estudiante(id) con la única diferencia de 
     *  que se buscará al estudiante por su nombre (aunque este se haya introducido solo parcialmente)
     * en vez de por su id.
     * <br>
     * 
     * Esto se conseguirá mediante el método filter() el cual filtrará los estudiantes cuyo nombre no
     * posea el string introducido como parametro en el método.
     * <br>
     * 
     * Si existiese algun elemento en el nuevo array creado después de utilizar el método filter entonces
     * se recorrería el array y se mostrararía a los estudiante que coincidan con el nombre 
     * introducido como parametro.
     * <br>
     * 
     * @param {string} nombre - *El nombre o parte del nombre del estudiante.*
     * @returns {void} Lista los estudiantes encontrados o un mensaje de error si no hay coincidencias.
     * @throws {error} **Si no existen coincidencias de estudiantes en el array de listas**
     */
    obtener_nombre_estudiante(nombre) {
        let obtener = this._gestor.filter(elemento => elemento.nombre.toLowerCase().includes(nombre.toLowerCase()));
        //includes: Se usa para verificar si el nombre parcial está contenido en el nombre completo del estudiante.
        //filter() devuelve un array con todos los estudiantes que coincidan. Se podría haber utilizado find pero ese metodo solo devuelve un valor
        try {
            if (obtener.length > 0) {
                return obtener.forEach(elemento => {
                    console.log("El estudiante encontrado es " + elemento.toString());
                });

            } else {
                throw new Error(`No se encontro ningún estudiante con el nombre ${nombre}`);
            }
        } catch (error) {
            console.log(`Error: ${error.message}`);
            return false;
        }

    }

    /**
     * ## Método: promedio_listas<br>
     * 
     * Calcula el promedio de los promedios de todos los estudiantes en el gestor.
     * <br>
     * Cuando se tenga la suma total de todos los promedios de cada estudiante entonces se dividirá 
     * esta suma entre la cantidad de veces que se haya sumado a la variable, es decir, el numero
     * de estudiantes existentes y entonces se obtendrá la media total de las notas de todos los estudiantes
     * <br>
     * 
     * @returns {number} El promedio general
     * @throws {error} **si devuelve 0 la longitud del array**
     */
    promedio_listas() {

        try {
            if (this._gestor.length === 0) {
                throw new Error("No hay estudiantes en la lista para calcular el promedio.");
            }
            let suma_Promedios = this._gestor.reduce((suma_pro, promedio_E) => suma_pro + Number(promedio_E.promedio()), 0);
            //console.log(suma_Promedios);
            let promedioGeneral = (suma_Promedios / (this._gestor.length)).toFixed(2);
            return Number(promedioGeneral);
        } catch (error) {
            console.log(`Error: ${error.message}`);
            return 0;
        }

    }

    /**
     * ## Método: toString<br>
     * 
     * El metodo toString servirá como una sobrecarga del metodo toString de la clase Gestores y este 
     * mostrará la longitud del array _gestor pero indicando que la lista es una lista de estudiantes.
     * <br>
     * @returns {string}
     */
    toString() {//sobrecarga
        super.toString();
        return `Lista con ${this._gestor.length} estudiantes.`;
    }

}

/**
 * # Clase GestorAs <br>
 *  La clase GestorAs es una subclase de Gestores y contará con los mismo atributos que la clase de la
 *  que hereda, en este caso, Gestores.
 * <br>
 * */

class GestorAs extends Gestores {
    /**
     * ## Constructor <br>
     * 
     *  Sin embargo, su costructor será diferente al de "Gestores" ya que ademas de heredar los atributos de su clase madre
     * con super() tambien se recorrerá todo el array y se realizará el método agregar_asignatura con 
     * todos los elementos del array _gestor para que se puedan guardan en el array las asignaturas 
     * automáticamente y no se tengan que estar agragando al array uno por uno.
     * <br>
     * Sin este método en el constructor no se podrían añadir asignaturas al inicializar la clase.
     * <br>
     * @param {...Object} elementos - *Asignaturas iniciales a agregar en el gestor.*
     */

    constructor(...elementos) {
        super();

        for (let asignatura of elementos) {

            this.agregar_asignatura(asignatura);//agregamos las asignaturas necesarias

        }

    }


    /**
    * @typedef {Object} asignatura- Objeto con el nombre y nota de la asignatura.
    * @property {string} nombre- el nombre de la asignatura
    * @property {number} nota - La nota de la asigunatura
    */

    /**
    * ## Método: agregar_asignatura<br>
    * 
    *
    * Este método será el encargado de buscar dentro del array _gestor una coincidencia entre el nombre
    * de la asignatura introducida como parametro y el nombre de alguna de las asignaturas contenidas en el
    * array.<br>
    * 
    * Para realizar esta funcionalidad se utilizara el método find() para que devuelva una coincidencia
    * (la primera) en caso de que existiese el nombre de la asignatura en el array y de ser ese el caso
    * se lanzaría un error diciendo que la asignatura ya existe en la lista.
    * <br>
    * Si no existiese se agregaría a la lista con el metodo push(), introduciendo el objeto de la
    * clase asignatura en la última posición del array
    * <br>
    * 
    * @param {Object} asignatura - *La asignatura a agregar.*
    * @returns {boolean} "true" si se agregó correctamente, "false" en caso de error.
    * @throws {error} **si la asignatura ya existe dentro de la lista**
    */


    agregar_asignatura(asignatura) {
        try {
            if (this._gestor.find(elemento => elemento.nombre.toLowerCase() === asignatura.nombre.toLowerCase())) {
                throw new Error("Ya existe la asignatura");
            }
            this._gestor.push(asignatura);
            return true;
        } catch (error) {
            console.log(`Error: ${error.message}`);
            return false;
        }

    }

    /**
     * ## Método: eliminar_asignatura<br>
     *
     *  Este método eliminará a una asignatura de la lista mediante el nombre que se la haya introducido como 
     *  parametro.<br>
     * 
     * Se buscará la posición del array donde coincidan el nombre introducido con el nombre de una
     * asignatura.<br>
     * 
     * En caso de que el nombre introducido exista en la lista se cogerá el número de la posición 
     * donde se encuentre la asignatura coincidente y se eliminará esa asignatura la cual posea el nombre
     * correspondiente mediante el metodo splice().
     * <br>
     * 
     * @param {string} nombre - *El nombre de la asignatura a eliminar.*
     * @param {Object} listaEstudiantes - *El gestor de estudiantes para actualizar su información.*
     * @returns {boolean} `true` si se eliminó correctamente, `false` en caso de error.
     * @throws {error} **En caso de que el nombre introducido como parametro no exista en la lista de asignaturas**
     */
    eliminar_asignatura(nombre, listaEstudiantes) {//parametro de listasEstudiantes
        let eliminar = this._gestor.findIndex(elemento => elemento.nombre.toLowerCase() === nombre.toLowerCase());

        try {
            if (eliminar === -1) {
                throw new Error(`No se encontró ningúna asignatura con nombre ${nombre}.`);
            }
            this._gestor.splice(eliminar, 1);
            // Itera sobre los estudiantes y elimina la asignatura de ellos
            listaEstudiantes.gestor.forEach(estudiante => {//get de gestor
                let asignatura = { nombre: nombre }; // Crea un objeto básico con el nombre de la asignatura
                estudiante.desmatricular(asignatura);
            });

            console.log(`La asignatura ${nombre} ha sido eliminada de la lista y de todos los estudiantes.`);
            return true;
        } catch (error) {
            console.log(`Error: ${error.message}`);
            return false;
        }

    }

    /**
     * ## Método: listar_asignaturas <br>
     * 
     * Se recorrerá todo el array _gestores y los elementos que posea, en este caso asignaturas,
     * se mostrarán en pantalla mediante el metodo toString de la clase Asignaturas, el cual
     * mostrará el nombre de cada asignatura.
     * <br>
     */

    listar_asignaturas() {
        for (let asignatura of this._gestor) {
            console.log(asignatura.toString());
        }
    }

    /**
     * ## Método: obtener_asignatura
     * <br>
     * 
     *  Este método tratará de buscar en el array _gestor a una asignatura mediante su nombre.
     *  Buscará y devolverá una asignatura específica por su nombre.
     * <br>
     *  Esto se conseguirá mediante el método find() y en caso de que devuelva algo será la 
     *  asignatura encontrada.
     * <br>
     * 
     * @param {string} nombre - *El nombre completo de la asignatura a buscar.*
     * @returns {Object|boolean} La asignatura encontrada o `false` si no existe.
     * @throws {error} **En caso de que el método no devuelva nada**
     */
    obtener_asignatura(nombre) {
        let obtener = this._gestor.find(elemento => elemento.nombre.toLowerCase() === nombre.toLowerCase());
        try {
            if (obtener) {//si encuentra algun valor
                return obtener;
            } else {
                throw new Error(`No se encontró ningúna asignatura con nombre ${nombre}.`);
            }
        } catch (error) {
            console.log(`Error: ${error.message}`);
            return false;
        }


    }

    /**
    * ## Método: obtener_muchas_asignaturas<br>
    * 
    *  Este método tendrá la misma función que el método obtener_asignatura(nombre) 
    * con la única diferencia de que se buscará la asignatura por su nombre parcial en vez de la necesidad
    *  de introducir el nombre exacto.<br>
    * 
    *  Esto se conseguirá mediante el método filter() el cual filtrará las asignaturas cuyo nombre no
    * posea el string introducido como parametro en el método.
    * <br>
    * Si existiese algun elemento en el nuevo array creado después de utilizar el método filter entonces
    * se recorrería el array y se mostrararían las asignaturas que coincidan con el nombre 
    * introducido como parametro.
    * <br>
    * Así este método, al contrario que el anterior, devolverá multiples resultados en vez de solamente
    * una coincidencía.
    * <br>
    * @param {string} nombre - *El texto parcial o completo del nombre de la asignatura.*
    * @returns {void} Muestra en consola las asignaturas encontradas o un mensaje de error.
    * @throws {error} **En caso de que no se encuentre ninguna asignatura que coincida con el parametro nombre introducido**
    */
    obtener_muchas_asignaturas(nombre) {
        let obtener_As = this._gestor.filter(elemento => elemento.nombre.toLowerCase().includes(nombre.toLowerCase()));
        //includes: Se usa para verificar si el nombre parcial está contenido en el nombre completo de la asignatura.
        //filter() devuelve un array con todas las asignaturas que coincidan. Se podría haber utilizado find pero ese método solo devuelve un valor.
        try {
            if (obtener_As.length > 0) {
                return obtener_As.forEach(elemento => {
                    console.log("La asignatura encontrada es " + elemento.toString());
                });
            } else {
                throw new Error(`No se encontró ninguna asignatura con el nombre ${nombre}`);
            }
        } catch (error) {
            console.log(`Error: ${error.message}`);
            return false;
        }

    }

    /**
     * ## Método: toString<br>
     * 
     *  El método toString servirá como una sobrecarga del metodo toString de la clase Gestores y este 
     *  mostrará la longitud del array _gestor pero indicando que la lista es una lista de asignaturas.
     * <br>
     * @returns {string}
     */
    toString() {//sobrecarga
        super.toString();
        return `Lista con ${this._gestor.length} Asignaturas`;
    }


}

/**
 * # Clase ErrorPersonalizado<br>
 * 
 * Extiende de la clase "Error" para crear un tipo de error personalizado que puede ser utilizado en validaciones específicas.
 * <br>
 * */

class ErrorPersonalizado extends Error {
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



function validarEstudiante(estudiante) {
    if (typeof estudiante.nombre != 'string' || estudiante.nombre.trim() === "") {
        throw new ErrorPersonalizado("El nombre es obligatorio.");
    }
    if (typeof estudiante.edad != 'number' || estudiante.edad <= 0) {
        throw new ErrorPersonalizado("La edad debe ser un número positivo.");
    }
    console.log("Estudiante validado con éxito:");
}

// Ejemplo de uso
try {//te hace un id nuevo
    let estudiante0 = new Estudiantes("Estudiante ZERO", -5, new Direccion("Calle pex", 10, "12ºA", 29345, "Malaga", "Malaga"));
    //console.log(estudiante0.nombre);
    validarEstudiante(estudiante0);
} catch (error) {
    if (error instanceof ErrorPersonalizado) {//instanceof te ayuda a saber si un objeto en su cadena de prototipos contiene la propiedad prototype de un constructor.
        console.log(`Error de validación: ${error.message}`);
    } else {
        console.log(`Ocurrió un error inesperado: ${error.message}`);
    }
}

//////////////////////////////////////


const listaEstudiantes = new GestorEs();//inicializamos un objeto de la clase GestorEs que actuará como un array de estudiantes
const listaAsignaturas = new GestorAs();//inicializamos un objeto de la clase GestorAs que actuará como un array de asignaturas
let listaDirecciones = [];//inicializamos un array para guardar las direcciones da cada estuadiante

//inicializamos una serie de valores que actuarán como valores por defecto para nuestros casos
listaDirecciones.push(new Direccion("Calle pez", 5, "6ºA", 29005, "Malaga", "Malaga"));
listaDirecciones.push(new Direccion("Calle Dolores", 10, "7ºC", 18210, "Granada", "Peligros"));
listaDirecciones.push(new Direccion("Calle Sierpes ", 20, "10ºB", 41004., "Sevilla", "Sevilla"));
listaDirecciones.push(new Direccion("Calle Cabezas", 1, "4ºD", 14003, "Cordoba", "Cordoba"));
listaDirecciones.push(new Direccion("Calle Aleatoria", 23, "8ºA", 32123, "Aleatoria", "Aleatoria"));

// Creación de Estudiantes
let estudiante1 = new Estudiantes("Estudiante A", 10, listaDirecciones[0]);
let estudiante2 = new Estudiantes("Estudiante B", 12, listaDirecciones[1]);
let estudiante3 = new Estudiantes("Estudiante C", 20, listaDirecciones[2]);
let estudiante4 = new Estudiantes("Estudiante D", 19, listaDirecciones[3]);
let estudiante5 = new Estudiantes("Estudiante E", 16, listaDirecciones[4]);


//añadimos los estudiantes
listaEstudiantes.agregar_estudiante(estudiante1);
listaEstudiantes.agregar_estudiante(estudiante2);
listaEstudiantes.agregar_estudiante(estudiante3);
listaEstudiantes.agregar_estudiante(estudiante4);
listaEstudiantes.agregar_estudiante(estudiante5);

//console.log(listaEstudiantes.listar_estudiantes())

// Creación de Asignaturas
let mates = new Asignaturas("Matematicas");
let fisica = new Asignaturas("Fisica");
let lengua = new Asignaturas("Lengua");
let biologia = new Asignaturas("Biologia");
let dibujo = new Asignaturas("Dibujo");


//Añadimos las asignaturas a la lista. Las asignaturas tienen que ser objetos para poder implementar más facilmente sus metodos agregar calificación y eliminar calificación
listaAsignaturas.agregar_asignatura(mates);
listaAsignaturas.agregar_asignatura(fisica);
listaAsignaturas.agregar_asignatura(lengua);
listaAsignaturas.agregar_asignatura(biologia);
listaAsignaturas.agregar_asignatura(dibujo);

//console.log(listaAsignaturas.listar_asignaturas());


// Matriculación de Estudiantes


for (let i = 0; i < listaEstudiantes.gestor.length; i++) {
    listaEstudiantes.gestor[i].matricular(listaAsignaturas.gestor[0]);
    listaEstudiantes.gestor[i].matricular(listaAsignaturas.gestor[1]);
    listaEstudiantes.gestor[i].matricular(listaAsignaturas.gestor[2]);
    listaEstudiantes.gestor[i].matricular(listaAsignaturas.gestor[3]);
    listaEstudiantes.gestor[i].matricular(listaAsignaturas.gestor[4]);
}

// Desmatriculaciones de Estudiantes

listaEstudiantes.gestor[0].desmatricular(listaAsignaturas.gestor[0]);
listaEstudiantes.gestor[1].desmatricular(listaAsignaturas.gestor[0]);
listaEstudiantes.gestor[2].desmatricular(listaAsignaturas.gestor[0]);
listaEstudiantes.gestor[3].desmatricular(listaAsignaturas.gestor[0]);

// Calificación de Estudiantes
listaEstudiantes.gestor[0].agregar_calificacion(listaAsignaturas.gestor[1], 10);
listaEstudiantes.gestor[1].agregar_calificacion(listaAsignaturas.gestor[1], 10);
listaEstudiantes.gestor[2].agregar_calificacion(listaAsignaturas.gestor[1], 10);
listaEstudiantes.gestor[3].agregar_calificacion(listaAsignaturas.gestor[1], 10);
listaEstudiantes.gestor[4].agregar_calificacion(listaAsignaturas.gestor[1], 10);



//console.log(listaAsignaturas.obtener_asignatura("Fisica"));



let pregunta = 0;

do {


    console.log("Opciones");
    console.log("1 - Crear estudiante");
    console.log("2 - Crear Asignatura");
    console.log("3 - Matricular estudiante");
    console.log("4 - Desmatricular estudiante");
    console.log("5 - Eliminar estudiante de la lista");
    console.log("6 - Eliminar asignatura de la lista");
    console.log("7 - Calificar asignaturas y estudiantes");
    console.log("8 - Promedio de un estudiante");
    console.log("9 - Promedio de todos los estudiantes");
    console.log("10 - Fechas de matriculacion");
    console.log("11 - Buscar");//buscar estudiantes o asignaturas por coincidencia parcial
    console.log("12 - Mostrar reporte");/* Muestra el reporte de todos los estudiantes y su información, tanto datos personales (nombre, edad y dirección) como calificaciones (asignaturas y promedio).*/
    console.log("13 - Salir");



    pregunta = prompt("Dime la opción que desees realizar");
    pregunta = Number(pregunta);

    /**
     * 
     * # Gestionar las acciones del menú principal según la opción seleccionada.
     *  @param {number} pregunta - *La opción seleccionada por el usuario.*
     */
    switch (pregunta) {
        /**
         * ## Caso 1: Creación de un estudiante y adición a la lista de estudiantes
         * <br>
         * 
         * Este caso se encargará de la creación de un estudiante y de agregarlo a la listaEstudiantes
         * gracias al método agregar_estudiante.
         * <br>
         * Antes de agregar a un estudiante a la lista se comprobará si los valores introducidos por el usuario
         * son validos y en caso de que sean validos se agregarán como un nuevo estudiante.
         * <br>
         * @throws {Error} **Si alguno de los datos no es válido.**
        */
        case 1:

            let patron1 = /^[a-zA-ZáéíóúüÁÉÍÓÚÜ ]+$/;

            let nombre = prompt("Introduce el nombre del estudiante:");
            let edad = prompt("Introduce la edad del estudiante:");
            edad = Number(edad);
            console.log("Introduce la dirección del estudiante:");
            let calle = prompt("Calle:");
            let numero = parseInt(prompt("Número:"));
            let piso = prompt("Piso:");
            let codigo_postal = prompt("Código postal (5 dígitos):");
            let provincia = prompt("Provincia:");
            let localidad = prompt("Localidad:");

            try {

                if (nombre === "" || !patron1.test(nombre) || typeof edad != 'number' || edad <= 0) {
                    throw new Error("El nombre o la edad no se han introducido correctamente. Vuelve a intentarlo")
                    // break;
                }



                if (calle === "" || numero === "" || piso === "" || codigo_postal === "" || provincia === "" || localidad === "") {
                    throw new Error("Los datos no se han introducido correctamente, vuelve a intentarlo");
                    // break;
                }

            } catch (error) {
                console.log(`Error: ${error.message}`);
                break;
            }

            let nuevaDireccion = new Direccion(calle, numero, piso, codigo_postal, provincia, localidad);

            let nuevoEstudiante = new Estudiantes(nombre, edad, nuevaDireccion);

            let comprobacion_es = listaEstudiantes.agregar_estudiante(nuevoEstudiante);

            if (comprobacion_es != false) {
                console.log("Estudiante creado y agregado con éxito:");
                listaEstudiantes.listar_estudiantes();
            }

            break;


        /**
         * ## Caso 2: Creación de una asignatura y adición a la lista de asignaturas
         * <br>
         *  Este caso se encargará de la creación de una Asignatura y de agregarla a la listaAsignaturas.
         * <br>
         * En este caso también se validarán los valores antes de agregarlos y se utilizará el método
         * trim() para eliminar cualquier espacio en blanco que se haya podido dejar en el nombre
         * de asignatura introducido por el usuario.
         * <br>
         * Cuando el valor haya sido validado, se creará un objeto de la clase asignaturas con el
         *  nombre introducido como valor y se agregará a listaAsignaturas con el método agregar_asignatura
         * <br>
         *  @throws {Error} **Si el nombre de la asignatura no es válido.**
        */
        case 2:

            let patron2 = /^[a-zA-ZáéíóúüÁÉÍÓÚÜ ]+$/;

            let asignatura = prompt("Introduce el nombre de la asignatura:");

            try {
                if (!patron2.test(asignatura) || typeof asignatura != "string" || asignatura.trim() === "") {
                    throw new Error("Error: La asignatura no es valida");
                }
            } catch (error) {
                console.log(error.message);
                break;
            }
            let N_asignatura = new Asignaturas(asignatura.trim());//nueva asignatura


            let comprobacion_as = listaAsignaturas.agregar_asignatura(N_asignatura);

            if (comprobacion_as != false) {
                console.log(`Asignatura ${asignatura} creada y agregada con éxito.`);
                listaAsignaturas.listar_asignaturas(); // Mostrar todas las asignaturas
            }

            break;

        /**
          * ## Caso 3: Matricular a un estudiante en una asignatura
          * <br>
          *  En este caso se matriculará a un estudiante mediante los métodos obtener_estudiante(id) y
          *  matricular(asignatura).
          * <br>
          *  Se le pedirá al usuario el id del estudiante que quiera matricular y el nombre de la asignatura
          *  en la cual quiera matricular al estudiante.
          * <br>
          * Entonces se pasará el string con el id introducido a Number y se realizará el metodo
          * matricular para que la asignatura introducida aparezca en el array de asignaturas del estudiante
          * y que se registre así como una asignatura matriculada
          * <br>
          */
        case 3:

            listaEstudiantes.listar_estudiantes();
            let id = prompt("Dime el id del estudiante que quieras matricular");

            id = Number(id);
            //Buscamos el id del estudiante en el array que hemos creado de estudiantes
            let encontrarE = listaEstudiantes.obtener_estudiante(id);
            if (encontrarE != false) {

                let asig = prompt("Ahora dime el nombre de la asignatura");
                //Buscamos el nombre de la asignatura en el array que hemos creado de Asignaturas
                let encontrarA = listaAsignaturas.obtener_asignatura(asig);
                if (encontrarA != false) {
                    let matri = encontrarE.matricular(encontrarA);
                    if (matri == true) {
                        console.log(`${encontrarE.nombre} ha sido matriculado en ${encontrarA.nombre} con éxito.`);
                        //mostramos al estudiante elegido y sus asignaturas matriculadas
                    }
                }
                encontrarE.asignaturas.forEach((elemento, clave) => {//numero de asignaturas en las que esta matriculado el estudiante
                    console.log(`${clave}. ${elemento.nombre}`);
                });
            }


            break;

        /**
         * ## Caso 4: Desmatricular a un estudiante de una asignatura
         * <br>
         * En este caso se desmatriculará a un estudiante de una asignatura gracias a los 
         * métodos obtener_estudiante(id) y desmatricular(asignatura).
         * <br>
         * Se le pedirá al usuario el id del estudiante que quiera desmatricular y el nombre de la 
         * asignatura en la cual quiera desmatricular al estudiante.
         *  <br>
         * Entonces se pasará el string con el id introducido a Number y se realizará el metodo
         * desmatricular para que la asignatura introducida desaparezca del array de asignaturas 
         * del estudiante y que se registre como desmatriculada en en array de registros.
         * <br>
         * En caso de que el nombre de la asignatura no exista en el array de asignaturas dentro de
         * estudiante se lanzará un error como hemos explicado en el metodo desmatricular
         */

        case 4:
            listaEstudiantes.listar_estudiantes();
            let id2 = prompt("Dime la id del estudiante que quieras desmatricular");

            id2 = Number(id2);
            //Buscamos el id del estudiante en el array que hemos creado de estudiantes
            let estu_des = listaEstudiantes.obtener_estudiante(id2);
            if (estu_des != false) {
                estu_des.asignaturas.forEach((elemento, clave) => {//muestro las asignaturas en las que esta matriculado el estudiante
                    console.log(`${clave}. ${elemento.nombre}`);
                });
                let asig_estu = prompt("Ahora dime la asignatura de la cual quieres desmatricular al estudiante");
                let asig_des = listaAsignaturas.obtener_asignatura(asig_estu);
                if (asig_des != false) {
                    let desma = estu_des.desmatricular(asig_des);
                    if (desma == true) {
                        console.log(`${estu_des.nombre} ha sido desmatriculado en ${asig_des.nombre} con éxito.`);
                    }
                }


                estu_des.asignaturas.forEach((elemento, clave) => {
                    console.log(`${clave}. ${elemento.nombre}`);
                });
            }


            break;
        /**
         * ## Caso 5: Eliminar un estudiante de la lista
         * <br>
         * En el caso 5 se tratará de eliminar un estudiante de la listaEstudiantes.
         * <br>
         * Esto se logrará gracias a los métodos listar_estudiantes() para mostrar antes y después que
         * estudiantes están introducidos en la lista y  eliminar_estudiante(id) el cual se encargará
         * de buscar un estudiante con el mismo id que el introducido en listaEstudiantes.
         * <br>
         * Si lo encuentra lo eliminará de la lista y si no lo encuentra se lanzará un error por pantalla
         * <br>
         * @throws {error} **Si el id del estudiante no es un número o si es menor que 0**
         */
        case 5:
            listaEstudiantes.listar_estudiantes();
            let elim_estu = prompt("Dime el id del estudiante que quieras eliminar");
            elim_estu = Number(elim_estu);

            try {
                if (isNaN(elim_estu) || elim_estu <= 0) {
                    throw new Error("El ID debe ser un número positivo.");
                }
            } catch (error) {
                console.log(`Error: ${error.message}`);
                break;
            }


            //let obtener_E = listaEstudiantes.obtener_estudiante(elim_estu);

            let comprobacion = listaEstudiantes.eliminar_estudiante(elim_estu);//si el estudiante existe, entonces se elimina indicando su id

            if (comprobacion != false) {
                console.log(`El estudiante con ID ${elim_estu} ha sido eliminado correctamente.`);
                listaEstudiantes.listar_estudiantes();
            }


            break;
        /**
         * ## Caso 6: Eliminar una asignatura elegida
         * <br>
         * El caso 6 se encargará de eliminar una asignatura elegida por el usuario del array listaAsignaturas
         * <br>
         * Este caso se conseguira con la ayuda de los métodos listar_asignaturas() para mostrar las 
         * asignaturas de la lista antes y después de la eliminación y eliminar_asignatura(nombre)
         * que si no encuentra ninguna coincidencia con el nombre de la asignatura introducido entonces
         * se mostrará un error y si lo encuentra, eliminará esa asignatura de la listaAsignaturas.
         * <br>
         * @throws {error} **si el nombre introducido como parametro no es un string o si esta vacio**
         */
        case 6:
            listaAsignaturas.listar_asignaturas();//muestra las asignaturas antes de eliminarlas

            let elim_asig = prompt("Dime el nombre de la asignatura que quieres eliminar");

            try {

                if (typeof elim_asig != "string" || elim_asig.trim() === "") {
                    console.log("La asignatura no es valida");
                }

            } catch (error) {
                console.log(`Error: ${error.message}`);
                break;
            }



            let comprobacion2 = listaAsignaturas.eliminar_asignatura(elim_asig, listaEstudiantes);

            if (comprobacion2 != false) {
                console.log(`La asignatura ha sido eliminada correctamente.`);
                listaAsignaturas.listar_asignaturas();
            }


            break;

        /**
         * ## Caso 7: Calificar asignaturas y estudiantes
         * <br>
         *  En el caso 7 se califican las asignaturas con las notas que un estudiante haya estado 
         *  sacando con el método agregar_calificacion(nota) de la clase Asignaturas y al final de todo 
         *  se hace el promedio de esas notas con el método calcular_promedio() 
         *  y se le asigna ese promedio a la asignatura con esas notas.
         * <br>
         *  Después se pide indicar el id del estudiante al que se le asignará ese promedio de notas
         *  como su calificacion en esa asignatura.
         * <br>
         *  Ese estudiante se encontrará con el método obtener_estudiante(id) y una vez encontrado
         *  se le asignará ese promedio de la asignatura como su nota final de esa asignatura elegida
         *  con el método agregar_calificacion(asignatura,nota) de la clase estudiantes.
         * <br>
         *  Por último, una vez añadido el promedio de la asignatura a un estudiante, se eliminarán las 
         *  notas introducidas a esa asignatura para que en caso de que se quieran añadir notas para un 
         *  nuevo estudiante de la misma asignatura, las notas del anterior estudiante no influyan en el
         *  promedio del nuevo estudiante.
         * <br>
         */
        case 7:
            //se califican asignaturas y el promedio de esas notas seran la nota final del estudiantes
            let nombre_asig = prompt("Introduce el nombre de la asignatura que desees calificar");
            let asignatura_N = listaAsignaturas.obtener_asignatura(nombre_asig);

            if (asignatura_N != false) {
                let continuar = "";
                let nota = 0;
                let calificacion_compr = null;
                do {
                    nota = prompt("Introduce la nota de la asignatura a calificar");
                    nota = Number(nota);
                    calificacion_compr = asignatura_N.agregar_calificacion(nota);
                    if (calificacion_compr == true) {
                        continuar = prompt("Quieres seguir agregando calificaciones a la asignatura? si/no");
                    } else {
                        continuar = "no";
                    }
                } while (continuar.toLowerCase() != "no");

                if (calificacion_compr == true) {
                    console.log("calculamos el promedio de las calificaciones de la asignatura elegida");
                    let nota_promedio_calificaciones = asignatura_N.calcular_promedio();


                    // Listar estudiantes disponibles
                    listaEstudiantes.listar_estudiantes();
                    let id_Estudiante = prompt("Ahora, introduce el ID del estudiante que deseas calificar con el promedio de esas calificaciones:");
                    id_Estudiante = Number(id_Estudiante);
                    let estudiante = listaEstudiantes.obtener_estudiante(id_Estudiante);

                    if (estudiante != false) {
                        console.log(`Asignaturas en las que está matriculado ${estudiante.nombre}`);
                        estudiante.asignaturas.forEach((elemento, clave) => {
                            console.log(`${clave}. ${elemento.nombre}`);
                        });

                        console.log(`El promedio ${nota_promedio_calificaciones} de la asignatura ${asignatura_N.nombre} será asignado al estudiante ${estudiante.nombre}`);
                        estudiante.agregar_calificacion(asignatura_N, nota_promedio_calificaciones);
                    }
                }

                //ahora eliminaremos las calificaciones que se han añadido a la asignatura elegida para que si se vuelve a este caso para añadir notas a
                //la misma asignatura las notas de este estudiante no se interpongan las 
                //notas del nuevo estudiante
                for (let i = 0; i < asignatura_N.calificaciones.length; i++) {
                    asignatura_N.eliminar_calificacion(i);
                }

                console.log("Operación terminada");
            }



            break;
        /**
         * ## Caso 8: Promedio de un estudiante
         * <br>
         * En el caso 8 se hará el promedio entre todas las calificaciones de un estudiante.
         * <br>
         * Este promedio se logrará con los métodos obtener_estudiante(id) para encontrar a un estudiante
         * en concreto al que hacer su promedio y una vez encontrado se utilizará el método promedio()
         * de la clase Estudiantes explicado anteriormente el cual se encargará de sumar todas las notas
         * del estudiante y dividirlas por el numero de notas en las que este matriculado.
         *  <br>
         * Por último, se mostrará la media de todas las calificaciones del estudiante elegido y el nombre
         * de dicho estudiante por pantalla.
         * <br>
         */
        case 8:
            // Listar estudiantes disponibles
            listaEstudiantes.listar_estudiantes();
            let promedio_Es = prompt("Introduce el ID del estudiante del cual deseas hacer su promedio: ");
            promedio_Es = Number(promedio_Es);
            let obtener_promedio = listaEstudiantes.obtener_estudiante(promedio_Es);


            if (obtener_promedio != false) {
                console.log("Ahora calcularemos el promedio de todas las notas del estudiante elegido");
                let promedio = obtener_promedio.promedio();//se calcula el promedio
                console.log(obtener_promedio.asignaturas);//se muestran las asignaturas con sus notas
                console.log(`El promedio de notas del estudiante ${obtener_promedio.nombre} es ${promedio}`);
            }
            break;

        /**
         * ## Caso 9: Promedio de todos los estudiantes
         * <br>
         * En el caso 9 se mostrará el promedio de todas las notas de todos los estudiante en conjunto.
         * <br>
         * Esto se logrará con el método promedio_lista(), el cual se encargará de recorrer todo el 
         * array de _gestor y hacer el promedio de todos los estudiantes de listaEstidiantes 
         * para luego ir sumandolos dentro de una variable y dividir ese total por el número de 
         * veces que se han ido sumando las notas para que asi de el promedio total entre todos los 
         * estudiantes de listaEstudiantes.
         * <br>
         * */
        case 9:
            listaEstudiantes.gestor.forEach(elemento => {
                console.log(`Estudiante: ${elemento.nombre}, Promedio: ${elemento.promedio()}, Asignaturas: ${elemento.asig_mostrar()}`);
            });

            console.log("Ahora se calculará el promedio de notas de todos los estudiantes");

            let promedio_total = listaEstudiantes.promedio_listas();

            console.log(`El promedio de todos los estudiantes será ${promedio_total}`);

            break;

        /**
         * ## Caso 10: Fechas de matriculacion
         * <br>
         * En el caso 10 se mostrarán las fechas de matriculación y desmatriculación de un estudiante
         * que se busque.
         *  <br>
         * Esto se realizará con los métodos listar_estudiantes() para mostrar todos los estudiantes
         * a elegir dentro de listaEstudaintes, obtener_estudiante(id) para que se devuelva un estudiante
         * concreto del que mostrar sus registros y por ultimo el getter de registros de la clase estudiante
         * el cual se utilizara en el estudiante que nos devuelva obtener_estudiante y nos mostrará las 
         * fechas de las matriculaciones y desmatriculaciones.<br> 
         * 
         * @throws {error} **si el id del estudiante no es un número o si es menor que 0**
         */
        case 10:
            listaEstudiantes.listar_estudiantes();
            let F_matricula = prompt("Dime el ID del estudiante del que quieras saber su fecha de matriculacion y fecha de desmatriculacion de sus asignaturas hasta el momento");
            F_matricula = Number(F_matricula);

            try {
                if (isNaN(F_matricula) || F_matricula <= 0) {
                    throw new Error("El ID debe ser un número positivo.");
                }
            } catch (error) {
                console.log(`Error: ${error.message}`);
                break;
            }

            let estudiante_fecha = listaEstudiantes.obtener_estudiante(F_matricula);

            if (estudiante_fecha != false) {
                console.log("Las asignaturas de las que se ha matriculado y desmatriculado hasta el momento son: ");
                console.log(estudiante_fecha.registros);
            }


            break;

        /**
         * ## Caso 11: Buscar
         * <br>
         * En este caso 11 se buscarán estudiantes o asignaturas por su nombre parcial o completo
         *  <br>
         * Primero se pedirá al usuario que introduzca 1 para buscar estudiantes o 2 para 
         * buscar asignaturas.
         *  <br>
         * En cualquiera de los dos casos se le volverá a pedir que introduzca un nombre de un estudiante
         * o asignatura para luego devolver un array de los nombres coincidentes con uno de los métodos
         * creados los cuales son obtener_nombre_estudiante(nombre) u obtener_muchas_asignaturas(nombre)
         * los cuales devolveran un array con los nombre que sean parcialmente coincidentes con el nombre
         * introducido por el usuario.
         * <br>
         */
        case 11:
            let buscar = prompt("Si quieres buscar un estudiante marca 1 y si quieres buscar una asignatura marca 2: ");
            buscar = Number(buscar);

            if (buscar == 1) {
                listaEstudiantes.listar_estudiantes();
                let buscar_E = prompt("Dime el nombre del estudiante al que estas buscando");

                listaEstudiantes.obtener_nombre_estudiante(buscar_E);

            } else if (buscar == 2) {
                listaAsignaturas.listar_asignaturas();
                let buscar_A = prompt("Dime el nombre de la asignatura que estas buscando");

                listaAsignaturas.obtener_muchas_asignaturas(buscar_A);



            }

            break;
        /**
         *  ## Caso 12: Mostrar reporte
         * <br>
         *  Por último, llegamos al caso 12 el cual deberá de mostrarnos una lista de informes de cada uno de 
         *  los estudiantes contenidos en listaEstudiantes. 
         * <br>
         */
        case 12:
            console.log("A continuación se mostrarán los informes de cada uno de los estudiantes: ");
            listaEstudiantes.listar_informes();
            break;

        /**
         *  ## Caso 13: Salir
         * <br>
         *  En caso de que el usuario quiera salir del menú entonces solo tendrá que marcar 13 en la consola para activar está opción
         */
        case 13:
            console.log("Adios");
            break;

        default:
            console.log("No se ha seleccionado la opcion correcta, vuelve a intentarlo");
            break;
    }


} while (pregunta != 13);