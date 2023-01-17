<script setup lang="ts">
import { reactive } from "vue";
import type { ProductInterface } from "./types/product.interface";
import TheHeader from "@/components/Header.vue";
import Shop from "@/components/Shop/Shop.vue";
import Cart from "@/components/Cart/Cart.vue";
import TheFooter from "@/components/Footer.vue";
import data from "@/data/product";

const products = reactive<ProductInterface[]>(data);
</script>

<template>
    <div class="app-container">
        <TheHeader class="header" />
        <Shop :products="products" class="shop" />
        <Cart class="cart" />
        <TheFooter class="footer" />
    </div>
</template>

<style lang="scss">
@import "@/assets/base.scss";
@import "@/assets/debug.scss";

.app-container {
    display: grid;
    grid-template-areas:
        "header header"
        "shop cart"
        "footer footer";
    grid-template-columns: 75% 25%;
    grid-template-rows: 48px auto 48px;
    min-height: 100vh;
}

.header {
    grid-area: header;
}
.shop {
    grid-area: shop;
}
.cart {
    grid-area: cart;
    background: var(--white);
    border-left: 1px solid var(--border);
}
.footer {
    grid-area: footer;
}
</style>
