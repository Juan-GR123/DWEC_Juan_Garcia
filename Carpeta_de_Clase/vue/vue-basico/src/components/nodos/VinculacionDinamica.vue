<!-- v-model -> vinculación bidireccional -->
<!-- v-bind -> vinculación unidireccional -->

<!-- v-bind -> enlaza nombre con :value NO VINCULA VALUE CON nombre -->
<!-- v-model -> las dos vinculaciones con {nombre con :value y :value con nombre} -->
<template>
    <input type="text" v-model="nombre"/>

    <p>Tu nombre es {{ nombre }}</p>

    <input type="text" v-model="nombre" @input="actualizar"/>
    <label>
        <input type="checkbox" v-model="marcar">
        Acepto
    </label>
    <p v-if="marcar">Has marcado el checkbox</p>
</template>

<script setup>
    import {ref} from 'vue';

    const nombre =ref('');
    const marcar = ref(false);

    // const actualizar=(event) =>{
        // nombre.value=event.target.value;
    // }
</script>