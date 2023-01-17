<script setup lang="ts">
import { computed, reactive } from "vue";
import type { ProductInterface, ProductCartInterface } from "@/types";
import TheHeader from "@/components/Header.vue";
import Shop from "@/components/Shop/Shop.vue";
import Cart from "@/components/Cart/Cart.vue";
import TheFooter from "@/components/Footer.vue";
import data from "@/data/product";

const state = reactive<{
    products: ProductInterface[];
    cart: ProductCartInterface[];
}>({
    products: data,
    cart: [],
});

function addProductToCart(idProduct: number): void {
    const product = state.products.find((product) => product.id === idProduct);
    if (product) {
        const productInCart = state.cart.find(
            (product) => product.id === idProduct
        );
        if (productInCart) {
            productInCart.quantity++;
        } else {
            state.cart.push({ ...product, quantity: 1 });
        }
    }
}

function removeProductFromCart(idProduct: number): void {
    const productInCart = state.cart.find(
        (product) => product.id === idProduct
    );
    if (productInCart) {
        if (productInCart.quantity > 1) {
            productInCart.quantity--;
        } else {
            state.cart = state.cart.filter(
                (product) => product.id !== idProduct
            );
        }
    }
}

const emptyCart = computed(() => state.cart.length === 0);
</script>

<template>
    <div
        class="app-container"
        :class="{
            gridEmpty: emptyCart,
        }"
    >
        <TheHeader class="header" />
        <Shop
            :products="state.products"
            @add-product-to-cart="addProductToCart"
            class="shop"
        />
        <Cart
            v-if="!emptyCart"
            :cart="state.cart"
            class="cart"
            @remove-product-from-cart="removeProductFromCart"
        />
        <TheFooter class="footer" />
    </div>
</template>

<style lang="scss">
@import "@/assets/scss/base.scss";
@import "@/assets/scss/debug.scss";

.app-container {
    display: grid;
    grid-template-areas:
        "header header"
        "shop cart"
        "footer footer";
    grid-template-columns: 75% 25%;
    grid-template-rows: 48px auto 48px;
    min-height: 100vh;

    &.gridEmpty {
        grid-template-areas:
            "header header"
            "shop shop"
            "footer footer";
        grid-template-columns: 100%;
    }
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
