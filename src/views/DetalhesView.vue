<script setup>
const props = defineProps({
    id: String,
});
</script>
<template>
    <h1>Detalhes do produto</h1>
    <p>Id do produto: {{ id }}</p>

    <router-link to="/produtos">Voltar</router-link>
</template>

<style scoped>
a {
    color: blue;
}
</style>
