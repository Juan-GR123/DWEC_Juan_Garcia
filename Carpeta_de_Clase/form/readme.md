validación de form en el cliente

No es recom validar solo en el cliente

Parámetros en cuanto a la validación:
- método -> nativa (HTML), JavaScript, mixto
- cuando -> 
    - nativa -> al enviar el formulario.
    - si es JS o mixto -> cuando yo quiera (eventos) 'input', 'focusout', 'submit'
- mensajes de error: nativos o personalizados (JS)
- estilo de los campos cuando son válidos y no válidos: Nativa

- mensajes de error:
    - nativos -> DEBE HABER REGLAS DE VALIDACIÓN NATIVAS. Se mandan al MANDAR EL FORMULARIO.
    - JS -> 
        - Modificando el DOM (eventos y modificación del DOM)
        - aprovechar los mensajes nativos
            - campo.setCustomValidity("msj") -> establecer un mensaje de error para un campo. se manda cuando se envia el formulario.
            - reportValidity() ->mandar el msj inmediatamente

maxlength
minlength

JS
Ventajas
    - reglas -> las que yo quiera
    - momento -> cuando quiera (nativo=enviar)

Mixta

