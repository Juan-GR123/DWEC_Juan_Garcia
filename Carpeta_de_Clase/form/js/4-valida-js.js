/*
-quien valida: exclu JS. usar "novalidate" -> se evalua la val.nativa -> pseudoclases y prop validity
-mensajes de error: JS -> insertando nodos en el DOM
-cuándo se valida: al enviar el form (submit)
-quien estila: para que se vea que la val. nativa sigue funcionand
 */

document.querySelector("form").addEventListener("submit", (evento)=>{
    evento.preventDefault();
    let formValido=true;

    const campos = document.querySelectorAll("input");
   

    campos.forEach(campo => {
        let error="";
        let campoError=document.getElementById(`error${campo.name}`);
            if(!campo.validity.valid){
                if(campo.validity.valueMissing){
                    error= `El campo ${campo.name} es obligatorio`;
                }else if(campo.validity.tooShort){
                    error = `El campo ${campo.name} es demasiado corto`;
                }else if(campo.validity.patternMismatch){
                    error= `El campo ${campo.name} no cumple el patron requerido`;
                }else if(campo.validity.rangeOverflow){
                    error= `El campo ${campo.name} se ha pasado del rango`;
                }else if(campo.validity.rangeUnderflow){
                    error= `El campo ${campo.name} no llega al minimo`;
                }else if(campo.id == "password" && campo.value!=document.getElementById("confirm-password").value){
                    error = "las contraseñas no coinciden";
                }
            }

            if(error){
                campoError.textContent=error;
                campoError.classList.remove("oculto");
                formValido=false;
            }
    });

    if(formValido){
        evento.target.submit();
    }
    
});