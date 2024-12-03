
//creamos una clase para saber la direccion de cada estudiante
class Direccion {
    #calle;
    #numero;
    #piso;
    #codigo_postal;
    #provincia;
    #localidad;

    constuctor(calle, numero, piso, codigo, provincia, localidad) {
        let patron = /^[0-9]{5}$/;
        let comprobacion = (codigo.test(patron) ? codigo : "Error");

        this.#calle = calle;
        this.#numero = numero;
        this.#piso = piso;
        this.#codigo_postal = comprobacion;
        this.#provincia = provincia;
        this.#localidad = localidad;
    }
    get calle() {
        return this.#calle;
    }

    get numero() {
        return this.#numero;
    }

    get piso() {
        return this.#piso;
    }

    get codigo_postal() {
        return this.#codigo_postal;
    }

    get provincia() {
        return this.#provincia;
    }

    get localidad() {
        return this.#localidad;
    }

    get toString() {
        return this.#calle + " " + this.#numero + ", " + this.#piso + " - " + this.#codigo_postal + " " + this.#localidad + " (" + this.#provincia + ")";
    }


}



//Hacemos una clase que representará a los estudiantes
class Estudiantes {

    #id;
    #nombre;
    #edad;
    #direccion;//Tendra {calle,numero,posp,codigo postal,provincia y localidad}
    #asignaturas;//[nombre: , nota: ]
    #registros;//{tipo: , fecha:}

    static numeros_ocupados = [];//servira para almacenar en el constructor la id de cada estudiante

    constructor(N_nombre, N_edad, N_direc) {
        let patron = /^[a-zA-ZáéíóúüÁÉÍÓÚÜ ]+$/;//que contenga letras y espacios 1 o mas veces
        if (!patron.test(N_nombre)) {
            throw new Error("Error solo pueden mostrase espacios o letras");
        } else {
            this.#nombre = N_nombre;
        }

        let ID = 1;

        while (Estudiantes.numeros_ocupados.includes(ID)) {
            ID++;
        }
        Estudiantes.numeros_ocupados.push(ID);
        this.#id = ID;
        this.#edad = N_edad;
        this.#direccion = N_direc;//N_direc sera una clase direccion con todos sus valores
        this.#asignaturas = [];
        this.#registros = [];
    }

    get id() {
        return this.#id;
    }

    get nombre() {
        return this.#nombre;
    }

    get edad() {
        return this.#edad;
    }

    get direccion() {
        return this.#direccion;
    }

    //devolvera un array de cada asignatura
    get asignaturas() {
        return [...this.#asignaturas];
    }



    //mostramos por pantalla el id del estudiante y su nombre y edad
    get String() {
        return `${this.#id}: ${this.#nombre},  ${this.#edad}`;
    }



    matricular(asignatura) {
        if (!this.#asignaturas.includes(asignatura)) {
            const asignaturaObj = { nombre: asignatura.nombre, nota: 0 }; // Nota inicial en null
            this.#asignaturas.push(asignaturaObj);// Agrega la asignatura a la lista
            this.#registros.push({
                tipo: 'Matrícula', // Crea el campo `tipo` con el valor "Matrícula"
                fecha: new Date()
            });// Crea el campo `fecha` con la fecha y hora actual
        } else {
            throw new Error(`El estudiante ya está matriculado en ${asignatura.nombre}`);
        }
    }



    desmatricular(asignatura) {
        const indice = this.#asignaturas.findIndex(asig => asig.nombre === asignatura.nombre);//buscamos en el array una asignatura con el mismo nombre
        if (indice !== -1) {//si no es valor negativo la asignatura existe
            this.#asignaturas.splice(indice, 1);// Elimina la asignatura de la lista
            this.#registros.push({
                tipo: 'Desmatriculación', // Crea el campo `tipo` con el valor "Desmatriculación"
                fecha: new Date()
            }); // Crea el campo `fecha` con la fecha y hora actual
        } else {
            throw new Error(`El estudiante no está matriculado en ${asignatura.nombre}`);
        }
    }


    //registrar la fecha de matriculacion o desmatriculacion

    get registros() {
        return this.#registros.map(registro => {//recorre todo el array registros y le asigna las siguiente opciones
            const fecha = registro.fecha.toLocaleDateString('es-ES');//convertimos la fecha que le hemos introducido a registros en la matriculacion y desmatriculacion en el horario español

            return `${registro.tipo}: ${fecha}`;
        });
    }

    //cambiar la nota de calificacion si existe esta asignatura
    agregar_calificacion(asignatura, nota) {
        // Validar que la nota sea un número válido
        let comprobacion = false;
        if (typeof nota !== 'number' || nota < 0 || nota > 10) {
            throw new Error('La nota debe ser un número entre 0 y 10.');
        }

        const asignaturaEncontrada = this.#asignaturas.find(asig => asig.nombre === asignatura.nombre);
        //Con find recorre todo el array asignaturas y busca la coincidencia de nombre
        if (asignaturaEncontrada) {
            asignaturaEncontrada.nota = nota;
        } else {
            throw new Error(`El estudiante no está matriculado en la asignatura ${asignatura.nombre}`);
        }
    }

    // Calcula el promedio de todas las calificaciones del estudiante.
    promedio() {
        let promedioF = 0;
        for (let asig of this.#asignaturas) {
            promedioF += asig.nota;
        }

        return promedioF;

    }
}

