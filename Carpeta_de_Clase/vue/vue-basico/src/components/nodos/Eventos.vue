<template>
    <p>hola</p>
     <button id="miboton" @click="saluda" @mousemove='console.log("por encima")' @contextmenu.prevent @click.right="console.log('boton derecho')" @click.left="atiendeEvento($evento)">boton</button> 
</template>


<!-- contexmenu.prevent te previene de que dandole a click derecho te salga el menu contextual -->

<script setup>
    const saluda=() =>{
        alert("hola");
    }

    const atiendeEvento=(evento)=>{
        console.log(evento.target.id);
    }

</script>

<style scoped> 
    button{
        border: 1px solid blue;
        padding: 10px;
    }
</style>