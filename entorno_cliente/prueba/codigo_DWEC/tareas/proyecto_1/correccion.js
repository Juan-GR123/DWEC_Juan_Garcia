//Este proyexto esta disponible en mi github
//El enlace es: https://github.com/Virtual-Truck/git_cliente/blob/main/entorno_cliente/prueba/codigo_DWEC/tareas/proyecto_1/correccion.js


//Todas las salidas serán por consola y todas las entradas por teclado
//promt y console.log

//Creamos una clase para saber la direccion de cada estudiante
/*
La clase Direccion tendrá los siguiente Atributos:
#calle: Indicará la calle en la que pertenece
#numero: Indicará el número de calle
#piso: Indicará el número de piso 
#codigo_postal: Indicará el codigo postal (5 números, ni mas ni menos) 
#provincia: Indicará la provincia
#localidad: Indicará la localidad de dicha provincia

Por último, contará con un constructor el cual se encargará de que el codigo postal solo contenga 
5 digitos y los getters de cada uno de sus atributos. También se contará con el metodo ToString() para 
mostrar todos los atributos por pantalla
*/
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
/*
La clase Estudiantes contará con los siguiente atributos:
#id: El id se asignará automaticamente sin la necesidad de que el usuario lo introduzca

#nombre: El nombre indicará el nombre del estudiante

#edad: La edad indicará la edad del estudiante

#direccion: El atributo dirección contará con todos los valores de la clase dirección ya que se le pasará
como parametro un objeto de esa clase

#asignaturas: El atributo asignaturas será un array asociativo el cual contará por cada
elemento con dos valores, nombre de asignatura y nota de asignatura.

#registros: El atributo registros también será un array asociativo el cual contará por cada elemento
con tres valores, nombre de la asignatura, tipo de registro (matriculación/desmatriculación) y 
fecha de matriculación/desmatriculación

Esta clase contará con un constructor el cual se encargará de que el nombre contenga solo letras y 
espacios y de asignar los valores introducidos por el usuario a sus atributos correspondientes.

También se dispondran de los getters necesarios en caso de necesitar un atributo en concreto y de los
siguiente metodos:

    ToString(): Se mostrará por pantalla el id del estudiante y su nombre y edad

    matricular(asignatura): 
    En el método matricular, se introducirá un nombre de una asignatura indicada
    por el usuario. Si en el array #asignaturas se encuentra alguna coincidencia en el nombre con la 
    asignatura indicada esto dará un error debido a que en caso de estar en el array #asignaturas
    el estudiante ya estaría matriculado en esa asignatura.

    En caso de no estar se haria un objeto con los atributos nombre y nota y se guardarian en el array
    #asignaturas y además se crearía un registro de la fecha de matriculación de esa asignatura y se 
    guardaría en el array #registros

    desmatricular(asignatura): 
    En el método desmatricular, se introducirá de nuevo como valor el nombre de una asignatura indicada
    por el usuario y si se encuentra el indice de la coincidencia del nombre 
    de esa asignatura en el array #asignaturas entonces se eliminará la asignatura del array con el método
    splice() (el cual cambia el contenido de un array eliminando elementos existentes) y se añadirá un 
    registro de la desmatriculacion de esa asignatura.

    agregar_calificacion(asignatura,nota): 
    Es este método se introducirá como parametros un objeto de la clase Asignatura y una nota que se 
    quiera dar a esa asignatura para el estudiante.

    Si la nota es mayor que 10 o menor que 0 o si no es del tipo 'number' entonces se lanzará un error.

    En caso de cumplirse las condiciones anteriores se buscará en el array asignaturas una asignatura
    con el nombre de la asignatura introducida y en caso de encontrarse se le asignará a la asignatura del 
    array asignaturas la nota introducida por el usuario

    asig_mostrar():
    En este método se mostrarán por consola las asignaturas y sus notas del estudiante

    promedio():
    Calculará el promedio de todas las calificaciones del estudiante.

    En este método se contará si el array #asignaturas contiene asignaturas. En el caso de que las contenga
    y de que su longitud sea mayor que 0 entonces se recorrerá la totalidad del array y si las notas de 
    las asignaturas son numericas se sumarán esas notas a una variable en la que se almacenará la suma
    de todas las notas de cada asignatura.

    Por ultimo la suma de todas las asignaturas se dividirá por el número de notas que se hayan sumado


*/
class Estudiantes {