/**
 * 2.3. Clase Gesto Estudiantes
*/
class GestorEs {
    #estudiantes;

    constructor(...estudiantes) {
        this.#estudiantes = [];

        for (let estudiante of estudiantes) {

            this.agregar_estudiante(estudiante);//agregamos a los estudiantes necesarios

        }

    }

    get gestor() {
        return [...this.#estudiantes];
    }

    agregar_estudiante(estudiante) {//agrega un estudiante a la lista
        if (this.#estudiantes.filter(elemento => elemento.id === estudiante.id)) {//si se introduce un id que ya exista entonces no se podrá agregar al estudiante
            throw new Error("Ya existe el estudiante.");
        }
        this.#estudiantes.push(estudiante);
    }

    eliminar_estudiante(id) {//elimina un estudiante de la lista
        let eliminar = this.#estudiantes.findIndex(elemento => elemento.id === id);
        //findIndex:devuelve el indice del primer elemento que cumpla la funcion definida
        if (eliminar === -1) {
            throw new Error(`No se encontró ningún estudiante con ID ${id}.`);
        }
        this.#estudiantes.splice(eliminar, 1);
    }

    listar_estudiantes() {//da una lista completa de cada estudiante
        for (let persona of this.#estudiantes) {
            console.log(persona.String);
        }
    }

    obtener_estudiante(id) {//busca un estudiante en la lista por id
        let obtener = this.#estudiantes.find(elemento => elemento.id === id);
        //find:devuelve el valor del primer elemento que cumpla la funcion definida
        return obtener;
    }

    //¿metodo ordenar?

}


/**
 * 2.4. Clase Asignatura
*/

//Clase para implementar una lista de asignaturas que despues pasaremos a los estudiantes en su array de asignaturas
class Asignaturas {
    nombre; //no lo hago privado para que pueda ser utilizado por metodos de la clase estudiante
    #calificaciones;//[[10],[9]]
    //calificaciones si es privado ya que tiene sus propios metodos para calcular el promedio de las calificaciones
    constructor(nombre1) {
        let patron = /^[a-zA-ZáéíóúüÁÉÍÓÚÜ ]+$/;//que contenga letras y espacios 1 o mas veces
        if (!patron.test(nombre1)) {
            throw new Error("Error solo pueden mostrase espacios o letras");
        } else {
            this.nombre = nombre1;
        }

        this.#calificaciones = [];
    }

    get nombreg() {
        return this.nombre;
    }

    get ToString() {//join para que ponga cualquier cosa entre los valores de los arrays
        return `Asignatura: ${this.nombre}, Calificaciones: ${this.#calificaciones.join(", ")}`;
    }

    //agrega la calificaion a la asignatura elegida
    agregar_calificacion(nota) {
        if ((nota >= 0 && nota <= 10)) {
            this.#calificaciones.push(nota);
        } else {
            throw new Error("La nota " + nota + " no es valida");
        }
    }

