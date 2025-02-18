<script setup>
    import Boton from './Boton.vue';
    const mensaje="que ilusión, mi primer mensaje de vue";

    function saluda(){
        return "hola";
    }

    const persona={
        nombre: "procopio",
        edad:35
    }
</script>

<template>
    <article class="flex-columna borde">
        <p>{{ mensaje }}</p>
        <p>{{ saluda() }}</p>
        <p>{{ "hola".toUpperCase() }}</p>
        <p>{{ 5+3 }}</p>
        <p>{{ persona.nombre }}</p>
        <!--Directivas-->
        <Boton />
    </article>

</template>

<style scoped>
    .flex-columna{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .borde{
        border: 1px solid blue;
    }
</style>