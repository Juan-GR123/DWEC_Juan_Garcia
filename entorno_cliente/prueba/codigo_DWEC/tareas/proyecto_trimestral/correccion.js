//Todas las salidas serán por consola y todas las entradas por teclado
//promt y console.log

//creamos una clase para saber la direccion de cada estudiante
class Direccion {
    #calle;
    #numero;
    #piso;
    #codigo_postal;
    #provincia;
    #localidad;

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

    ToString() {
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

    static numeros = [];//servira para almacenar en el constructor la id de cada estudiante

    constructor(N_nombre, N_edad, N_direc) {
        let patron = /^[a-zA-ZáéíóúüÁÉÍÓÚÜ ]+$/;//que contenga letras y espacios 1 o mas veces
        if (!patron.test(N_nombre)) {
            throw new Error("Error solo pueden mostrase espacios o letras");
        } else {
            this.#nombre = N_nombre;
        }

        let ID = 1;

        while (Estudiantes.numeros.includes(ID)) {
            ID++;
        }
        Estudiantes.numeros.push(ID);
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
    ToString() {
        return `${this.#id}: ${this.#nombre},  ${this.#edad}`;
    }
    matricular(asignatura) {
        // Comprobar si la asignatura ya está matriculada por nombre
        if (this.#asignaturas.find(asig => asig.nombre.toLowerCase() === asignatura.nombre.toLowerCase())) {
            throw new Error(`El estudiante ya está matriculado en ${asignatura.nombre}`);
        } else {
            const asignaturaObj = { nombre: asignatura.nombre, nota: asignatura.nota };
            this.#asignaturas.push(asignaturaObj); // Agrega la asignatura a la lista
            this.#registros.push({
                tipo: 'Matrícula', // Crea el campo `tipo` con el valor "Matrícula"
                fecha: new Date() // Crea el campo `fecha` con la fecha y hora actual
            });
        }
    }


