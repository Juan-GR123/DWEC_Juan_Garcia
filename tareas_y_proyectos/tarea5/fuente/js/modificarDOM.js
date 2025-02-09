/**
 * @module Proyecto_Corregido
 * 
 */


import { Direccion } from './direccion.js';

import { Estudiantes } from './estudiantes.js';

import { Asignaturas } from './asignaturas.js';

import { GestorAs, GestorEs } from './gestores.js';

import { ErrorPersonalizado, validarEstudiante } from './Error.js';

//////////////////////////////////////


const listaEstudiantes = new GestorEs();//inicializamos un objeto de la clase GestorEs que actuará como un array de estudiantes
const listaAsignaturas = new GestorAs();//inicializamos un objeto de la clase GestorAs que actuará como un array de asignaturas
let listaDirecciones = [];//inicializamos un array para guardar las direcciones da cada estuadiante

//como hacer que estas variables se guarden en local storage????

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


///////////////////////////////////////////////////



/////caso 1

document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("1");
    const articulo = document.querySelector(".opcion1");
    const form = document.querySelector("form");
    const inputs = form.querySelectorAll("input");
    const mostrar = document.getElementById("output"); // Añadido

    // Ocultar el articulo al cargar la página
    articulo.style.display = "none";


    function mostrarEstudiantes() {
        mostrar.innerHTML = ""; // Limpiar el contenido del div
        listaEstudiantes.gestor.forEach(estudiante => {
            const estudianteInfo = `Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}, Dirección: ${estudiante.direccion.calle}, ${estudiante.direccion.numero}, ${estudiante.direccion.piso}, ${estudiante.direccion.codigo_postal}, ${estudiante.direccion.provincia}, ${estudiante.direccion.localidad}`;
            const p = document.createElement("p");// crea la etiqueta p
            p.textContent = estudianteInfo;//pone la etiqueta al principio
            mostrar.appendChild(p);//pone la etiqueta al final
        });
    }


    // Mostrar el articulo al hacer clic en el botón
    boton.addEventListener("click", function () {
        articulo.style.display = (articulo.style.display === "none") ? "block" : "none";
    });

    // Cargar datos guardados en localStorage
    inputs.forEach(input => {
        const valor = localStorage.getItem(input.id);
        if (valor) {
            input.value = valor;
        }

        // Guardar cambios en localStorage cada vez que se edite un input
        input.addEventListener("input", function () {
            localStorage.setItem(input.id, input.value);
        });
    });

    // Validar articulo antes de enviarlo
    form.addEventListener("submit", function (event) {
        let valido = true;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                valido = false;
                input.style.border = "2px solid red"; // Resalta el input vacío
            } else {
                input.style.border = ""; // Elimina el borde rojo si se completa
                input.value = '';
            }
        });

        if (!valido) { //En verdad no hace falta validarlo ya que todos los campos son obligatorios por el html
            event.preventDefault(); // Evita el envío del articulo
            alert("Por favor, completa todos los campos antes de continuar.");
        } else {
            console.log("articulo enviado correctamente");

            let nombre = localStorage.getItem("nombre");
            let edad = localStorage.getItem("edad");
            let calle = localStorage.getItem("calle");
            let numero = localStorage.getItem("numero");
            let piso = localStorage.getItem("piso");
            let codigo_postal = localStorage.getItem("codigo_postal");
            let provincia = localStorage.getItem("provincia");
            let localidad = localStorage.getItem("localidad");

            let nuevaDireccion = new Direccion(calle, numero, piso, codigo_postal, provincia, localidad);

            let nuevoEstudiante = new Estudiantes(nombre, edad, nuevaDireccion);

            let comprobacion_es = listaEstudiantes.agregar_estudiante(nuevoEstudiante);

            if (comprobacion_es != false) {
                console.log("Estudiante creado y agregado con éxito:");
                listaEstudiantes.listar_estudiantes(); //como mostrar esto en pantalla?????
                mostrarEstudiantes(); // Llamada a la función para mostrar estudiantes
                articulo.style.display = "none"; // Ocultar el articulo
            }


        }
    });
});

///caso 2

