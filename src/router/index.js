import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContatoView from "../views/ContatoView.vue";
import SobreView from "../views/SobreView.vue";
import ProdutosView from "@/views/ProdutosView.vue";
import DetalhesView from "@/views/DetalhesView.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomeView,
    },
    {
        path: "/contato",
        name: "Contato",
        component: ContatoView,
    },
    {
        path: "/sobre",
        name: "Sobre",
        component: SobreView,
    },
    {
        path: "/produtos",
        name: "Produtos",
        component: ProdutosView,
    },
    {
        path: "/produtos/:id",
        name: "Detalhes",
        component: DetalhesView,
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