    //eliminar la calificaion que hemos puesto a la asignatura actual
    eliminar_calificacion(indice) {
        if (indice < 0 || indice >= this.#calificaciones.length) {
            throw new Error("Índice fuera de rango.");
        }
        this.#calificaciones.splice(indice, 1);//splice es para eliminar o reemplazar un numero especifico de elementos en una posicion concreta. 
        //ejemplo: [posicion,numero]
    }

    mostrar() {//creamos este metodo para saber el indice de cada asignatura
        this.#calificaciones.forEach((valor, clave) => {
            console.log(`Posicion:${clave} , valor:${valor} `);
        });
    }

    //calcular el promedio de las calificaciones de cada asignatura.
    calcular_promedio() {
        if (this.#calificaciones.length === 0) {
            return "No tiene calificaciones";
        }
        let suma = 0;
        for (let calificacion of this.#calificaciones) {
            suma += calificacion;
        }
        suma = suma / (this.#calificaciones.length);
        return suma.toFixed(2);//toFixed es para que solo muestre un numero determinado de decimales
    }

}


/**
 * 2.5. Clase GestorAsignaturas
*/

class GestorAs {
    #asignaturas;

    constructor(...asignaturas) {
        this.#asignaturas;

        for (let asignatura of asignaturas) {

            this.agregar_asignatura(asignatura);//agregamos las asignaturas necesarias

        }

    }

