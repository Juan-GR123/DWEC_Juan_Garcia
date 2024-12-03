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


try {
    const listaEstudiantes = new GestorEs();
    const listaAsignaturas = new GestorAs();
    let listaDirecciones = [];

    listaDirecciones.push(new Direccion("C/ Afán de Ribera", 15, "2ºA", 18005, "Granada", "Granada"));
    listaDirecciones.push(new Direccion("C/ Aliatar", 17, "Piso Bajo", 18110, "Granada", "Híjar"));
    listaDirecciones.push(new Direccion("C/ Canalejas", 5, "2ºB", 23790, "Jaén", "Porcuna"));
    listaDirecciones.push(new Direccion("C/ Paraguay", 1, "Piso Bajo", 18210, "Granada", "Peligros"));
    listaDirecciones.push(new Direccion("C/ Málaga", 23, "5ºC", 29770, "Málaga", "Torrox"));




} catch (error) {
    console.error(error.message);
}