<script setup>
import { ref } from "vue";

const produtos = ref([
    {
        id: 1,
        nome: "Produto 1",
    },
    {
        id: 2,
        nome: "Produto 2",
    },
    {
        id: 3,
        nome: "Produto 3",
    },
    {
        id: 4,
        nome: "Produto 4",
    },
]);
</script>

<template>
    <div>
        <h1>Lista de Produtos</h1>

        <ul>
            <li v-for="produto in produtos" :key="produto.id">
                <h2>{{ produto.nome }}</h2>
                <router-link
                    :to="{ name: 'Detalhes', params: { id: produto.id } }"
                    >Ver detalhes</router-link
                >
            </li>
        </ul>
    </div>
</template>

<style scoped>
a {
    color: blue;
}
</style>
