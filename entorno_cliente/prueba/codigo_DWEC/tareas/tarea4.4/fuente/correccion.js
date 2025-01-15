//Este proyecto esta disponible en mi github
//El enlace es: https://github.com/Virtual-Truck/git_cliente/blob/main/entorno_cliente/prueba/codigo_DWEC/tareas/tarea4.4/fuente/correccion.js


//Todas las salidas serán por consola y todas las entradas por teclado
//promt y console.log

/**
 * @module Proyecto3
 * 
 */

import * as direccion_1 from './direccion.js';

import * as estudiante_1 from './estudiantes.js';

import * as asignatura_1 from './asignaturas.js';

import * as gestor_1 from './gestores.js';

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
 * @typedef {Object} estudiante - El objeto que representa al estudiante.
 * @property {string} estudiante.nombre - El nombre del estudiante. Debe ser una cadena no vacía.
 * @property {number} estudiante.edad - La edad del estudiante. Debe ser un número positivo.
 * 
 */

/**
 * # Función: validarEstudiante <br>
 * 
 * Valida los datos de un estudiante y lanza un error personalizado si no cumple con las condiciones.
 * <br>
 * @param {Object} estudiante - El objeto que representa al estudiante.
 * @throws {ErrorPersonalizado} Si el nombre o la edad no son validos
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
    let estudiante0 = new estudiante_1.Estudiantes("Estudiante ZERO", -5, new Direccion("Calle pex", 10, "12ºA", 29345, "Malaga", "Malaga"));
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


const listaEstudiantes = new gestor_1.GestorEs();//inicializamos un objeto de la clase GestorEs que actuará como un array de estudiantes
const listaAsignaturas = new gestor_1.GestorAs();//inicializamos un objeto de la clase GestorAs que actuará como un array de asignaturas
let listaDirecciones = [];//inicializamos un array para guardar las direcciones da cada estuadiante

//inicializamos una serie de valores que actuarán como valores por defecto para nuestros casos
listaDirecciones.push(new direccion_1.Direccion("Calle pez", 5, "6ºA", 29005, "Malaga", "Malaga"));
listaDirecciones.push(new direccion_1.Direccion("Calle Dolores", 10, "7ºC", 18210, "Granada", "Peligros"));
listaDirecciones.push(new direccion_1.Direccion("Calle Sierpes ", 20, "10ºB", 41004., "Sevilla", "Sevilla"));
listaDirecciones.push(new direccion_1.Direccion("Calle Cabezas", 1, "4ºD", 14003, "Cordoba", "Cordoba"));
listaDirecciones.push(new direccion_1.Direccion("Calle Aleatoria", 23, "8ºA", 32123, "Aleatoria", "Aleatoria"));

// Creación de Estudiantes
let estudiante1 = new estudiante_1.Estudiantes("Estudiante A", 10, listaDirecciones[0]);
let estudiante2 = new estudiante_1.Estudiantes("Estudiante B", 12, listaDirecciones[1]);
let estudiante3 = new estudiante_1.Estudiantes("Estudiante C", 20, listaDirecciones[2]);
let estudiante4 = new estudiante_1.Estudiantes("Estudiante D", 19, listaDirecciones[3]);
let estudiante5 = new estudiante_1.Estudiantes("Estudiante E", 16, listaDirecciones[4]);


//añadimos los estudiantes
listaEstudiantes.gestor_1.agregar_estudiante(estudiante1);
listaEstudiantes.gestor_1.agregar_estudiante(estudiante2);
listaEstudiantes.gestor_1.agregar_estudiante(estudiante3);
listaEstudiantes.gestor_1.agregar_estudiante(estudiante4);
listaEstudiantes.gestor_1.agregar_estudiante(estudiante5);

//console.log(listaEstudiantes.listar_estudiantes())

// Creación de Asignaturas
let mates = new asignatura_1.Asignaturas("Matematicas");
let fisica = new asignatura_1.Asignaturas("Fisica");
let lengua = new asignatura_1.Asignaturas("Lengua");
let biologia = new asignatura_1.Asignaturas("Biologia");
let dibujo = new asignatura_1.Asignaturas("Dibujo");


//Añadimos las asignaturas a la lista. Las asignaturas tienen que ser objetos para poder implementar más facilmente sus metodos agregar calificación y eliminar calificación
listaAsignaturas.gestor_1.agregar_asignatura(mates);
listaAsignaturas.gestor_1.agregar_asignatura(fisica);
listaAsignaturas.gestor_1.agregar_asignatura(lengua);
listaAsignaturas.gestor_1.agregar_asignatura(biologia);
listaAsignaturas.gestor_1.agregar_asignatura(dibujo);

//console.log(listaAsignaturas.listar_asignaturas());


// Matriculación de Estudiantes


for (let i = 0; i < listaEstudiantes.gestor.length; i++) {
    listaEstudiantes.gestor[i].estudiante_1.matricular(listaAsignaturas.gestor[0]);
    listaEstudiantes.gestor[i].estudiante_1.matricular(listaAsignaturas.gestor[1]);
    listaEstudiantes.gestor[i].estudiante_1.matricular(listaAsignaturas.gestor[2]);
    listaEstudiantes.gestor[i].estudiante_1.matricular(listaAsignaturas.gestor[3]);
    listaEstudiantes.gestor[i].estudiante_1.matricular(listaAsignaturas.gestor[4]);
}

// Desmatriculaciones de Estudiantes

listaEstudiantes.gestor[0].estudiante_1.desmatricular(listaAsignaturas.gestor[0]);
listaEstudiantes.gestor[1].estudiante_1.desmatricular(listaAsignaturas.gestor[0]);
listaEstudiantes.gestor[2].estudiante_1.desmatricular(listaAsignaturas.gestor[0]);
listaEstudiantes.gestor[3].estudiante_1.desmatricular(listaAsignaturas.gestor[0]);

// Calificación de Estudiantes
listaEstudiantes.gestor[0].estudiante_1.agregar_calificacion(listaAsignaturas.gestor[1], 10);
listaEstudiantes.gestor[1].estudiante_1.agregar_calificacion(listaAsignaturas.gestor[1], 10);
listaEstudiantes.gestor[2].estudiante_1.agregar_calificacion(listaAsignaturas.gestor[1], 10);
listaEstudiantes.gestor[3].estudiante_1.agregar_calificacion(listaAsignaturas.gestor[1], 10);
listaEstudiantes.gestor[4].estudiante_1.agregar_calificacion(listaAsignaturas.gestor[1], 10);



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
     *  @param {number} pregunta - La opción seleccionada por el usuario.
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
         * @throws {error} **Si alguno de los datos no es válido.**
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

            let nuevaDireccion = new direccion_1.Direccion(calle, numero, piso, codigo_postal, provincia, localidad);

            let nuevoEstudiante = new estudiante_1.Estudiantes(nombre, edad, nuevaDireccion);

            let comprobacion_es = listaEstudiantes.gestor_1.gregar_estudiante(nuevoEstudiante);

            if (comprobacion_es != false) {
                console.log("Estudiante creado y agregado con éxito:");
                listaEstudiantes.gestor_1.listar_estudiantes();
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
         *  @throws {error} **Si el nombre de la asignatura no es válido.**
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
            let N_asignatura = new asignatura_1.Asignaturas(asignatura.trim());//nueva asignatura


            let comprobacion_as = listaAsignaturas.gestor_1.agregar_asignatura(N_asignatura);

            if (comprobacion_as != false) {
                console.log(`Asignatura ${asignatura} creada y agregada con éxito.`);
                listaAsignaturas.gestor_1.listar_asignaturas(); // Mostrar todas las asignaturas
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

            listaEstudiantes.gestor_1.listar_estudiantes();
            let id = prompt("Dime el id del estudiante que quieras matricular");

            id = Number(id);
            //Buscamos el id del estudiante en el array que hemos creado de estudiantes
            let encontrarE = listaEstudiantes.gestor_1.obtener_estudiante(id);
            if (encontrarE != false) {

                let asig = prompt("Ahora dime el nombre de la asignatura");
                //Buscamos el nombre de la asignatura en el array que hemos creado de Asignaturas
                let encontrarA = listaAsignaturas.gestor_1.obtener_asignatura(asig);
                if (encontrarA != false) {
                    let matri = encontrarE.estudiante_1.matricular(encontrarA);
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
            listaEstudiantes.gestor_1.listar_estudiantes();
            let id2 = prompt("Dime la id del estudiante que quieras desmatricular");

            id2 = Number(id2);
            //Buscamos el id del estudiante en el array que hemos creado de estudiantes
            let estu_des = listaEstudiantes.gestor_1.obtener_estudiante(id2);
            if (estu_des != false) {
                estu_des.asignaturas.forEach((elemento, clave) => {//muestro las asignaturas en las que esta matriculado el estudiante
                    console.log(`${clave}. ${elemento.nombre}`);
                });
                let asig_estu = prompt("Ahora dime la asignatura de la cual quieres desmatricular al estudiante");
                let asig_des = listaAsignaturas.gestor_1.obtener_asignatura(asig_estu);
                if (asig_des != false) {
                    let desma = estu_des.estudiante_1.desmatricular(asig_des);
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
            listaEstudiantes.gestor_1.listar_estudiantes();
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

            let comprobacion = listaEstudiantes.gestor_1.eliminar_estudiante(elim_estu);//si el estudiante existe, entonces se elimina indicando su id

            if (comprobacion != false) {
                console.log(`El estudiante con ID ${elim_estu} ha sido eliminado correctamente.`);
                listaEstudiantes.gestor_1.listar_estudiantes();
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
            listaAsignaturas.gestor_1.listar_asignaturas();//muestra las asignaturas antes de eliminarlas

            let elim_asig = prompt("Dime el nombre de la asignatura que quieres eliminar");

            try {

                if (typeof elim_asig != "string" || elim_asig.trim() === "") {
                    console.log("La asignatura no es valida");
                }

            } catch (error) {
                console.log(`Error: ${error.message}`);
                break;
            }



            let comprobacion2 = listaAsignaturas.gestor_1.eliminar_asignatura(elim_asig, listaEstudiantes);

            if (comprobacion2 != false) {
                console.log(`La asignatura ha sido eliminada correctamente.`);
                listaAsignaturas.gestor_1.listar_asignaturas();
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
            let asignatura_N = listaAsignaturas.gestor_1.obtener_asignatura(nombre_asig);

            if (asignatura_N != false) {
                let continuar = "";
                let nota = 0;
                let calificacion_compr = null;
                do {
                    nota = prompt("Introduce la nota de la asignatura a calificar");
                    nota = Number(nota);
                    calificacion_compr = asignatura_N.asignatura_1.agregar_calificacion(nota);
                    if (calificacion_compr == true) {
                        continuar = prompt("Quieres seguir agregando calificaciones a la asignatura? si/no");
                    } else {
                        continuar = "no";
                    }
                } while (continuar.toLowerCase() != "no");

                if (calificacion_compr == true) {
                    console.log("calculamos el promedio de las calificaciones de la asignatura elegida");
                    let nota_promedio_calificaciones = asignatura_N.asignatura_1.calcular_promedio();


                    // Listar estudiantes disponibles
                    listaEstudiantes.gestor_1.listar_estudiantes();
                    let id_Estudiante = prompt("Ahora, introduce el ID del estudiante que deseas calificar con el promedio de esas calificaciones:");
                    id_Estudiante = Number(id_Estudiante);
                    let estudiante = listaEstudiantes.gestor_1.obtener_estudiante(id_Estudiante);

                    if (estudiante != false) {
                        console.log(`Asignaturas en las que está matriculado ${estudiante.nombre}`);
                        estudiante.asignaturas.forEach((elemento, clave) => {
                            console.log(`${clave}. ${elemento.nombre}`);
                        });

                        console.log(`El promedio ${nota_promedio_calificaciones} de la asignatura ${asignatura_N.nombre} será asignado al estudiante ${estudiante.nombre}`);
                        estudiante.estudiante_1.agregar_calificacion(asignatura_N, nota_promedio_calificaciones);
                    }
                }

                //ahora eliminaremos las calificaciones que se han añadido a la asignatura elegida para que si se vuelve a este caso para añadir notas a
                //la misma asignatura las notas de este estudiante no se interpongan las 
                //notas del nuevo estudiante
                for (let i = 0; i < asignatura_N.calificaciones.length; i++) {
                    asignatura_N.asignatura_1.eliminar_calificacion(i);
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
            listaEstudiantes.gestor_1.listar_estudiantes();
            let promedio_Es = prompt("Introduce el ID del estudiante del cual deseas hacer su promedio: ");
            promedio_Es = Number(promedio_Es);
            let obtener_promedio = listaEstudiantes.gestor_1.obtener_estudiante(promedio_Es);


            if (obtener_promedio != false) {
                console.log("Ahora calcularemos el promedio de todas las notas del estudiante elegido");
                let promedio = obtener_promedio.estudiante_1.promedio();//se calcula el promedio
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
                console.log(`Estudiante: ${elemento.nombre}, Promedio: ${elemento.estudiante_1.promedio()}, Asignaturas: ${elemento.asig_mostrar()}`);
            });

            console.log("Ahora se calculará el promedio de notas de todos los estudiantes");

            let promedio_total = listaEstudiantes.gestor_1.promedio_listas();

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
            listaEstudiantes.gestor_1.listar_estudiantes();
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

            let estudiante_fecha = listaEstudiantes.gestor_1.obtener_estudiante(F_matricula);

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
                listaEstudiantes.gestor_1.listar_estudiantes();
                let buscar_E = prompt("Dime el nombre del estudiante al que estas buscando");

                listaEstudiantes.gestor_1.obtener_nombre_estudiante(buscar_E);

            } else if (buscar == 2) {
                listaAsignaturas.gestor_1.listar_asignaturas();
                let buscar_A = prompt("Dime el nombre de la asignatura que estas buscando");

                listaAsignaturas.gestor_1.obtener_muchas_asignaturas(buscar_A);



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
            listaEstudiantes.gestor_1.listar_informes();
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