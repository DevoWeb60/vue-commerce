<script setup lang="ts"></script>

<template>
    <header class="d-flex align-items-center p-10">
        <h1 class="d-flex">
            <a href="#"><img src="../assets/images/logo.svg" alt="" /></a> Vue
            Commerce
        </h1>
        <ul class="flex-fill d-flex">
            <li><a href="#">Boutique</a></li>
            <li><a href="#">Admin</a></li>
        </ul>
        <ul class="d-flex">
            <li><a href="#">Inscription</a></li>
            <li><a href="#">Connexion</a></li>
        </ul>
    </header>
</template>

<style scoped lang="scss">
header {
    background-color: var(--primary-1);
    h1 {
        a img {
            width: 30px;
            height: 30px;
            margin-right: 5px;
        }
        margin-right: 30px;
        font-size: 1.5rem;
    }
    ul {
        li {
            margin-right: 10px;
        }
    }
}
</style>
