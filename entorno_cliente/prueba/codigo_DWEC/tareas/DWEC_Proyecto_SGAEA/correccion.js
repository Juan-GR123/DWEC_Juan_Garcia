//Este proyecto esta disponible en mi github
//El enlace es: https://github.com/Virtual-Truck/git_cliente/blob/main/entorno_cliente/prueba/codigo_DWEC/tareas/DWEC_Proyecto_SGAEA/correccion.js


//Todas las salidas serán por consola y todas las entradas por teclado
//promt y console.log

//Creamos una clase para saber la dirección de cada estudiante
/*
La clase Direccion tendrá los siguiente Atributos:
#calle: Indicará la calle en la que pertenece
#numero: Indicará el número de calle
#piso: Indicará el número de piso 
#codigo_postal: Indicará el codigo postal (5 números, ni mas ni menos) 
#provincia: Indicará la provincia
#localidad: Indicará la localidad de dicha provincia

Por último, contará con un constructor el cual se encargará de incializar los valores y de
que el código postal solo contenga 5 digitos y los getters de cada uno de sus atributos en caso de que
se les necesite en algun momento.

También se contará con el método toString() para mostrar todos los atributos por pantalla.
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

    toString() {
        return this.#calle + " " + this.#numero + " " + this.#piso + "  " + this.#codigo_postal + " " + this.#localidad + " " + this.#provincia + " ";
    }


}



//Hacemos una clase que representará a los estudiantes
/*
La clase Estudiantes contará con los siguiente atributos:
#id: El id se asignará automáticamente sin la necesidad de que el usuario lo introduzca

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

    toString(): Se mostrará por pantalla el id del estudiante y su nombre y edad

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

    static numeros = [];//Es estatico ya que servirá para almacenar en el constructor la id de cada estudiante

    constructor(N_nombre, N_edad, N_direc) {
        let patron = /^[a-zA-ZáéíóúüÁÉÍÓÚÜ ]+$/;//que contenga letras y espacios 1 o mas veces
        if (!patron.test(N_nombre)) {
            throw new Error("Error solo pueden mostrase espacios o letras");
        } else {
            this.#nombre = N_nombre;
        }

        let ID = 1;//inicializamos el id a 1

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

    //devolverá un array de cada asignatura
    get asignaturas() {
        return [...this.#asignaturas];
    }



    //mostramos por pantalla el id del estudiante y su nombre y edad
    toString() {
        return `${this.#id}: ${this.#nombre},  ${this.#edad}`;
    }

    matricular(asignatura) {//introduces un objeto de la clase asignatura como parametro
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
            this.#asignaturas.splice(indice, 1);// Elimina la asignatura de la lista ej:splice(lugar_de_eliminacion,numero_de_elemento_a_eliminar)
            this.#registros.push({
                nombre: nombre,//Crea el campo `nombre` con el valor nombre de la asignatura
                tipo: 'Desmatriculación', // Crea el campo `tipo` con el valor "Desmatriculación"
                fecha: new Date()
            }); // Crea el campo `fecha` con la fecha y hora actual
        } else {
            throw new Error(`El estudiante no está matriculado en ${asignatura.nombre.toLowerCase()}`);
        }
    }


    //registrar la fecha de matriculación o desmatriculación

    get registros() {
        const resultado = []; // Creamos una variable resultado que funcionará como un array vacío para almacenar los resultados
        this.#registros.forEach(registro => { // Recorremos el array registros con forEach
            const fecha = registro.fecha.toLocaleDateString('es-ES'); //convertimos la fecha que le hemos introducido a registros en la matriculacion y desmatriculacion en el horario español
            resultado.push(`${registro.nombre} - ${registro.tipo}: ${fecha}`); // Agregamos el resultado al array creado anteriormente
        });
        return resultado; // Retornamos el array con los valores transformados
    }

    //cambiar la nota de calificacion si existe esta asignatura
    agregar_calificacion(asignatura, nota) {
        // Validar que la nota sea un número válido
        if (typeof nota != 'number' || nota < 0 || nota > 10) {
            throw new Error('La nota debe ser un número entre 0 y 10.');
        }

        const asignaturaEncontrada = this.#asignaturas.find(asig => asig.nombre.toLowerCase() === asignatura.nombre.toLowerCase());
          //console.log(asignaturaEncontrada); devuelve un objeto {nombre:, nota:}
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
        let promedioF = 0;//se crean dos variables
        let contadorNotas = 0;
        for (let asig of this.#asignaturas) {//se recorre el array asignaturas
            if (typeof asig.nota === 'number') {
                promedioF += asig.nota;// si la nota es de tipo número se suma la nota de promedioF por la nueva nota para ir acumulando la suma de notas
                contadorNotas++;
            }
        }
        if (contadorNotas === 0) {
            return 0; // Evitar dividir entre 0 si no hay notas válidas. Si no se hace da NaN
        }

        return Number((promedioF / contadorNotas).toFixed(2)); // toFixed(2): Redondea a 2 decimales.
        //se devuelve la suma de notas dividido entre el numero de notas
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

    toString(): 
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
            this.nombre = nombre1;//se inicializa
        }

        this.#calificaciones = [];
    }

    get nombre_A() {
        return this.nombre;
    }

    get calificaciones() {
        return [...this.#calificaciones];
    }

    toString() {
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

    toString():
    Devolverá la longitud del array _gestor
*/

