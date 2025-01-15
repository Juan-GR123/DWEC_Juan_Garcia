/**
 * # Clase Gestores <br>
 * Clase que representa un gestor de elementos almacenados en un array.<br>
 * El atributo principal es protegido para permitir el acceso en subclases. <br>
 */
export class Gestores {
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
export class GestorEs extends Gestores {
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
     * @throws {error} **En caso de que el id introducido no exista en la lista se lanzará un mensaje de error. **
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

export class GestorAs extends Gestores {
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
     * @throws {error} **En caso de que el método no devuelva nada **
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