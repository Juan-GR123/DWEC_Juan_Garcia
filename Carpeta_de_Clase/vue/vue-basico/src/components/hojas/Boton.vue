<template>
    <button class="boton">{{ texto }}</button>
</template>

<script setup>
    const texto="hola";

    const saluda=()=>{
        console.log("hola");
    }
</script>

<style scoped>
    .boton{
        border: 1px solid blue;
        /*background-color: lightblue;*/
    }
</style>

