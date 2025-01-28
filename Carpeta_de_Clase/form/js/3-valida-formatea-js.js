/*
validación: JS + HTML
momento de validacion: input y submit
mensajes: mixto: nativo+JS
estilos:JS

*/

function compararValor() {
    let claves = document.querySelectorAll("[type=password]");
    if (claves[0].value != claves[1].value) {
        claves[1].setCustomValidity("las claves no coinciden");
        claves[1].classList.add('no-valida');
        claves[1].classList.remove('valida');
    } else {
        claves[1].setCustomValidity("");
        claves[1].classList.add("valida");
        claves[1].classList.remove("no-valida");
    }
    claves[1].reportValidity();
}

let formulario = document.querySelector("form");
formulario.addEventListener('input', evento => {
    if (evento.target.id == "confirm-password") {
        compararValor();
    }
});

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