class Gestores {
    _gestor;

    constructor() {
        this._gestor = [];
    }

    get gestor() {
        return [...this._gestor];
    }

    toString() {
        return `Lista con ${this._gestor.length} elementos.`;
    }

}



/*
    La clase GestorEs es una subclase de Gestores y contará con los mismo atributos que la clase de la
    que hereda, en este caso, Gestores.

    Sin embargo, su costructor será diferente ya que ademas de heredar los atributos de su clase madre
    con super() tambien se recorrerá todo el array y se realizará el método agregar_estudiante con 
    todos los elementos del array _gestor para que se puedan guardan en el array los estudiantes 
    automáticamente y no se tengan que estar agregando al array uno por uno

    Sin este método en el constructor no se podrían añadir estudiantes al inicializar la clase.

    Además del constructor, también se contará en la clase GestorEs con los siguientes métodos:

    agregar_estudiante(estudiante):
        Con este método se agregará un objeto de la clase estudiante a la lista introduciendolo como valor.

        Antes de agregar al estudiante se buscará en la lista un estudiante con el mismo id que el que 
        se quiere agregar y en caso de existir lanzará un error indicando que el estudiante ya ha sido agregado
        anteriormente a la lista.

        Si no existiese se agregaría a la lista con el metodo push, introduciendo el elemento en la última
        posición del array

    eliminar_estudiante(id):
        Este método eliminará a un estudiante de la lista mediante el id que se la haya introducido como 
        parametro.

        Se buscara la posición del array donde coincidan el id introducido con el id de un estudiante

        En caso de que el id introducido exista en la lista se cogerá el número de la posición 
        donde se encuentre el estudiante coincidente y se eliminará al estudiante que posea ese id mediante
        el metodo splice().

        En caso contrario, se lanzará un mensaje de error.

    listar_estudiantes():
        Se recorrerá todo el array _gestores y los elementos que posea, en este caso estudiantes,
        se mostrarán en pantalla mediante el metodo toString de la clase Estudiantes

    listar_informes():

        Este método generará un informe con la direccion de cada estudiante, 
        sus asignaturas junto a sus calificaciones, sus matriculaciones y sus
        promedios.

        Esto se conseguirá recorriendo todo el array _gestor y accediendo a los getters y metodos de 
        los objetos pertenecientes a la clase Estudiantes.

    obtener_estudiante(id):

        Este método tratará de buscar en el array _gestor a un estudiante mediante su id.

        Esto se conseguirá mediante el método find() y en caso de que devuelva algo se devolverá al 
        estudiante encontrado y en caso de que el método no devuelva nada entonces se lanzará un error.


    obtener_nombre_estudiante(nombre):

        Este método tendrá la misma función que el método obtener_estudiante(id) con la única diferencia de 
        que se buscará al estudiante por su nombre (aunque este se haya introducido solo parcialmente)
        en vez de por su id.

        Esto se conseguirá mediante el método filter() el cual filtrará los estudiantes cuyo nombre no
        posea el string introducido como parametro en el método.

        Si existiese algun elemento en el nuevo array creado después de utilizar el método filter entonces
        se recorrería el array y se mostrararía a los estudiante que coincidan con el nombre 
        introducido como parametro.

    promedio_listas():

        El método promedio_listas() tratará de hacer un promedio entre las notas de todos los estudiantes.

        Para hacer esto, se comprobará que el array _gestor contenga al menos un elemento y si ese es el 
        caso se recorrerá el array completo y se hara el promedio de todas las asignaturas de cada estudiante
        y ese promedio se irá sumando en una variable.

        Cuando se tenga la suma total de todos los promedios de cada estudiante entonces se dividirá 
        esta suma entre la cantidad de veces que se haya sumado a la variable, es decir, el numero
        de estudiantes existentes y entonces se obtendrá la media total de las notas de todos los estudiantes

    
    toString():
        El metodo toString servirá como una sobrecarga del metodo toString de la clase Gestores y este 
        mostrará la longitud del array _gestor pero indicando que la lista es una lista de estudiantes.

*/

