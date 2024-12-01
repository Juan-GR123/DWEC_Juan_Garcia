//Todas las salidas serán por consola y todas las entradas por teclado
//promt y console.log

//Criterios de evaluacion
/*Los siguientes criterios son obligatorios. Si alguno no se cumple, no se puede obtener una
calificación de aprobado
• Código que, evidentemente, resuelva el problema.
• Uso de clases, herencia, encapsulación y sobrecarga.
• Uso de Objetos y métodos predefinidos del lenguaje, siempre que existan.
• Código limpio, nomenclatura coherente, nombres de variables y métodos intuitivos y bien
elegidos, eficiente y comentado.
• Inclusión de un conjunto de pruebas que demuestren el funcionamiento de la funcionalidad.
• Defensa del código, sin duda ni vacilación. Posible modificación de código en la defensa
para realizar alguna tarea sencilla. */



//Estudiantes
/*Cada estudiante debe tener un id, nombre, edad y dirección, compuesta de calle, número,
piso, código postal, provincia y localidad. El nombre debe contener sólo letras y espacios.
• Se debe permitir agregar y eliminar estudiantes de la lista. No debe haber duplicados
• Se debe permitir matricular y desmatricular estudiantes en una o varias asignaturas.
• Se debe registrar la fecha de matrícula o desmatriculación y se debe poder mostrar en
formato español.
• Cada estudiante puede recibir varias calificaciones por asignatura. Éstas deben ser números
enteros entre 0 y 10.
• Se debe calcular el promedio de todas las calificaciones del estudiante.
• Se debe permitir la búsqueda de asignaturas cuyo nombre coincida parcialmente con un
patrón de texto. */

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
    #asignaturas;
    #registros;

    static #numeros_ocupados = [];//servira para almacenar en el constructor la id de cada estudiante

    constructor(N_id, N_nombre, N_edad, N_direc) {
        let patron = /^[a-zA-ZáéíóúüÁÉÍÓÚÜ ]+$/;//que contenga letras y espacios 1 o mas veces
        if (!patron.test(N_nombre)) {
            throw new Error("Error solo pueden mostrase espacios o letras");
        } else {
            this.#nombre = N_nombre;
        }

        let ID = 1;

        while (Estudiantes.#numeros_ocupados.includes(ID)) {
            ID++;
        }
        Estudiantes.#numeros_ocupados.push(ID);
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

    //registrar la fecha de matriculacion o desmatriculacion
    get registros() {
        return this.#registros.map(registro => {
            const fechaFormateada = registro.fecha.toLocaleDateString('es-ES', {
                anio: 'numeric',
                mes: 'long',
                dia: 'numeric',
                finde: 'long'
            });
            return `${registro.tipo}: ${fechaFormateada}`;
        });
    }


    //mostramos por pantalla el id del estudiante y su nombre y edad
    get String() {
        return this.#id + ": " + this.#nombre + ", " + this.#edad;
    }

    matricular(asignatura) {
        if (!this.#asignaturas.includes(asignatura)) {
            this.#asignaturas.push(asignatura);
            this.#registros.push({ tipo: 'Matrícula', fecha: new Date() });
        } else {
            throw new Error(`El estudiante ya está matriculado en ${asignatura}`);
        }
    }

    desmatricular(asignatura) {
        const index = this.#asignaturas.indexOf(asignatura);
        if (index !== -1) {
            this.#asignaturas.splice(index, 1);
            this.#registros.push({ tipo: 'Desmatriculación', fecha: new Date() });
        } else {
            throw new Error(`El estudiante no está matriculado en ${asignatura}`);
        }
    }

    agregar_calificacion(asignatura, nota) {

    }

    promedio() {

    }
}




class GestorEst {
    #listas;


    constructor(...estudiantes) {

    }
}


class Asignaturas {

}


class GestorAs {

}

let estudiante = new Estudiantes(1, "Juan Pérez", 20, { calle: "Calle Falsa", numero: 123 });

estudiante.matricular("Matemáticas");
console.log(estudiante.registros);

setTimeout(() => {
    estudiante.desmatricular("Matemáticas");
    console.log(estudiante.registros);
}, 1000);



