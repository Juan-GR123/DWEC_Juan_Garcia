<template>
    <article class="flex-columna borde">
       <!-- <p>{{ mensaje }}</p>
        <p>{{ saluda() }}</p>
        <p>{{ "hola".toUpperCase() }}</p>
        <p>{{ 5+3 }}</p>
        <p>{{ persona.nombre }}</p>-->
        <!--Directivas-->
        <!-- <Boton /> -->
        <!-- <BotonCondicional />; -->
        <!-- <ComponenteCondicional/>- -->
        <!-- <Lista/> -->
        <!-- <Eventos/> -->
        <Vinculacion/>
        <!-- <VinculacionDinamica/> -->
    </article>

</template>

<script setup>
    import Boton from '../hojas/Boton.vue';
    import BotonCondicional from '../hojas/BotonCondicional.vue';
    import ComponenteCondicional from './ComponenteCondicional.vue';
    import Lista from './Lista.vue';
    import Eventos from './Eventos.vue';
    import Vinculacion from './Vinculacion.vue';
    import VinculacionDinamica from './VinculacionDinamica.vue';

    const mensaje="que ilusión, mi primer mensaje de vue";

    function saluda(){
        return "hola";
    }

    const persona={
        nombre: "procopio",
        edad:35
    }
</script>


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