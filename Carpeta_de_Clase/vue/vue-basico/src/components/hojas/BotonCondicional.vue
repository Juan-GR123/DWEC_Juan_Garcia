<!-- Directivas -->

<!--Renderizacion condicional-->
<!-- v-if
v-else
v-if-else -->

<template>
    <button v-if="renderizar" class="boton">Pulsame ahora</button>
    <button v-else="renderizar" class="boton">No me pulses</button>
</template>

<script setup>
    const renderizar=false;
    
</script>

<style scoped>
    .boton{
        border: 1px solid blue;
        /*background-color: lightblue;*/
    }
</style>

