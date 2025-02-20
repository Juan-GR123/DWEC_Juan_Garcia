<!--
    v-bind variables con atributos
-->

<template>
    <p :id :class="miClase">Esto es un párrafo simple</p>
    <button :disabled="deshabilitado">Un boton</button>
    <input type="text" :value="nombre" @input="actualizar">
    <!-- <img v-bind:src="imagen.src" v-bind:alt="imagen.alt"> -->
    <!-- <img v-bind="imagen"> -->
     <p v-bind:title="mostrarFecha()">texto aleatorio</p>
     <p :class="{'destacado': esDestacado, 'normal': !esDestacado }">Esto es un parrafo aleatorio</p>
     <!-- Propiedades computada -->
</template> 

<script setup>
    const esDestacado=true;
    const id="especial";
    const miClase="rojo";
    const deshabilitado=true; 
    const nombre="procopio";

    const actualizar=()=>{
        console.log("el campo se ha actualizado");
    }


    const imagen={  
        src: "../../../public/pngtree-cat-logo-png-image_13997085.png",
        alt: "un paisaje precioso"
    }

    const mostrarFecha=()=>{
        console.log(Date.now());
    }


</script>

<style scoped>
    .destacado{
        color: red;
        font-size: 2rem;
    }

    .normal{
        color: blue;
    }
</style>