document.addEventListener("DOMContentLoaded", function () { // DOMContentLoaded se utiliza para asegurarse de que el DOM esté listo antes de intentar manipularlo
    const boton = document.getElementById("2");
    const articulo = document.querySelector(".opcion2");
    const form = document.querySelector(".opcion2 form");
    const inputs = form.querySelectorAll("input");
    const mostrar = document.getElementById("mostrar2"); // Añadido

    // Ocultar el articulo al cargar la página
    articulo.style.display = "none";

    function mostrarAsignaturas() {
        mostrar.innerHTML = ""; // Limpiar el contenido del div
        listaAsignaturas.gestor.forEach(asignatura => {
            const asignaturaInfo = `Nombre: ${asignatura.nombre}`;
            const p = document.createElement("p");// crea la etiqueta p
            p.textContent = asignaturaInfo;//pone la etiqueta al principio
            mostrar.appendChild(p);//pone la etiqueta al final
        });
    }


    // Mostrar el articulo al hacer clic en el botón
    boton.addEventListener("click", function () {
        articulo.style.display = (articulo.style.display === "none") ? "block" : "none";
    });


    // Cargar datos guardados en localStorage
    inputs.forEach(input => {
        const valor = localStorage.getItem(input.id);
        if (valor) {
            input.value = valor;
        }

        // Guardar cambios en localStorage cada vez que se edite un input
        input.addEventListener("input", function () {
            localStorage.setItem(input.id, input.value);
        });
    });

    // Validar articulo antes de enviarlo
    form.addEventListener("submit", function (evento) {
        evento.preventDefault(); // Evita el envío del articulo

        let valido = true;
        let nombre = document.getElementById("nombreA").value.trim(); // Obtener el valor del input

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                valido = false;
                input.style.border = "2px solid red"; // Resalta el input vacío
            } else {
                input.style.border = ""; // Elimina el borde rojo si se completa
                //input.value = '';
            }
        });


        if (!valido) {
            alert("Por favor, completa todos los campos antes de continuar.");
            return;
        } else {

            console.log("articulo enviado correctamente");

            let N_asignatura = new Asignaturas(nombre.trim());//nueva asignatura


            let comprobacion_as = listaAsignaturas.agregar_asignatura(N_asignatura);

            if (comprobacion_as != false) {
                console.log(`Asignatura ${nombre} creada y agregada con éxito.`);
                listaAsignaturas.listar_asignaturas(); // Mostrar todas las asignaturas
                mostrarAsignaturas(); // Llamada a la función para mostrar estudiantes
                articulo.style.display = "none"; // Ocultar el articulo
            }

            // Limpiar el campo de entrada después de registrar
            inputs.forEach(input => {
                input.value = '';
            });
        }
    });
});



///caso 3

document.addEventListener("DOMContentLoaded", function () { // DOMContentLoaded se utiliza para asegurarse de que el DOM esté listo antes de intentar manipularlo
    const boton = document.getElementById("3");
    const articulo = document.querySelector(".opcion3");
    const form = document.querySelector(".opcion3 form");
    const inputs = form.querySelectorAll("input");
    const mostrar = document.getElementById("mostrar3"); // Añadido

    function mostrarTexto(texto) {
        const p = document.createElement("p");// crea la etiqueta p
        p.textContent = texto;//pone la etiqueta al principio
        mostrar.appendChild(p);//pone la etiqueta al final
    }

    // Ocultar el articulo al cargar la página
    articulo.style.display = "none";

    // Mostrar el articulo al hacer clic en el botón
    boton.addEventListener("click", function () {
        articulo.style.display = (articulo.style.display === "none") ? "block" : "none";
    });

    // Cargar datos guardados en localStorage
    inputs.forEach(input => {
        const valor = localStorage.getItem(input.id);
        if (valor) {
            input.value = valor;
        }

        // Guardar cambios en localStorage cada vez que se edite un input
        input.addEventListener("input", function () {
            localStorage.setItem(input.id, input.value);
        });
    });

    // Validar articulo antes de enviarlo
    form.addEventListener("submit", function (evento) {
        let valido = true;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                valido = false;
                input.style.border = "2px solid red"; // Resalta el input vacío
            } else {
                input.style.border = ""; // Elimina el borde rojo si se completa
                input.value = '';
            }
        });

        if (!valido) { //En verdad no hace falta validarlo ya que todos los campos son obligatorios por el html
            evento.preventDefault(); // Evita el envío del articulo
            alert("Por favor, completa todos los campos antes de continuar.");
        } else {
            console.log("articulo enviado correctamente");

            let id = localStorage.getItem("ID");
            id = Number(id);

            //Buscamos el id del estudiante en el array que hemos creado de estudiantes
            let encontrarE = listaEstudiantes.obtener_estudiante(id);


            if (encontrarE != false) {
                let asig = localStorage.getItem("nombreA2");
                //Buscamos el nombre de la asignatura en el array que hemos creado de Asignaturas
                let encontrarA = listaAsignaturas.obtener_asignatura(asig);
                if (encontrarA != false) {
                    let matri = encontrarE.matricular(encontrarA);
                    if (matri == true) {
                        console.log(`${encontrarE.nombre} ha sido matriculado en ${encontrarA.nombre} con éxito.`);
                        mostrar.innerHTML = ""; // Limpiar el contenido del section
                        const fechas = `${encontrarE.nombre} ha sido matriculado en  ${encontrarA.nombre} con éxito.`;
                        mostrarTexto(fechas);
                        //mostramos al estudiante elegido y sus asignaturas matriculadas
                    } else {
                        mostrar.innerHTML = ""; // Limpiar el contenido del section
                        const error = `El estudiantes ${encontrarE.nombre} ya esta matriculado en la asignatura ${encontrarA.nombre}.`;
                        mostrarTexto(error);
                    }
                } else {
                    mostrar.innerHTML = ""; // Limpiar el contenido del section
                    const error = `No se encontró ningúna asignatura con nombre ${asig}.`;
                    mostrarTexto(error);
                }
                encontrarE.asignaturas.forEach((elemento, clave) => {//numero de asignaturas en las que esta matriculado el estudiante
                    console.log(`${clave}. ${elemento.nombre}`);
                    let texto = `${clave}. ${elemento.nombre}`;
                    mostrarTexto(texto);
                });
            }
        }
    });
});