    desmatricular(asignatura) {
        const indice = this.#asignaturas.findIndex(asig => asig.nombre.toLowerCase() === asignatura.nombre.toLowerCase());//buscamos en el array una asignatura con el mismo nombre
        if (indice !== -1) {//si no es valor negativo la asignatura existe
            this.#asignaturas.splice(indice, 1);// Elimina la asignatura de la lista
            this.#registros.push({
                tipo: 'Desmatriculación', // Crea el campo `tipo` con el valor "Desmatriculación"
                fecha: new Date()
            }); // Crea el campo `fecha` con la fecha y hora actual
        } else {
            throw new Error(`El estudiante no está matriculado en ${asignatura.nombre.toLowerCase()}`);
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
        if (typeof nota !== 'number' || nota < 0 || nota > 10) {
            throw new Error('La nota debe ser un número entre 0 y 10.');
        }

        const asignaturaEncontrada = this.#asignaturas.find(asig => asig.nombre.toLowerCase() === asignatura.nombre.toLowerCase());
        //Con find recorre todo el array asignaturas y busca la coincidencia de nombre
        if (asignaturaEncontrada) {
            asignaturaEncontrada.nota = nota;
        } else {
            throw new Error(`El estudiante no está matriculado en la asignatura ${asignatura.nombre.toLowerCase()}`);
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

    ToString() {//join para que ponga cualquier cosa entre los valores de los arrays
        return `Asignatura: ${this.nombre}, Calificaciones: ${this.#calificaciones.join(", ")}`;
    }//Sobrecarga del metodo To_String de estudiantes

    //agrega la calificacion a la asignatura elegida
    agregar_calificacion(nota) {
        if ((nota >= 0 && nota <= 10)) {
            this.#calificaciones.push(nota);
        } else {
            throw new Error("La nota " + nota + " no es valida");
        }
    }

    //eliminar la calificacion que hemos puesto a la asignatura actual
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

class Gestores {
    _gestor;//si pongo el atributo protegido entonces las subclases tambien podrán acceder a el.

    constructor() {
        this._gestor = [];
    }

    get gestor() {
        return [...this._gestor];
    }
}




class GestorEs extends Gestores {


    constructor(...estudiantes) {
        super();

        for (let estudiante of estudiantes) {

            this.agregar_estudiante(estudiante);//agregamos a los estudiantes necesarios

        }

    }

    agregar_estudiante(estudiante) {//agrega un estudiante a la lista
        if (this._gestor.find(elemento => elemento.id === estudiante.id)) {//si se introduce un id que ya exista entonces no se podrá agregar al estudiante
            throw new Error("Ya existe el estudiante.");

        }
        this._gestor.push(estudiante);
    }

    eliminar_estudiante(id) {//elimina un estudiante de la lista
        let eliminar = this._gestor.findIndex(elemento => elemento.id === id);
        //findIndex:devuelve el indice del primer elemento que cumpla la funcion definida
        if (eliminar === -1) {
            throw new Error(`No se encontró ningún estudiante con ID ${id}.`);
        }
        this._gestor.splice(eliminar, 1);
    }

    listar_estudiantes() {//da una lista completa de cada estudiante
        for (let persona of this._gestor) {
            console.log(persona.ToString());
        }
    }

    obtener_estudiante(id) {//busca un estudiante en la lista por id
        let obtener = this._gestor.find(elemento => elemento.id === id);
        //find:devuelve el valor del primer elemento que cumpla la funcion definida
        if (obtener) {
            return obtener;
        } else {
            throw new Error(`No se encontró ningún estudiante con ID ${id}.`);
        }

    }

}


class GestorAs extends Gestores {


    constructor(...asignaturas) {
        super();

        for (let asignatura of asignaturas) {

            this.agregar_asignatura(asignatura);//agregamos las asignaturas necesarias

        }

    }

    agregar_asignatura(asignatura) {
        if (this._gestor.find(elemento => elemento.nombre.toLowerCase() === asignatura.nombre.toLowerCase())) {
            throw new Error("Ya existe la asignatura");
        }
        this._gestor.push(asignatura);
    } //Añade una asignatura.

    eliminar_asignatura(nombre) {
        let eliminar = this._gestor.findIndex(elemento => elemento.nombre === nombre);
        if (eliminar === -1) {
            throw new Error(`No se encontró ningúna asignatura con nombre ${nombre}.`);
        }
        this._gestor.splice(eliminar, 1);
    } //Elimina una asignatura por nombre.

    listar_asignaturas() {
        for (let asignatura of this._gestor) {
            console.log(asignatura.ToString());
        }
    }

    obtener_asignatura(nombre) {
        let obtener = this._gestor.find(elemento => elemento.nombre.toLowerCase() == nombre.toLowerCase());
        if (obtener) {
            return obtener;
        } else {
            throw new Error(`No se encontró ningúna asignatura con nombre ${nombre}.`);
        }

    }


}



//////////////////////////////////////

//Estos valores del principio se introducen para que ya haya valores en las listas y estas no esten vacias.
try {
    const listaEstudiantes = new GestorEs();
    const listaAsignaturas = new GestorAs();
    let listaDirecciones = [];

    listaDirecciones.push(new Direccion("Calle pez", 5, "6ºA", 29005, "Malaga", "Malaga"));
    listaDirecciones.push(new Direccion("Calle Dolores", 10, "7ºC", 18210, "Granada", "Peligros"));
    listaDirecciones.push(new Direccion("Calle Sierpes ", 20, "10ºB", 41004., "Sevilla", "Sevilla"));
    listaDirecciones.push(new Direccion("Calle Cabezas", 1, "4ºD", 14003, "Cordoba", "Cordoba"));
    listaDirecciones.push(new Direccion("Calle Aleatoria", 23, "8ºA", 32123, "Aleatoria", "Aleatoria"));

    // Creación de Estudiantes
    let estudiante1 = new Estudiantes("Estudiante A", 10, listaDirecciones[0]);//me esta poniendo todos los estudiantes con el mismo id
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


    //Añadimos las asignaturas a la lista. Las asignaturas tienen que ser objetos para poder implementar mas facilmente sus metodos agregar calificacion y eliminar calificacion
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
    listaEstudiantes.gestor[2].agregar_calificacion(listaAsignaturas.gestor[1], 9.3);
    listaEstudiantes.gestor[2].agregar_calificacion(listaAsignaturas.gestor[3], 9);

    //console.log(listaAsignaturas.obtener_asignatura("Fisica"));

    let pregunta = 0;

    do {


        console.log("Opciones");
        console.log("1 - Crear estudiante");
        console.log("2 - Crear Asignatura");
        console.log("3 - Matricular estudiante");
        console.log("4 - Desmatriucular estudiante");
        console.log("5 - Eliminar estudiante de la lista");
        console.log("6 - Eliminar asignatura de la lista");
        console.log("7 - Calificar");//como calificar asignaturas que ya tienen una nota??
        console.log("8 - Calcular promedio de Asignaturas");
        console.log("9 - Calcular promedio de Estudiantes");
        console.log("0- Salir");



        pregunta = prompt("Dime la opción que desees realizar");
        pregunta = Number(pregunta);

        switch (pregunta) {

            case 0:
                console.log("Adios");
                break;

            case 1:
                let nombre = prompt("Introduce el nombre del estudiante:");
                let edad = prompt("Introduce la edad del estudiante:");
                edad = Number(edad);

                if (typeof edad != 'number' || edad <= 0) {
                    throw new Error("La edad debe ser un número positivo.");
                }

                console.log("Introduce la dirección del estudiante:");
                let calle = prompt("Calle:");
                let numero = parseInt(prompt("Número:"));
                let piso = prompt("Piso:");
                let codigo_postal = prompt("Código postal (5 dígitos):");
                let provincia = prompt("Provincia:");
                let localidad = prompt("Localidad:");

                if (calle === null || numero === null || piso === null || codigo_postal === null || provincia === null || localidad === null) {
                    console.log("Los datos no se han introducido correctamente, vuelve a intentarlo");//hago un console.log y no un throw error ya que quiero que 
                    //aunque se introduzcan valores incorrectos se pueda intentar de nuevo sin que te salga un error.
                    break;
                }

                let nuevaDireccion = new Direccion(calle, numero, piso, codigo_postal, provincia, localidad);

                let nuevoEstudiante = new Estudiantes(nombre, edad, nuevaDireccion);

                // Agregar el estudiante a la lista
                listaEstudiantes.agregar_estudiante(nuevoEstudiante);

                console.log("Estudiante creado y agregado con éxito:");
                listaEstudiantes.listar_estudiantes();


                break;

            case 2:
                let asignatura = prompt("Introduce el nombre de la asignatura:");

                if (typeof asignatura != "string") {
                    console.log("Error: La asignatura no es valida");
                    break;
                }

                let N_asignatura = new Asignaturas(asignatura.trim());//nueva asignatura
                //no se porque sale \&quot;

                listaAsignaturas.agregar_asignatura(N_asignatura);

                console.log(`Asignatura "${asignatura}" creada y agregada con éxito.`);
                listaAsignaturas.listar_asignaturas(); // Mostrar todas las asignaturas


                break;

            case 3:
                listaEstudiantes.listar_estudiantes();
                let id = prompt("Dime el id del estudiante que quieras matricular");

                id = Number(id);
                //Buscamos el id del estudiante en el array que hemos creado de estudiantes
                let encontrarE = listaEstudiantes.obtener_estudiante(id);

                let asig = prompt("Ahora dime el nombre de la asignatura");
                //Buscamos el nombre de la asignatura en el array que hemos creado de Asignaturas
                let encontrarA = listaAsignaturas.obtener_asignatura(asig);
                encontrarE.matricular(encontrarA);
                console.log(`${encontrarE.nombre} ha sido matriculado en ${encontrarA.nombre} con éxito.`);
                //mostramos al estudiante elegido y sus asignaturas matriculadas
                encontrarE.asignaturas.forEach((elemento, clave) => {
                    console.log(`${clave}. ${elemento.nombre}`);
                });
                break;

            case 4:
                listaEstudiantes.listar_estudiantes();
                let id2 = prompt("Dime la id del estudiante que quieras desmatricular");

                id2 = Number(id2);
                //Buscamos el id del estudiante en el array que hemos creado de estudiantes
                let estu_des = listaEstudiantes.obtener_estudiante(id2);
                if (!estu_des) {
                    console.log("No se ha encontrado al estudiante especificado");
                    break;
                }

                listaAsignaturas.listar_asignaturas();
                let asig_estu = prompt("Ahora dime la asignatura de la cual quieres desmatricular al estudiante");
                let asig_des = listaAsignaturas.obtener_asignatura(asig_estu);
                if (!asig_des) {
                    console.log("La asignatura no existe");
                    break;
                }
                estu_des.desmatricular(asig_des);
                console.log(`${estu_des.nombre} ha sido desmatriculado en ${asig_des.nombre} con éxito.`);
                break;
            case 5:
                let elim_estu = prompt("Dime el id del estudiante que quieras eliminar");
                elim_estu = Number(elim_estu);

                if (isNaN(elim_estu) || elim_estu <= 0) {
                    console.log("El ID debe ser un número positivo.");
                    break;
                }

                let obtener_E = listaEstudiantes.obtener_estudiante(elim_estu);//Comprobamos que el estudiante existe
                if (!obtener_E) {//si no existe en el array nos lo indica
                    console.log("El estudiante no existe");
                    break;
                }
                listaEstudiantes.eliminar_estudiante(elim_estu);//si el estudiante existe, entonces se elimina indicando su id
                console.log(`El estudiante con ID ${elim_estu} ha sido eliminado correctamente.`);
                listaEstudiantes.listar_estudiantes();

                break;

            case 6:
                let elim_asig = prompt("Dime el nombre de la asignatura que quieres eliminar");
                if (typeof elim_asig != "string") {
                    console.log("Error: La asignatura no es valida");
                    break;
                }
                let obtener_A = listaAsignaturas.obtener_asignatura(elim_asig);
                if (!obtener_A) {
                    console.log("La asignatura no existe");
                    break;
                }

                listaAsignaturas.eliminar_asignatura(elim_asig);
                console.log(`La asignatura con Nombre ${elim_estu} ha sido eliminada correctamente.`);
                listaAsignaturas.listar_asignaturas();
                break;
            case 7:
                // Listar estudiantes disponibles
                listaEstudiantes.listar_estudiantes();
                let id_Estudiante = prompt("Introduce el ID del estudiante que deseas calificar:");
                id_Estudiante = Number(id_Estudiante);
                let estudiante = listaEstudiantes.obtener_estudiante(id_Estudiante);
                if (!estudiante) {//No se puede hacer funcion de esta condicion ya que el break esta dentro de ella.
                    console.log("No se ha encontrado al estudiante especificado.");
                    break;
                }
                console.log(`Asignaturas en las que está matriculado ${estudiante.nombre}:`);
                estudiante.asignaturas.forEach((elemento, clave) => {
                    console.log(`${clave}. ${elemento.nombre}`);
                });

                let calificar = prompt("Introduce el nombre de la asignatura que desees calificar");
                let nota = prompt("Introduce la nota de la asignatura a calificar");
                nota = Number(nota);
                //Las validaciones ya las hace el metodo
                estudiante.agregar_calificacion(calificar, nota);
                console.log(`La calificación de ${nota} ha sido asignada a "${calificar}" para ${estudiante.nombre}.`);
                break;
            case 8:

                break;
            default:
                console.log("No se ha seleccionado la opcion correcta, vuelve a intentarlo");
                break;
        }


    } while (pregunta != 0);

} catch (error) {
    console.error(error.message);
}