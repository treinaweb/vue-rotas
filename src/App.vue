<template>
    <header>
        <nav>
            <ul>
                <li>
                    <RouterLink to="/">Home</RouterLink>
                </li>
                <li>
                    <RouterLink to="/contato">Contato</RouterLink>
                </li>
                <li>
                    <RouterLink to="/sobre">Sobre</RouterLink>
                </li>
                <li>
                    <RouterLink to="/produtos">Produtos</RouterLink>
                </li>
            </ul>
        </nav>
    </header>
    <div>
        <router-view />
    </div>
</template>

<style>
body,
html {
    margin: 0;
    padding: 0;
}
header {
    background-color: rgb(24, 124, 64);
}

ul {
    margin: 0;
    padding: 1rem;
    display: flex;
    gap: 1rem;
    list-style: none;
}

a {
    color: #fff;
    text-decoration: none;
}

.router-link-active {
    color: rgb(2, 244, 54);
}
</style>