    #id;
    #nombre;
    #edad;
    #direccion;//Tendra {calle,numero,posp,codigo postal,provincia y localidad}
    #asignaturas;//{nombre: , nota: }
    #registros;//{nombre: , tipo: , fecha:}

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
        this.#direccion = N_direc;//N_direc será una clase direccion con todos sus valores
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
                nombre: asignatura.nombre,//Crea el campo `nombre` con el valor nombre de la asignatura
                tipo: 'Matrícula', // Crea el campo `tipo` con el valor "Matrícula"
                fecha: new Date() // Crea el campo `fecha` con la fecha y hora actual
            });
        }
    }


    desmatricular(asignatura) {
        const indice = this.#asignaturas.findIndex(asig => asig.nombre.toLowerCase() === asignatura.nombre.toLowerCase());//buscamos en el array una asignatura con el mismo nombre
        if (indice !== -1) {//si no es valor negativo la asignatura existe ya que se encuentra en alguna posicion del array
            let nombre = asignatura.nombre;
            this.#asignaturas.splice(indice, 1);// Elimina la asignatura de la lista
            this.#registros.push({
                nombre: nombre,//Crea el campo `nombre` con el valor nombre de la asignatura
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

            return `${registro.nombre} - ${registro.tipo}: ${fecha}`;
        });
    }

    //cambiar la nota de calificacion si existe esta asignatura
    agregar_calificacion(asignatura, nota) {
        // Validar que la nota sea un número válido
        if (typeof nota != 'number' || nota < 0 || nota > 10) {
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

    asig_mostrar() {
        console.log(this.#asignaturas);
    }
    // Calcula el promedio de todas las calificaciones del estudiante.
    promedio() {
        if (this.#asignaturas.length === 0) {
            return "No tiene asignaturas matriculadas";
        }
        let promedioF = 0;
        let contadorNotas = 0;
        for (let asig of this.#asignaturas) {
            if (typeof asig.nota === 'number') {
                promedioF += asig.nota;
                contadorNotas++;
            }
        }
        if (contadorNotas === 0) {
            return 0; // Evitar dividir entre 0 si no hay notas válidas. Si no se hace da NaN
        }

        return Number((promedioF / contadorNotas).toFixed(2)); // Redondea a 2 decimales.

    }

}


/*
La clase Asignaturas contará con los siguiente atributos:
nombre: Será el nombre de la asignatura
(No lo hago privado para que pueda ser utilizado por metodos de la clase estudiante)

#calificaciones: Calificaciones será un array que contenga las calificaciones que se le irán añadiendo a
una asignatura concreta.

Aparte del contructor que se ocupara de que el nombre solo contenga letras, numeros romanos y espacios
tambien se contará con los getters de nombre y de calificaciones y con los siguientes metodos:

    ToString(): 
    Se mostrará por pantalla el nombre de la asignatura

    agregar_calificacion(nota):
    En este método se introducirá una nota que se le quiera añadir a una asignatura. Si la nota esta entre
    0 y 10 entonces se añadira al array #calificaciones. 

    Si no cumple con esas condiciones se mostrará un error.

    eliminar_calificacion(indice):
    En este método se introducirá un número que indicará la posicion de la nota que se quierá eliminar.
    
    Si el número es menor que 0 o es mayor que la longitud del array calificaciones entonces se lanzará
    un error.

    En otro caso se eliminará la calificación con el método splice()

    mostrar():
    Este método recorrera todo el array #calificaciones y mostrará la posición en el array de las calificaciones
    y sus valores

    calcular_promedio():
    Si el array no tiene longitud lanza un error. 

    En otro caso se recorre todo el array #calificaciones y se van sumando todas las calificaciones
    que el estudiante ha ido sacando en la asignatura.

    Por último, se dividirá la suma de todas las calificaciones por la longitud del array de calificaciones
    que serán el número de notas de la asignatura.

*/
class Asignaturas {
    nombre;
    #calificaciones;//[[10],[9]]
    constructor(nombre1) {
        let patron = /^[a-zA-ZáéíóúüÁÉÍÓÚÜ ]+$/;//que contenga letras y espacios 1 o mas veces
        if (!patron.test(nombre1)) {
            throw new Error("Error solo pueden mostrase espacios o letras");
        } else {
            this.nombre = nombre1;
        }

        this.#calificaciones = [];
    }

    get nombre_A() {
        return this.nombre;
    }

    get calificaciones() {
        return [...this.#calificaciones];
    }

    ToString() {
        return `Asignatura: ${this.nombre}`;
    }



    //agrega la calificación a la asignatura elegida
    agregar_calificacion(nota) {
        if ((nota >= 0 && nota <= 10)) {
            this.#calificaciones.push(nota);
        } else {
            throw new Error("La nota " + nota + " no es valida");
        }
    }

    //Eliminar la calificación de la posición elegida 
    eliminar_calificacion(indice) {
        if (indice < 0 || indice >= this.#calificaciones.length) {
            throw new Error("Índice fuera de rango.");
        }
        this.#calificaciones.splice(indice, 1);//splice es para eliminar o reemplazar un numero especifico de elementos en una posicion concreta. 
        //ejemplo: splice(posicion,numero_de_eliminaciones)
    }


    mostrar() {//creamos este metodo para saber el indice de cada nota
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
        return Number(suma.toFixed(2));//toFixed es para que solo muestre un numero determinado de decimales
    }

}

/*
La clase Gestores contará con los siguiente atributos:

_gestor: 
Será un array de objetos instanciados como clases-
Ha sido creado como un atributo protegido para que las subclases tambien puedan acceder a él.

Además del costructor que se encargará de instanciar el array _gestores se contará en esta clase con
un getter de gestor y con los metodos:

    ToString():
    Devolvera la longitud del array _gestores
*/

class Gestores {
    _gestor;

    constructor() {
        this._gestor = [];
    }

    get gestor() {
        return [...this._gestor];
    }

    ToString() {
        return `Lista con ${this._gestor.length} elementos.`;
    }

}



/*
    La clase GestorEs es una subclase de Gestores y contará con los mismo atributos que la clase de la
    que hereda, en este caso, Gestores.

    Sin embargo, su costructor será diferente ya que ademas de heredar los atributos de su clase madre
    con super() tambien se recorrerá todo el array y se realizará el método agregar_estudiante con 
    todos los elementos del array _gestor para que se puedan guardan en el array los estudiantes 
    automaticamente y no se tengan que estar agregando al array uno por uno

    Sin este método en el constructor no se podrían añadir estudiantes al inicializar la clase.

    Además del constructor, también se contará en la clase GestorEs con los siguientes metodos:

    agregar_estudiante():

    eliminar_estudiante():

    listar_estudiantes():

    listar_informes():

    obtener_estudiante():

    obtener_nombre_estudiante():

    promedio_listas():
    
*/

class GestorEs extends Gestores {


    constructor(...elementos) {
        super();

        for (let estudiante of elementos) {

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

    listar_informes() {
        for (let informe of this._gestor) {
            console.log(informe.ToString());

            console.log("Direccion:");
            console.log("Calle: " + informe.direccion.calle);
            console.log("Número: " + informe.direccion.numero);
            console.log("Piso: " + informe.direccion.piso);
            console.log("Código Postal: " + informe.direccion.codigoPostal);
            console.log("Provincia: " + informe.direccion.provincia);
            console.log("Localidad: " + informe.direccion.localidad);

            console.log("Asignaturas");
            console.log(informe.asignaturas);

            console.log("Fechas de matriculacion y desmatriculacion");
            console.log(informe.registros);

            console.log("Promedio del estudiante");
            console.log(informe.promedio());//arreglar
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
    obtener_nombre_estudiante(nombre) {
        let obtener = this._gestor.filter(elemento => elemento.nombre.toLowerCase().includes(nombre.toLowerCase()));
        //includes: Se usa para verificar si el nombre parcial está contenido en el nombre completo del estudiante.
        //filter() devuelve un array con todos los estudiantes que coincidan. Se podria haber utilizado find pero ese metodo solo devuelve un valor
        if (obtener) {
            return obtener.forEach(elemento => {
                console.log(elemento.ToString());
            });

        } else {
            throw new Error(`No se encontro ningún estudiante con el nombre ${nombre}`);
        }
    }

    //Hacer un promedio del promedio de todos los estudiantes
    promedio_listas() {
        if (this._gestor.length === 0) {
            console.log("No hay estudiantes en la lista para calcular el promedio.");
            return;
        }
        let sumaPromedios = 0;
        let contador_Estudiantes = 0;

        for (let estudiante of this._gestor) {
            let promedio_E = estudiante.promedio();//El promedio devuelve la media de cada estudiante

            if (typeof promedio_E === "number") {//SI no son tipo number entonces significa que no estarán todavia calificados y por eso no se añaden en el calculo

                sumaPromedios += promedio_E;
                contador_Estudiantes++;
            }
        }
        if (contador_Estudiantes === 0) {
            throw new Error("Ningún estudiante tiene promedios válidos para calcular.");
        }

        let promedioGeneral = (sumaPromedios / contador_Estudiantes).toFixed(2);
        return Number(promedioGeneral);
    }

    ToString() {//sobrecarga
        return `Lista con ${this._gestor.length} estudiantes.`;
    }

}


/*
    La clase GestorAs es una subclase de Gestores y contará con los mismo atributos que la clase de la
    que hereda, en este caso, Gestores.

    Sin embargo, su costructor será diferente ya que ademas de heredar los atributos de su clase madre
    con super() tambien se recorrerá todo el array y se realizará el método agregar_asignatura con 
    todos los elementos del array _gestor para que se puedan guardan en el array las asignaturas 
    automáticamente y no se tengan que estar agragando al array uno por uno.

    Sin este método en el constructor no se podrían añadir asignaturas al inicializar la clase.

    Además del constructor, también se contará en la clase GestorAs con los siguientes metodos:


*/

class GestorAs extends Gestores {


    constructor(...elementos) {
        super();

        for (let asignatura of elementos) {

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
        let eliminar = this._gestor.findIndex(elemento => elemento.nombre.toLowerCase() === nombre.toLowerCase());
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

    obtener_asignatura(nombre) {//para que solo te devuelva una asignatura en concreto. Tiene que ser su nombre completo para que no haya errores. Esto es para metodos en concreto
        let obtener = this._gestor.find(elemento => elemento.nombre.toLowerCase() === nombre.toLowerCase());
        if (obtener) {//si encuentra algun valor
            return obtener;
        } else {
            throw new Error(`No se encontró ningúna asignatura con nombre ${nombre}.`);
        }

    }

    obtener_muchas_asignaturas(nombre) {//te devuleve muchos resultados dependiendo de lo que le introduzcas
        let obtener_As = this._gestor.filter(elemento => elemento.nombre.toLowerCase().includes(nombre.toLowerCase()));
        //includes: Se usa para verificar si el nombre parcial está contenido en el nombre completo del estudiante.
        //filter() devuelve un array con todos los estudiantes que coincidan. Se podria haber utilizado find pero ese metodo solo devuelve un valor
        if (obtener_As) {
            return obtener_As.forEach(elemento => {
                console.log("La asignatura encontrada es " + elemento.ToString());
            });
        } else {
            throw new Error(`No se encontro ningún estudiante con el nombre ${nombre}`);
        }
    }

    ToString() {//sobrecarga
        return `Lista con ${this._gestor.length} Asignaturas`;
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
        console.log("4 - Desmatricular estudiante");
        console.log("5 - Eliminar estudiante de la lista");
        console.log("6 - Eliminar asignatura de la lista");
        console.log("7 - Calificar asignaturas y estudiantes");
        console.log("8 - Promedio de un estudiante");
        console.log("9 - Promedio de todos los estudiantes");
        console.log("10 - Fechas de matriculacion");
        console.log("11 - Buscar");//buscar estudiantes o asignaturas por coincidencia parcial
        console.log("12 - Mostrar reporte");/* Muestra el reporte de todos los estudiantes y su información, tanto datos personales (nombre, edad y dirección) como calificaciones (asignaturas y promedio).*/
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
                    throw new Error("Los datos no se han introducido correctamente, vuelve a intentarlo");
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

                if (typeof asignatura != "string" || asignatura.trim() === "") {
                    throw new Error("Error: La asignatura no es valida");
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
                encontrarE.asignaturas.forEach((elemento, clave) => {//numero de asignaturas en las que esta matriculado el estudiante
                    console.log(`${clave}. ${elemento.nombre}`);
                });
                break;

            case 4:
                listaEstudiantes.listar_estudiantes();
                let id2 = prompt("Dime la id del estudiante que quieras desmatricular");

                id2 = Number(id2);
                //Buscamos el id del estudiante en el array que hemos creado de estudiantes
                let estu_des = listaEstudiantes.obtener_estudiante(id2);

                estu_des.asignaturas.forEach((elemento, clave) => {//muestro las asignaturas en las que esta matriculado el estudiante
                    console.log(`${clave}. ${elemento.nombre}`);
                });
                let asig_estu = prompt("Ahora dime la asignatura de la cual quieres desmatricular al estudiante");
                let asig_des = listaAsignaturas.obtener_asignatura(asig_estu);

                estu_des.desmatricular(asig_des);
                console.log(`${estu_des.nombre} ha sido desmatriculado en ${asig_des.nombre} con éxito.`);

                estu_des.asignaturas.forEach((elemento, clave) => {
                    console.log(`${clave}. ${elemento.nombre}`);
                });
                break;
            case 5:
                listaEstudiantes.listar_estudiantes();
                let elim_estu = prompt("Dime el id del estudiante que quieras eliminar");
                elim_estu = Number(elim_estu);

                if (isNaN(elim_estu) || elim_estu <= 0) {
                    throw new Error("El ID debe ser un número positivo.");
                    break;
                }

                let obtener_E = listaEstudiantes.obtener_estudiante(elim_estu);//Comprobamos que el estudiante existe

                listaEstudiantes.eliminar_estudiante(elim_estu);//si el estudiante existe, entonces se elimina indicando su id

                console.log(`El estudiante con ID ${elim_estu} ha sido eliminado correctamente.`);
                listaEstudiantes.listar_estudiantes();

                break;

            case 6:
                listaAsignaturas.listar_asignaturas();//muestra las asignaturas antes de eliminarlas

                let elim_asig = prompt("Dime el nombre de la asignatura que quieres eliminar");

                if (typeof elim_asig != "string" || elim_asig.trim() === "") {
                    throw new Error("Error: La asignatura no es valida");
                    break;
                }


                listaAsignaturas.eliminar_asignatura(elim_asig);

                console.log(`La asignatura ha sido eliminada correctamente.`);
                listaAsignaturas.listar_asignaturas();
                break;
            /*
        En el caso 7 se califican las asignaturas con las notas que un estudiante haya estado sacando y al final de todo se hace el promedio
        de esas notas y se le asigna a esa asignatura.
        Despues se pide indicar el estudiante al que se le asignara ese promedio de notas como su calificacion en esa asignatura
        */
            case 7:
                //se califican asignaturas y el promedio de esas notas seran la nota final del estudiantes
                let nombre_asig = prompt("Introduce el nombre de la asignatura que desees calificar");
                let asignatura_N = listaAsignaturas.obtener_asignatura(nombre_asig);

                let continuar = "";
                let nota = 0;
                do {
                    nota = prompt("Introduce la nota de la asignatura a calificar");
                    nota = Number(nota);
                    asignatura_N.agregar_calificacion(nota);
                    continuar = prompt("Quieres seguir agregando calificaciones a la asignatura? si/no");
                    //Las validaciones ya las hace el metodo
                } while (continuar.toLowerCase() != "no");

                console.log("calculamos el promedio de las calificaciones de la asignatura elegida");
                let nota_promedio_calificaciones = asignatura_N.calcular_promedio();


                // Listar estudiantes disponibles
                listaEstudiantes.listar_estudiantes();
                let id_Estudiante = prompt("Ahora, introduce el ID del estudiante que deseas calificar con el promedio de esas calificaciones:");
                id_Estudiante = Number(id_Estudiante);
                let estudiante = listaEstudiantes.obtener_estudiante(id_Estudiante);

                console.log(`Asignaturas en las que está matriculado ${estudiante.nombre}`);
                estudiante.asignaturas.forEach((elemento, clave) => {
                    console.log(`${clave}. ${elemento.nombre}`);
                });

                console.log(`El promedio ${nota_promedio_calificaciones} de la asignatura ${asignatura_N.nombre} será asignado al estudiante ${estudiante.nombre}`);
                estudiante.agregar_calificacion(asignatura_N, nota_promedio_calificaciones);



                //ahora eliminaremos las calificaciones que se han añadido a la asignatura elegida para que si se vuelve a este caso para añadir notas a
                //la misma asignatura las notas de este estudiante no se interpongan las 
                //notas del nuevo estudiante
                for (let i = 0; i < asignatura_N.calificaciones.length; i++) {
                    asignatura_N.eliminar_calificacion(i);
                }

                console.log("Operación exitosa");


                break;
            //Se hace el promedio de las calificaciones de un estudiante
            case 8:
                // Listar estudiantes disponibles
                listaEstudiantes.listar_estudiantes();
                let promedio_Es = prompt("Introduce el ID del estudiante del cual deseas hacer su promedio: ");
                promedio_Es = Number(promedio_Es);
                let obtener_promedio = listaEstudiantes.obtener_estudiante(promedio_Es);

                console.log("Ahora calcularemos el promedio de todas las notas del estudiante elegido");
                console.log(obtener_promedio.asignaturas);//se muestran las asignaturas con sus notas
                let promedio = obtener_promedio.promedio();//se calcula el promedio

                console.log(`El promedio de notas del estudiante ${obtener_promedio.nombre} es ${promedio}`);

                break;
            case 9:
                listaEstudiantes.gestor.forEach(elemento => {
                    console.log(`Estudiante: ${elemento.nombre}, Promedio: ${elemento.promedio()}, Asignaturas: ${elemento.asig_mostrar()}`);
                });

                console.log("Ahora se calculara el promedio de notas de todos los estudiantes");

                let promedio_total = listaEstudiantes.promedio_listas();

                console.log(`El promedio de todos los estudiantes será ${promedio_total}`);

                break;
            case 10:
                listaEstudiantes.listar_estudiantes();
                let F_matricula = prompt("Dime el ID del estudiante del que quieras saber su fecha de matriculacion y fecha de desmatriculacion de sus asignaturas hasta el momento");
                F_matricula = Number(F_matricula);

                if (isNaN(F_matricula) || F_matricula <= 0) {
                    throw new Error("El ID debe ser un número positivo.");
                    break;
                }
                let estudiante_fecha = listaEstudiantes.obtener_estudiante(F_matricula);

                console.log("Las asignaturas de las que se ha matriculado y desmatriculado hasta el momento son: ");
                console.log(estudiante_fecha.registros);
                break;

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
            case 12:
                listaEstudiantes.listar_informes();
                break;
            default:
                console.log("No se ha seleccionado la opcion correcta, vuelve a intentarlo");
                break;
        }


    } while (pregunta != 0);

} catch (error) {
    console.error(error.message);
}