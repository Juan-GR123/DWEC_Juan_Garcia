<template>
    <ComponenteA v-if="Componente===ComponenteA" />
    <ComponenteB v-if="Componente===ComponenteB" />
</template>

<script setup>
    import ComponenteA from '../hojas/ComponenteA.vue';
    import ComponenteB from '../hojas/ComponenteB.vue';
 
    const Componente=ComponenteA;

</script>