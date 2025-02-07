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
    const inputs = document.querySelectorAll("input");
    const form = document.querySelector("form");
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

        if (!valido) {
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


///caso 3


///caso 4


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