    get gestor() {
        return [...this.#asignaturas];
    }

    agregar_asignatura(asignatura) {
        if (this.#asignaturas.filter(elemento => elemento.id === asignatura.id)) {
            throw new Error("Ya existe el estudiante.");
        }
        this.#asignaturas.push(asignatura);
    } //Añade una asignatura.

    eliminar_asignatura(nombre) {
        let eliminar = this.#asignaturas.findIndex(elemento => elemento.nombre === nombre);
        if (eliminar === -1) {
            throw new Error(`No se encontró ningún estudiante con nombre ${nombre}.`);
        }
        this.#asignaturas.splice(eliminar, 1);
    } //Elimina una asignatura por nombre.

    listar_asignaturas() {
        for (let asignatura of this.#asignaturas) {
            console.log(asignatura.ToString);
        }
    }

    obtener_asignatura(nombre) {
        let obtener = this.#asignaturas.find(elemento => elemento.nombre === nombre);
        return obtener;
    }

}

/**
 * 3. Programa Principal.
 * 
 * En esta sección se declara un objeto ListaEstudiantes, otro objeto ListaAsignaturas, y un Array de objetos
 * Direccion llamado listaDirecciones. Seguidamente, se entra en el bucle while.
 * 
 * Extra: Se inicializan y añaden 5 direcciones, 5 estudiantes y 5 asignaturas.
 *        Se matriculan a algunos estudiantes de algunas asignaturas.
 * 
 * Por siempre, se preguntará la elección principal de la acción a realizar.
 * La variable eleccion será la variable que siempre obtenga el valor de window.prompt().
 */

while (true) {



    switch ("") {

        /**
         * 3.1. Crear
         * 
         * Siempre se pueden crear direcciones, estudiantes y/o asignaturas.
         */

        case 1:

            do {



                switch ("") {

                    /**
                     * 3.1.1. Crear Dirección
                     * 
                     * Se pedirá calle, número, piso, código postal, provincia y localidad.
                     * Al crearla, se guardará en el Array listaDirecciones.
                     */

                    case 1:



                        break;

                    /**
                     * 3.1.2. Crear Estudiante
                     * 
                     * Si el Array listaDirecciones no está vacío, se pedirá si se quiere usar una dirección.
                     * Si no, se pedirá calle, número, piso, código postal, provincia y localidad y se
                     * preguntará si se quiere guardar la dirección en el Array listaDirecciones.
                     * 
                     * Se pedirá nombre y edad, y se creará el estudiante.
                     */

                    case 2:



                        break;

                    /**
                     * 3.1.3. Crear Asignatura
                     * 
                     * Se pedirá nombre, y se creará la asignatura sólo si el listaAsignaturas no contiene
                     * una asignatura con el mismo nombre.
                     */

                    case 3:



                        break;

                }

            } while (true);

            break;

        /**
         * 3.2. Eliminar
         * 
         * No se podrá acceder a Eliminar si no existe ningún dato, ya sea dirección, estudiante o asignatura.
         */

        case 2:

            do {



                switch ("") {

                    /**
                     * 3.2.1. Eliminar Dirección
                     * 
                     * Si hay direcciones en el Array listaDirecciones, se escoge una de ellas para su
                     * eliminación.
                     */

                    case 1:



                        break;

                    /**
                     * 3.2.2. Eliminar Estudiante
                     * 
                     * Si existen estudiantes en listaEstudiantes, se escoge un estudiante para su
                     * eliminación.
                     */

                    case 2:



                        break;

                    /**
                     * 3.2.3. Eliminar Asignatura
                     * 
                     * Si hay asignaturas en listaAsignaturas, se escoge una asignatura para su eliminación.
                     */

                    case 3:



                        break;

                }

            } while (true);

            break;

        /**
         * 3.3. Matricular
         * 
         * Si no hay datos registrados, o no hay estudiantes, o no hay asignaturas, no se puede acceder.
         * 
         * En primer lugar se escoge un estudiante de listaEstudiantes. Sólo se podrán escoger aquellos que
         * no estén matriculados de todas las asignaturas.
         * Después, se escogen las asignaturas a matricular.
         */

        case 3:



            break;

        /**
         * 3.4. Desmatricular
         * 
         * Si no existen datos, asignaturas, o estudiantes matriculados de al menos una asignatura, no se
         * puede acceder.
         * 
         * En primer lugar, se escoge un estudiante de entre los matriculados en al menos una asignatura.
         * Después, se seleccionan las asignaturas a desmatricular.
         */

        case 4:



            break;

        /**
         * 3.5. Registro de Auditoría
         * 
         * Si no existen datos, estudiantes o asignaturas, no se puede acceder.
         * 
         * Se escoge el estudiante para obtener sus registros y se muestran.
         */

        case 5:



            break;

        /**
         * 3.6. Calificar
         * 
         * Si no existen datos, asignaturas, o estudiantes matriculados de al menos una asignatura, no se 
         * puede acceder.
         * 
         * En primer lugar, se escoge entre los estudiantes matriculados de al menos una asignatura.
         * Después, se escoge la asignatura a calificar entre las asignaturas de las cuales el estudiante
         * está matriculado. Si dicha asignatura ya está calificada, se emitirá una advertencia sobre la
         * sobreescritura de la nota.
         * Finalmente, se pide una nota entre 0 y 10 y se califica al estudiante con dichos parámetros.
         */

        case 6:



            break;

        /**
         * 3.7. Buscar
         * 
         * Si no existen datos, estudiantes o asignaturas, no se puede acceder.
         */

        case 7:



            do {



                switch ("") {

                    /**
                     * 3.7.1. Buscar Estudiantes
                     * 
                     * Al principio, se muestran todos los estudiantes de listaEstudiantes.
                     * Se introduce un texto y se muestran las coincidencias de los estudiantes cuyo nombre
                     * incluya dicho texto.
                     */

                    case 1:



                        break;

                    /**
                     * 3.7.2. Buscar Asignaturas
                     * 
                     * Al principio, se muestran todos las asignaturas de listaAsignaturas.
                     * Se introduce un texto y se muestran las coincidencias de las asignaturas cuyo nombre
                     * incluya dicho texto.
                     */

                    case 2:



                        break;

                }

            } while (true);

            break;

        /**
         * 3.8. Calcular Promedio
         * 
         * Si no existen datos, estudiantes o asignaturas, no se puede acceder.
         */

        case 8:



            do {



                switch ("") {

                    /**
                     * 3.8.1. Promedio General
                     * 
                     * Muestra el promedio de los promedios de los estudiantes (promedio general) y una de los promedios
                     * de cada estudiante.
                     */

                    case 1:



                        break;

                    /**
                     * 3.8.2. Promedio por Asignaturas
                     * 
                     * Muestra el promedio en una asignatura de las notas de todos los estudiantes matriculados en ella.
                     */

                    case 2:



                        break;

                }

            } while (true);

            break;

        /**
         * 3.9. Mostrar Reporte
         * 
         * Muestra el reporte de todos los estudiantes y su información, tanto datos personales (nombre, edad y dirección)
         * como calificaciones (asignaturas y promedio).
         */

        case 9:



            break;

    }

}