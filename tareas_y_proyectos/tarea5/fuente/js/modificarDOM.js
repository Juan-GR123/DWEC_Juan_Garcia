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
        /*const valor = localStorage.getItem(input.id);
        if (valor) {
            input.value = valor;
        }*/

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
        /*const valor = localStorage.getItem(input.id);
        if (valor) {
            input.value = valor;
        }*/

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
        /*const valor = localStorage.getItem(input.id);
        if (valor) {
            input.value = valor;
        }*/

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

        if (!valido) {
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
        /*const valor = localStorage.getItem(input.id);
        if (valor) {
            input.value = valor;
        }*/

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

        if (!valido) {
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
document.addEventListener("DOMContentLoaded", function () { // DOMContentLoaded se utiliza para asegurarse de que el DOM esté listo antes de intentar manipularlo
    const boton = document.getElementById("5");
    const articulo = document.querySelector(".opcion5");
    const form = document.querySelector(".opcion5 form");
    const inputs = form.querySelectorAll("input");
    const mostrar = document.getElementById("mostrar5"); // Añadido

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
        /*const valor = localStorage.getItem(input.id);
        if (valor) {
            input.value = valor;
        }*/

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

        if (!valido) {
            evento.preventDefault(); // Evita el envío del articulo
            alert("Por favor, completa todos los campos antes de continuar.");
        } else {
            console.log("articulo enviado correctamente");

            mostrar.innerHTML = ""; // Limpiar el contenido del section

            let mostrar_Estu = `Estudiantes en la lista:`;

            mostrarTexto(mostrar_Estu);

            for (let persona of listaEstudiantes.gestor) {
                let personas = `${persona.id}, ${persona.nombre}, ${persona.edad}, ${persona.direccion} `;
                mostrarTexto(personas);
            }
            listaEstudiantes.listar_estudiantes(); //lo muestra en consola



            let elim_estu = localStorage.getItem("ID_Eli");
            elim_estu = Number(elim_estu);

            if (isNaN(elim_estu) || elim_estu <= 0) {
                const error = `El ID introducido debe ser un número positivo.`;
                mostrarTexto(error);
            }

            let comprobacion = listaEstudiantes.eliminar_estudiante(elim_estu);//si el estudiante existe, entonces se elimina indicando su id

            if (comprobacion != false) {
                console.log(`El estudiante con ID ${elim_estu} ha sido eliminado correctamente.`);
                let texto = `El estudiante con ID ${elim_estu} ha sido eliminado correctamente.`;
                mostrarTexto(texto);
                //mostrar.innerHTML = ""; // Limpiar el contenido del section
                let mostrar_Estu2 = `Estudiantes en la lista:`;

                mostrarTexto(mostrar_Estu2);

                for (let persona2 of listaEstudiantes.gestor) {
                    let personas2 = `${persona2.id}, ${persona2.nombre}, ${persona2.edad}, ${persona2.direccion} `;
                    mostrarTexto(personas2);
                }
                listaEstudiantes.listar_estudiantes(); //lo muestra en consola
            } else {
                const error = `No se encontró ningún estudiante con ID ${elim_estu}.`;
                mostrarTexto(error);
            }
        }
    });

});

///caso 6

document.addEventListener("DOMContentLoaded", function () { // DOMContentLoaded se utiliza para asegurarse de que el DOM esté listo antes de intentar manipularlo
    const boton = document.getElementById("6");
    const articulo = document.querySelector(".opcion6");
    const form = document.querySelector(".opcion6 form");
    const inputs = form.querySelectorAll("input");
    const mostrar = document.getElementById("mostrar6"); // Añadido

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
       /* const valor = localStorage.getItem(input.id);
        if (valor) {
            input.value = valor;
        }*/

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

        if (!valido) {
            evento.preventDefault(); // Evita el envío del articulo
            alert("Por favor, completa todos los campos antes de continuar.");
        } else {
            console.log("articulo enviado correctamente");

            mostrar.innerHTML = ""; // Limpiar el contenido del section

            let mostrar_Asig2 = `Asignaturas en la lista:`;

            mostrarTexto(mostrar_Asig2);

            for (let asignatura of listaAsignaturas.gestor) {
                let asignaturas = `${asignatura.nombre}`;
                mostrarTexto(asignaturas);
            }
            listaAsignaturas.listar_asignaturas();//muestra las asignaturas antes de eliminarlas

            let elim_asig = localStorage.getItem("Elim_Asig");

            if (typeof elim_asig != "string" || elim_asig.trim() === "") {
                const error = `El nombre de la asignatura introducido no es válido.`;
                mostrarTexto(error);
            }

            let comprobacion2 = listaAsignaturas.eliminar_asignatura(elim_asig, listaEstudiantes);

            if (comprobacion2 != false) {
                console.log(`La asignatura ha sido eliminada correctamente.`);
                let texto = `La asignatura ha sido eliminada correctamente.`;
                mostrarTexto(texto);

                let mostrar_Asig3 = `Asignaturas en la lista:`;

                mostrarTexto(mostrar_Asig3);

                for (let asignatura2 of listaAsignaturas.gestor) {
                    let asignaturas2 = `${asignatura2.nombre}`;
                    mostrarTexto(asignaturas2);
                }
                listaAsignaturas.listar_asignaturas();
            } else {
                const error = `No se encontró ningún estudiante con nombre ${elim_asig}.`;
                mostrarTexto(error);
            }
        }
    });
});

