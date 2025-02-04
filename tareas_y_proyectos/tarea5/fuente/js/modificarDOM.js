/**
 * @module Proyecto_Corregido
 * 
 */


import {Direccion}  from './direccion.js';

import {Estudiantes} from './estudiantes.js';

import {Asignaturas} from './asignaturas.js';

import {GestorAs,GestorEs} from './gestores.js';

import {ErrorPersonalizado,validarEstudiante} from './Error.js';



document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("1");
    const formulario = document.querySelector(".opcion1");
    const inputs = document.querySelectorAll("input");
    const form = document.querySelector("form");

    // Ocultar el formulario al cargar la página
    formulario.style.display = "none";

    // Mostrar el formulario al hacer clic en el botón
    boton.addEventListener("click", function () {
        formulario.style.display = (formulario.style.display === "none") ? "block" : "none";
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

    // Validar formulario antes de enviarlo
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
            event.preventDefault(); // Evita el envío del formulario
            alert("Por favor, completa todos los campos antes de continuar.");
        } else {
            console.log("formulario enviado correctamente");

            let nombre = localStorage.getItem("nombre");
            let edad = localStorage.getItem("edad");
            let calle = localStorage.getItem("calle");
            let numero = localStorage.getItem("numero");
            let piso= localStorage.getItem("piso");
            let codigo_postal = localStorage.getItem("codigo_postal");
            let provincia = localStorage.getItem("provincia");
            let localidad = localStorage.getItem("localidad");

            let nuevaDireccion = new Direccion(nombre,edad,numero, piso, codigo_postal, provincia, localidad);

            let nuevoEstudiante = new Estudiantes(nombre, edad, nuevaDireccion);

            let comprobacion_es = listaEstudiantes.agregar_estudiante(nuevoEstudiante);

            if (comprobacion_es != false) {
                console.log("Estudiante creado y agregado con éxito:");
                //listaEstudiantes.listar_estudiantes(); como mostrar esto en pantalla?
            }

            localStorage.clear(); // Borra los datos si el formulario es válido 
        }
    });
});