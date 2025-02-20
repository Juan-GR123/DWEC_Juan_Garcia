<template>
    <ul>
        <li v-for="(asignatura,indice) in asignaturas" :key="indice">{{ asignatura }}</li>
        <li v-for="(producto,indice) in verduras" :key="indice">{{producto.nombre}} - {{producto.existencias}}</li>
    </ul>
</template>

<script setup>
    const asignaturas=["DWEC", "DIW", "DWES", "DAW"];

    const verduras=[
        {nombre:'puerro', existencias:20},
        {nombre:'patatas', existencias:10},
        {nombre:'alcachofas', existencias:50}
    ]
</script>

<style>
ul{
    list-style: none;
    padding: 0;
}
</style>