///caso 7
document.addEventListener("DOMContentLoaded", function () { // DOMContentLoaded se utiliza para asegurarse de que el DOM esté listo antes de intentar manipularlo
    const boton = document.getElementById("7");
    const articulo = document.querySelector(".opcion7");
    const form = document.querySelector(".opcion7 form");
    const inputs = form.querySelectorAll("input");
    const mostrar = document.getElementById("mostrar7"); // Añadido

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
        /*const valor = localStorage.getItem(input.id);
        if (valor) {
            input.value = valor;
        }*/

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

        if (!valido) {
            evento.preventDefault(); // Evita el envío del articulo
            alert("Por favor, completa todos los campos antes de continuar.");
        } else {
            //se califican asignaturas y el promedio de esas notas seran la nota final del estudiantes
            let nombre_asig = localStorage.getItem("nombre_Asig");
            let asignatura_N = listaAsignaturas.obtener_asignatura(nombre_asig);

            if (asignatura_N != false) {
                //let continuar = "";
                let nota = 0;
                let calificacion_compr = null;

                nota = localStorage.getItem("nota_Asig");
                nota = Number(nota);
                calificacion_compr = asignatura_N.agregar_calificacion(nota);

                if (calificacion_compr == true) {
                    mostrar.innerHTML = "";
                    let calcular = "calculamos el promedio de las calificaciones de la asignatura elegida";
                    mostrarTexto(calcular);
                    let nota_promedio_calificaciones = asignatura_N.calcular_promedio();

                    // Listar estudiantes disponibles
                    listaEstudiantes.listar_estudiantes();

                    let mostrar_Estu2 = `Estudiantes en la lista:`;

                    mostrarTexto(mostrar_Estu2);

                    for (let persona of listaEstudiantes.gestor) {
                        let personas = `${persona.id}, ${persona.nombre}, ${persona.edad}, ${persona.direccion} `;
                        mostrarTexto(personas);
                    }

                    let id_Estudiante = localStorage.getItem("Agregar_ID");
                    id_Estudiante = Number(id_Estudiante);
                    let estudiante = listaEstudiantes.obtener_estudiante(id_Estudiante);

                    if (estudiante != false) {
                        let estudiante_asig = `Asignaturas en las que está matriculado ${estudiante.nombre}`;
                        mostrarTexto(estudiante_asig);

                        estudiante.asignaturas.forEach((elemento, clave) => {
                            let mostrar_consola = `${clave}. ${elemento.nombre}`;
                            mostrarTexto(mostrar_consola);
                            console.log(`${clave}. ${elemento.nombre}`);
                        });
                        let promedio_Nuevo = `El promedio ${nota_promedio_calificaciones} de la asignatura ${asignatura_N.nombre} será asignado al estudiante ${estudiante.nombre}`;
                        mostrarTexto(promedio_Nuevo);
                        console.log(`El promedio ${nota_promedio_calificaciones} de la asignatura ${asignatura_N.nombre} será asignado al estudiante ${estudiante.nombre}`);
                        estudiante.agregar_calificacion(asignatura_N, nota_promedio_calificaciones);
                    } else {
                        mostrar.innerHTML = "";
                        let error1 = "El estudiante no existe";
                        mostrarTexto(error1);
                    }

                } else {
                    mostrar.innerHTML = "";
                    let error2 = "No se ha podido añadir la calificación a la asignatura.";
                    mostrarTexto(error2);
                }


                //ahora eliminaremos las calificaciones que se han añadido a la asignatura elegida para que si se vuelve a este caso para añadir notas a
                //la misma asignatura las notas de este estudiante no se interpongan las 
                //notas del nuevo estudiante
                for (let i = 0; i < asignatura_N.calificaciones.length; i++) {
                    asignatura_N.eliminar_calificacion(i);
                }

                let operacion = "Operación terminada";
                mostrarTexto(operacion);
                console.log("Operación terminada");


            } else {
                mostrar.innerHTML = "";
                let error = "La asignatura no existe";
                mostrarTexto(error);
            }

        }
    });

});

