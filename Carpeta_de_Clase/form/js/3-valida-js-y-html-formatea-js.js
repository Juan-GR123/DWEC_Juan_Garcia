/*
validación: JS + HTML
momento de validacion: input y submit
mensajes: mixto: nativo+JS
estilos:JS

*/
//En este ejemplo 
//  -Validación: mezcla de nativa con JavaScript. HTML valida todo salvo las contraseñas, que las valida JS usando sus atributos
//  -Mensajes de error: nativos, salvo cuando las contraseñas no coinciden.
//  -Momento de validar: en cada pulsación (input) y al enviar el formulario (submit)
//  -Estilado: JavaScript, añadiendo y quitando clases. Para comprobar qué clase le corresponde, tiene que comprobar el resultado de la evaluación nativa, para lo que usa validity.valid

// Obtener el formulario
let formulario = document.querySelector("form");
/*formulario.addEventListener('input', evento => {
    if (evento.target.id == "confirm-password") {
        compararValor();
    }
});*/


// Para la validación uso validity.valid
function validarCampo(input) {
    console.log("estoy aqui en " + input);
  if (!input.validity.valid) {
    input.classList.add('no-valido');
    input.classList.remove('valido');
    input.reportValidity(); // Mostrar el mensaje de error nativo
  } else {
    input.classList.add('valido');
    input.classList.remove('no-valido');
    input.setCustomValidity(''); // Limpiar cualquier mensaje personalizado
  }
}

formulario.addEventListener('input', evento => {
    if(evento.target.id == "password" || evento.target.id =="confirm-password"){
        compararValor(evento.target);
    }else{
        validarCampo(evento.target);
    }
});


function compararValor(campoModificado) {
    let claves = document.querySelectorAll("[type=password]");
    if (claves[0].value != claves[1].value) {
       // console.log("No son iguales");

        if(campoModificado.id == "password" && claves[1].value!=""){
            claves[0].setCustomValidity("las claves no coinciden");
        }else{
            claves[1].setCustomValidity("las claves no coinciden");
        }
        
        //claves[1].classList.add('no-valida');
        //claves[1].classList.remove('valida');
    } else {
        claves[0].setCustomValidity("");
        claves[1].setCustomValidity("");
        //claves[1].classList.add("valida");
        //claves[1].classList.remove("no-valida");
    }
    //Llamamos a reportValidity() solo en el campo modificado
    if(campoModificado.id == "password"){
        claves[0].reportValidity();
    }else{
        claves[1].reportValidity();
    }

   
}




const campo=document.querySelector("input");

formulario.addEventListener('submit', evento=>{
 campos.forEach(campo=>validarCampo(campo));

    if (!formulario.checkValidity()){
        evento.preventDefault();
        console.log("hay algún campo mal, revísalo");
    }else{
        formulario.submit();
        console.log("enviado");
    }

});