///caso 4

document.addEventListener("DOMContentLoaded", function () { // DOMContentLoaded se utiliza para asegurarse de que el DOM esté listo antes de intentar manipularlo
    const boton = document.getElementById("4");
    const articulo = document.querySelector(".opcion4");
    const form = document.querySelector(".opcion4 form");
    const inputs = form.querySelectorAll("input");
    const mostrar = document.getElementById("mostrar4"); // Añadido

    function mostrarTexto(texto) {
        const p = document.createElement("p");// crea la etiqueta p
        p.textContent = texto;//pone la etiqueta al principio
        mostrar.appendChild(p);//pone la etiqueta al final
    }

    // Ocultar el articulo al cargar la página
    articulo.style.display = "none";

    // Mostrar el articulo al hacer clic en el botón
    boton.addEventListener("click", function () {
        articulo.style.display = (articulo.style.display === "none") ? "block" : "none";
    });


    // Cargar datos guardados en localStorage
    inputs.forEach(input => {
        const valor = localStorage.getItem(input.id);
        if (valor) {
            input.value = valor;
        }

        // Guardar cambios en localStorage cada vez que se edite un input
        input.addEventListener("input", function () {
            localStorage.setItem(input.id, input.value);
        });
    });

    form.addEventListener("submit", function (evento) {
        let valido = true;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                valido = false;
                input.style.border = "2px solid red"; // Resalta el input vacío
            } else {
                input.style.border = ""; // Elimina el borde rojo si se completa
                input.value = '';
            }
        });

        if (!valido) { //En verdad no hace falta validarlo ya que todos los campos son obligatorios por el html
            evento.preventDefault(); // Evita el envío del articulo
            alert("Por favor, completa todos los campos antes de continuar.");
        } else {
            console.log("articulo enviado correctamente");

            let id2 = localStorage.getItem("IDDes");
            id2 = Number(id2);

            //Buscamos el id del estudiante en el array que hemos creado de estudiantes
            let estu_des = listaEstudiantes.obtener_estudiante(id2);
            if (estu_des != false) {
                mostrar.innerHTML = ""; // Limpiar el contenido del section
                let mostrar_Asig = `Asignaturas en las que está matriculado ${estu_des.nombre}:`;
                mostrarTexto(mostrar_Asig);
                estu_des.asignaturas.forEach((elemento, clave) => {//muestro las asignaturas en las que esta matriculado el estudiante
                    console.log(`${clave}. ${elemento.nombre}`);
                    let texto = `${clave}. ${elemento.nombre}`;
                    mostrarTexto(texto);

                });
                let asig_estu = localStorage.getItem("desAsig");
                let asig_des = listaAsignaturas.obtener_asignatura(asig_estu);
                if (asig_des != false) {
                    let desma = estu_des.desmatricular(asig_des);
                    if (desma == true) {
                        console.log(`${estu_des.nombre} ha sido desmatriculado en ${asig_des.nombre} con éxito.`);
                        //mostrar.innerHTML = ""; // Limpiar el contenido del section
                        const fechas = `${estu_des.nombre} ha sido desmatriculado en  ${asig_des.nombre} con éxito.`;
                        mostrarTexto(fechas);
                    } else {
                        mostrar.innerHTML = ""; // Limpiar el contenido del section
                        const error1 = `El estudiantes ${estu_des.nombre} no esta matriculado en la asignatura ${asig_des.nombre}.`;
                        mostrarTexto(error1);
                    }
                } else {
                    mostrar.innerHTML = ""; // Limpiar el contenido del section
                    const error2 = `No se encontró ningúna asignatura con nombre ${asig_estu}.`;
                    mostrarTexto(error2);
                }


                estu_des.asignaturas.forEach((elemento, clave) => {
                    console.log(`${clave}. ${elemento.nombre}`);
                    let texto = `${clave}. ${elemento.nombre}`;
                    mostrarTexto(texto);
                });
            }
        }
    });

});

///caso 5


///caso 6



/////caso 13
document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("13");
    const articulo = document.querySelector(".opcion13");
    const mostrar = document.getElementById("mostrar"); // Añadido

    // Ocultar el articulo al cargar la página
    articulo.style.display = "none";


    function Adios() {
        mostrar.innerHTML = "";
        const elemento = document.createElement("p");
        elemento.textContent = "Adios";
        mostrar.appendChild(elemento);
    }


    boton.addEventListener("click", function () {
        articulo.style.display = (articulo.style.display === "none") ? "block" : "none";
        Adios();
        localStorage.clear(); //te limpia local storage
        window.location.reload();
    });
});