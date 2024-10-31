import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContatoView from "../views/ContatoView.vue";
import SobreView from "../views/SobreView.vue";
import ProdutosView from "@/views/ProdutosView.vue";

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
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
