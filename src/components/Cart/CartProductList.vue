<template>
    <div class="d-flex flex-column">
        <CartProduct
            v-for="product of cart"
            :product="product"
            :key="product.id"
            @remove-product-from-cart="emit('removeProductFromCart', $event)"
        />
    </div>
</template>

<script setup lang="ts">
import type { ProductCartInterface } from "@/types";
import CartProduct from "./CartProduct.vue";

defineProps<{
    cart: ProductCartInterface[];
}>();

const emit = defineEmits<{
    (e: "removeProductFromCart", idProduct: number): void;
}>();
</script>

<style scoped lang="scss"></style>