class GestorEs extends Gestores {


    constructor(...elementos) {
        super();

        for (let estudiante of elementos) {

            this.agregar_estudiante(estudiante);//agregamos a los estudiantes necesarios para que se puedan
                                                //añadir automáticamente en el constructor

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
            console.log(persona.toString());//toString: método de estudiante
        }
    }

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
        //filter() devuelve un array con todos los estudiantes que coincidan. Se podría haber utilizado find pero ese metodo solo devuelve un valor
        if (obtener.length > 0) {
            return obtener.forEach(elemento => {
                console.log("El estudiante encontrado es " + elemento.toString());
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

    toString() {//sobrecarga
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

    Además del constructor, también se contará en la clase GestorAs con los siguientes métodos:

    agregar_asignatura(asignatura):

        Este método será el encargado de buscar dentro del array _gestor una coincidencia entre el nombre
        de la asignatura introducida como parametro y el nombre de alguna de las asignaturas contenidas en el
        array.

        Para realizar esta funcionalidad se utilizara el método find() para que devuelva una coincidencia
        (la primera) en caso de que existiese el nombre de la asignatura en el array y de ser ese el caso
        se lanzaría un error diciendo que la asignatura ya existe en la lista.

        Si no existiese se agregaría a la lista con el metodo push(), introduciendo el objeto de la
        clase asignatura en la última posición del array

    eliminar_asignatura(nombre):

        Este método eliminará a una asignatura de la lista mediante el nombre que se la haya introducido como 
        parametro.

        Se buscará la posición del array donde coincidan el nombre introducido con el nombre de una
        asignatura

        En caso de que el nombre introducido exista en la lista se cogerá el número de la posición 
        donde se encuentre la asignatura coincidente y se eliminará esa asignatura la cual posea el nombre
        correspondiente mediante el metodo splice().

        En caso contrario, se lanzará un mensaje de error.

    listar_asignaturas():

        Se recorrerá todo el array _gestores y los elementos que posea, en este caso asignaturas,
        se mostrarán en pantalla mediante el metodo toString de la clase Asignaturas, el cual
        mostrará el nombre de cada asignatura.

    obtener_asignatura(nombre):

        Este método tratará de buscar en el array _gestor a una asignatura mediante su nombre.

        Esto se conseguirá mediante el método find() y en caso de que devuelva algo será la 
        asignatura encontrada y en caso de que el método no devuelva nada entonces se lanzará un error.

    obtener_muchas_asignaturas(nombre):

        Este método tendrá la misma función que el método obtener_asignatura(nombre) 
        con la única diferencia de que se buscará la asignatura por su nombre parcial en vez de la necesidad
        de introducir el nombre exacto.

        Esto se conseguirá mediante el método filter() el cual filtrará las asignaturas cuyo nombre no
        posea el string introducido como parametro en el método.

        Si existiese algun elemento en el nuevo array creado después de utilizar el método filter entonces
        se recorrería el array y se mostrararían las asignaturas que coincidan con el nombre 
        introducido como parametro.

        Así este método, al contrario que el anterior, devolverá multiples resultados en vez de solamente
        una coincidencía.

    toString():
        El método toString servirá como una sobrecarga del metodo toString de la clase Gestores y este 
        mostrará la longitud del array _gestor pero indicando que la lista es una lista de asignaturas.


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
            console.log(asignatura.toString());
        }
    }

    obtener_asignatura(nombre) {//para que solo te devuelva una asignatura en concreto. 
        //Tiene que ser su nombre completo para que no haya errores. Esto es para métodos en concreto
        let obtener = this._gestor.find(elemento => elemento.nombre.toLowerCase() === nombre.toLowerCase());
        if (obtener) {//si encuentra algun valor
            return obtener;
        } else {
            throw new Error(`No se encontró ningúna asignatura con nombre ${nombre}.`);
        }

    }

    obtener_muchas_asignaturas(nombre) {//te devuleve muchos resultados dependiendo de lo que le introduzcas
        let obtener_As = this._gestor.filter(elemento => elemento.nombre.toLowerCase().includes(nombre.toLowerCase()));
        //includes: Se usa para verificar si el nombre parcial está contenido en el nombre completo de la asignatura.
        //filter() devuelve un array con todas las asignaturas que coincidan. Se podría haber utilizado find pero ese método solo devuelve un valor.
        if (obtener_As.length > 0) {
            return obtener_As.forEach(elemento => {
                console.log("La asignatura encontrada es " + elemento.toString());
            });
        } else {
            throw new Error(`No se encontro ningún estudiante con el nombre ${nombre}`);
        }
    }

    toString() {//sobrecarga
        return `Lista con ${this._gestor.length} Asignaturas`;
    }


}



//////////////////////////////////////

//Estos valores del principio se introducen para que ya haya valores en las listas y estas no estén vacias.
try {
    const listaEstudiantes = new GestorEs();//inicializamos un objeto de la clase GestorEs que actuará como un array de estudiantes
    const listaAsignaturas = new GestorAs();//inicializamos un objeto de la clase GestorAs que actuará como un array de asignaturas
    let listaDirecciones = [];//inicializamos un array para guardar las direcciones da cada estuadiante

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
    listaEstudiantes.gestor[2].agregar_calificacion(listaAsignaturas.gestor[1], 9.3);
    listaEstudiantes.gestor[2].agregar_calificacion(listaAsignaturas.gestor[3], 9);

    //console.log(listaAsignaturas.obtener_asignatura("Fisica"));

    let pregunta = 0;

    //Hacemos un do{}while() en el que si el valor es 0 salga del menu
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
            /*
            En caso de que el usuario quiera salir del menú entonces solo tendrá que marcar 0 en la consola para activar está opción
            */
            case 0:
                console.log("Adios");
                break;

            /*
            Este caso se encargará de la creación de un estudiante y de agregarlo a la listaEstudiantes
            gracias al método agregar_estudiante.

            Antes de agregar a un estudiante a la lista se comprobará si los valores introducidos por el usuario
            son validos y en caso de que sean validos se agregarán como un nuevo estudiante.

            En caso de no ser validos saltará un error por pantalla.
            */
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
                    //break;
                }

                let nuevaDireccion = new Direccion(calle, numero, piso, codigo_postal, provincia, localidad);

                let nuevoEstudiante = new Estudiantes(nombre, edad, nuevaDireccion);

                // Agregar el estudiante a la lista
                listaEstudiantes.agregar_estudiante(nuevoEstudiante);

                console.log("Estudiante creado y agregado con éxito:");
                listaEstudiantes.listar_estudiantes();


                break;

            /*
            Este caso se encargará de la creación de una Asignatura y de agregarla a la listaAsignaturas.

            En este caso también se validarán los valores antes de agregarlos y se utilizará el método
            trim() para eliminar cualquier espacio en blanco que se haya podido dejar en el nombre
            de asignatura introducido por el usuario.

            cuando el valor haya sido validado, se creará un objeto de la clase asignaturas con el
            nombre introducido como valor y se agregará a listaAsignaturas con el método agregar_asignatura

            En caso de que el valor introducido no fuese valido saltaría un error en consola.
            */
            case 2:
                let asignatura = prompt("Introduce el nombre de la asignatura:");

                if (typeof asignatura != "string" || asignatura.trim() === "") {
                    throw new Error("Error: La asignatura no es valida");
                    //break;
                }

                let N_asignatura = new Asignaturas(asignatura.trim());//nueva asignatura
                

                listaAsignaturas.agregar_asignatura(N_asignatura);

                console.log(`Asignatura ${asignatura} creada y agregada con éxito.`);
                listaAsignaturas.listar_asignaturas(); // Mostrar todas las asignaturas


                break;

            /*
            En este caso se matriculará a un estudiante mediante los métodos obtener_estudiante(id) y
            matricular(asignatura).

            Se le pedirá al usuario el id del estudiante que quiera matricular y el nombre de la asignatura
            en la cual quiera matricular al estudiante.

            Entonces se pasará el string con el id introducido a Number y se realizará el metodo
            matricular para que la asignatura introducida aparezca en el array de asignaturas del estudiante
            y que se registre así como una asignatura matriculada
            */
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

            /*
            En este caso se desmatriculará a un estudiante de una asignatura gracias a los métodos 
            obtener_estudiante(id) y desmatricular(asignatura).

            Se le pedirá al usuario el id del estudiante que quiera desmatricular y el nombre de la 
            asignatura en la cual quiera desmatricular al estudiante.

            Entonces se pasará el string con el id introducido a Number y se realizará el metodo
            desmatricular para que la asignatura introducida desaparezca del array de asignaturas 
            del estudiante y que se registre como desmatriculada en en array de registros.

            En caso de que el nombre de la asignatura no exista en el array de asignaturas dentro de
            estudiante se lanzará un error como hemos explicado en el metodo desmatricular
            */
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
            /*
            En el caso 5 se tratará de eliminar un estudiante de la listaEstudiantes.

            Esto se logrará gracias a los métodos listar_estudiantes() para mostrar antes y después que
            estudiantes están introducidos en la lista y  eliminar_estudiante(id) el cual se encargara
            de buscar un estudiante con el mismo id que el introducido en listaEstudiantes.
            
            Si lo encuentra lo eliminará de la lista y si no lo encuentra se lanzará un error por pantalla
            */
            case 5:
                listaEstudiantes.listar_estudiantes();
                let elim_estu = prompt("Dime el id del estudiante que quieras eliminar");
                elim_estu = Number(elim_estu);

                if (isNaN(elim_estu) || elim_estu <= 0) {
                    throw new Error("El ID debe ser un número positivo.");
                    //break;
                }

                //let obtener_E = listaEstudiantes.obtener_estudiante(elim_estu);

                listaEstudiantes.eliminar_estudiante(elim_estu);//si el estudiante existe, entonces se elimina indicando su id

                console.log(`El estudiante con ID ${elim_estu} ha sido eliminado correctamente.`);
                listaEstudiantes.listar_estudiantes();

                break;
            /*
            El caso 6 se encargará de eliminar una asignatura elegida por el usuario del array listaAsignaturas

            Este caso se conseguira con la ayuda de los métodos listar_asignaturas() para mostrar las 
            asignaturas de la lista antes y después de la eliminación y eliminar_asignatura(nombre)
            que si no encuentra ninguna coincidencia con el nombre de la asignatura introducido entonces
            se mostrará un error y si lo encuentra, eliminará esa asignatura de la listaAsignaturas
            */
            case 6:
                listaAsignaturas.listar_asignaturas();//muestra las asignaturas antes de eliminarlas

                let elim_asig = prompt("Dime el nombre de la asignatura que quieres eliminar");

                if (typeof elim_asig != "string" || elim_asig.trim() === "") {
                    throw new Error("Error: La asignatura no es valida");
                   //break;
                }


                listaAsignaturas.eliminar_asignatura(elim_asig);

                console.log(`La asignatura ha sido eliminada correctamente.`);
                listaAsignaturas.listar_asignaturas();
                break;
            /*
                En el caso 7 se califican las asignaturas con las notas que un estudiante haya estado 
                sacando con el método agregar_calificacion(nota) de la clase Asignaturas y al final de todo 
                se hace el promedio de esas notas con el método calcular_promedio() 
                y se le asigna ese promedio a la asignatura con esas notas.

                Después se pide indicar el id del estudiante al que se le asignará ese promedio de notas
                como su calificacion en esa asignatura.

                Ese estudiante se encontrará con el método obtener_estudiante(id) y una vez encontrado
                se le asignará ese promedio de la asignatura como su nota final de esa asignatura elegida
                con el método agregar_calificacion(asignatura,nota) de la clase estudiantes.

                Por último, una vez añadido el promedio de la asignatura a un estudiante, se eliminarán las 
                notas introducidas a esa asignatura para que en caso de que se quieran añadir notas para un 
                nuevo estudiante de la misma asignatura, las notas del anterior estudiante no influyan en el
                promedio del nuevo estudiante.
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
            /*
            En el caso 8 se hará el promedio entre todas las calificaciones de un estudiante.

            Este promedio se logrará con los métodos obtener_estudiante(id) para encontrar a un estudiante
            en concreto al que hacer su promedio y una vez encontrado se utilizará el método promedio()
            de la clase Estudiantes explicado anteriormente el cual se encargará de sumar todas las notas
            del estudiante y dividirlas por el numero de notas en las que este matriculado.

            Por último, se mostrará la media de todas las calificaciones del estudiante elegido y el nombre
            de dicho estudiante por pantalla.
            
            */
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

            /*
            En el caso 9 se mostrará el promedio de todas las notas de todos los estudiante en conjunto.
            
            Esto se logrará con el método promedio_lista(), el cual se encargará de recorrer todo el 
            array de _gestor y hacer el promedio de todos los estudiantes de listaEstidiantes 
            para luego ir sumandolos dentro de una variable y dividir ese total por el número de 
            veces que se han ido sumando las notas para que asi de el promedio total entre todos los 
            estudiantes de listaEstudiantes.
            */
            case 9:
                listaEstudiantes.gestor.forEach(elemento => {
                    console.log(`Estudiante: ${elemento.nombre}, Promedio: ${elemento.promedio()}, Asignaturas: ${elemento.asig_mostrar()}`);
                });

                console.log("Ahora se calculará el promedio de notas de todos los estudiantes");

                let promedio_total = listaEstudiantes.promedio_listas();

                console.log(`El promedio de todos los estudiantes será ${promedio_total}`);

                break;

            /*
            En el caso 10 se mostrarán las fechas de matriculación y desmatriculación de un estudiante
            que se busque.

            Esto se realizará con los métodos listar_estudiantes() para mostrar todos los estudiantes
            a elegir dentro de listaEstudaintes, obtener_estudiante(id) para que se devuelva un estudiante
            concreto del que mostrar sus registros y por ultimo el getter de registros de la clase estudiante
            el cual se utilizara en el estudiante que nos devuelva obtener_estudiante y nos mostrará las 
            fechas de las matriculaciones y desmatriculaciones. 
            */
            case 10:
                listaEstudiantes.listar_estudiantes();
                let F_matricula = prompt("Dime el ID del estudiante del que quieras saber su fecha de matriculacion y fecha de desmatriculacion de sus asignaturas hasta el momento");
                F_matricula = Number(F_matricula);

                if (isNaN(F_matricula) || F_matricula <= 0) {
                    throw new Error("El ID debe ser un número positivo.");
                    //break;
                }
                let estudiante_fecha = listaEstudiantes.obtener_estudiante(F_matricula);

                console.log("Las asignaturas de las que se ha matriculado y desmatriculado hasta el momento son: ");
                console.log(estudiante_fecha.registros);
                break;

            /*
            En este caso 11 se buscarán estudiantes o asignaturas por su nombre parcial o completo

            Primero se pedirá al usuario que introduzca 1 para buscar estudiantes o 2 para 
            buscar asignaturas.

            En cualquiera de los dos casos se le volverá a pedir que introduzca un nombre de un estudiante
            o asignatura para luego devolver un array de los nombres coincidentes con uno de los métodos
            creados los cuales son obtener_nombre_estudiante(nombre) u obtener_muchas_asignaturas(nombre)
            los cuales devolveran un array con los nombre que sean parcialmente coincidentes con el nombre
            introducido por el usuario.
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
            /*
            Por último, llegamos al caso 12 el cual deberá de mostrarnos una lista de informes de cada uno de 
            los estudiantes contenidos en listaEstudiantes. 
            */
            case 12:
                console.log("A continuación se mostrarán los informes de cada uno de los estudiantes: ");
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