///caso 8
document.addEventListener("DOMContentLoaded", function () { // DOMContentLoaded se utiliza para asegurarse de que el DOM esté listo antes de intentar manipularlo
    const boton = document.getElementById("8");
    const articulo = document.querySelector(".opcion8");
    const form = document.querySelector(".opcion8 form");
    const inputs = form.querySelectorAll("input");
    const mostrar = document.getElementById("mostrar8"); // Añadido

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
        /*const valor = localStorage.getItem(input.id);
        if (valor) {
            input.value = valor; //pone en los inputs los valores que tienen sus localstorage
        }*/

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

        if (!valido) {
            evento.preventDefault(); // Evita el envío del articulo
            alert("Por favor, completa todos los campos antes de continuar.");
        } else {
            mostrar.innerHTML = ""; // Limpiar el contenido del section
            listaEstudiantes.listar_estudiantes();
            let mostrar_Estu3 = `Estudiantes en la lista:`;

            mostrarTexto(mostrar_Estu3);

            for (let persona of listaEstudiantes.gestor) {
                let personas = `${persona.id}, ${persona.nombre}, ${persona.edad}, ${persona.direccion} `;
                mostrarTexto(personas);
            }
            let promedio_Es = localStorage.getItem("ID_8");
            promedio_Es = Number(promedio_Es);
            let obtener_promedio = listaEstudiantes.obtener_estudiante(promedio_Es);

            if (obtener_promedio != false) {
                console.log("Ahora calcularemos el promedio de todas las notas del estudiante elegido");
                let calculamos = "Ahora calcularemos el promedio de todas las notas del estudiante elegido";
                mostrarTexto(calculamos);

               
                let promedio = obtener_promedio.promedio();//se calcula el promedio
                
                obtener_promedio.asignaturas.forEach(asignatura => {
                    let textoAsignatura = `Asignatura: ${asignatura.nombre}, Nota: ${asignatura.nota}`;
                    mostrarTexto(textoAsignatura);
                });
                mostrarTexto(`El promedio de notas del estudiante ${obtener_promedio.nombre} es ${promedio}`);
               

                console.log(obtener_promedio.asignaturas);//se muestran las asignaturas con sus notas
                console.log(`El promedio de notas del estudiante ${obtener_promedio.nombre} es ${promedio}`);
            }else{
                mostrar.innerHTML = "";
                let error = "El estudiante no existe";
                mostrarTexto(error);
            }

        }
    });

});

///caso 9

document.addEventListener("DOMContentLoaded", function () { // DOMContentLoaded se utiliza para asegurarse de que el DOM esté listo antes de intentar manipularlo
    const boton = document.getElementById("9");
    const articulo = document.querySelector(".opcion9");
    const mostrar = document.getElementById("mostrar9"); // Añadido

    function mostrarTexto(texto) {
        texto.split("\n").forEach(linea => { // Divide el texto en líneas
            const p = document.createElement("p");
            p.textContent = linea;
            mostrar.appendChild(p);
        });
    }

    // Ocultar el articulo al cargar la página
    articulo.style.display = "none";

    // Mostrar el articulo al hacer clic en el botón
    boton.addEventListener("click", function () {
        articulo.style.display = (articulo.style.display === "none") ? "block" : "none";
        
        mostrar.innerHTML = ""; // Limpiar el contenido del section
    
        listaEstudiantes.gestor.forEach(elemento => {
            console.log(`Estudiante: ${elemento.nombre}, Promedio: ${elemento.promedio()}, Asignaturas: ${elemento.asig_mostrar()}`);
            let texto9 = `Estudiante: ${elemento.nombre}, Promedio: ${elemento.promedio()}, Asignaturas: ${elemento.asig_mostrar_pantalla()}`;
            mostrarTexto(texto9);

            console.log("Ahora se calculará el promedio de notas de todos los estudiantes");
            let promedio_todos = "Ahora se calculará el promedio de notas de todos los estudiantes";
            mostrarTexto(promedio_todos);


            let promedio_total = listaEstudiantes.promedio_listas();

            console.log(`El promedio de todos los estudiantes será ${promedio_total}`);
            let conclusion = `El promedio de todos los estudiantes será ${promedio_total}`;
            mostrarTexto(conclusion);
        });
    });


});



///caso 10

///caso 11

///caso 12

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