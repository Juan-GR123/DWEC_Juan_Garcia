/*
validación: nativa
momento de validacion: input y submit
mensajes: JS
estilos:nativos
*/

const validarCampo=campo=>{
    campo.setCustomValidity(""); //sobreescribir los msj de error nativos
    //si yo le doy un valor, el validador considera el campo no válido

    if (campo.name=="nombre"){
        if (campo.required) {
            campo.setCustomValidity("Este campo es obligatorio y no puede estar en blanco");
        }
    }

    if(campo.name="teléfono"){
        if(campo.required){
            campo.setCustomValidity("Este campo es obligatorio y no puede estar en blacnp")
        }
    }

    if(!campo.validity.valid){
        campo.setCustomValidity("Este campo es obligatorio y no puede estar en blanco")
    }
    campo.reportValidity(); //muestra el mensaje inmediatamente
}

const formulario= document.getElementsByTagName("form")[0];
const campo=document.querySelectorAll("input");

/*campos.forEach(campo => {
    campo.addEventListener('input', ()=>{
       validarCampo(campo) 
    });
});*/

formulario.addEventListener('input', evento => {
    if (evento.target.tagName=='INPUT'){
        validarCampo(evento.target);
    }
});

formulario.addEventListener('submit', function(evento){
    campos.forEach(campo=>validarCampo(campo));

    if (!formulario.checkValidity()){
        evento.preventDefault();
        console.log("hay algún campo mal, revísalo");
    }else{
        formulario.submit();
        console.log("enviado");
    }

});