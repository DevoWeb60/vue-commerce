<script setup lang="ts">
import type { ProductInterface } from "@/types";
import ShopProduct from "./ShopProduct.vue";

defineProps<{
    products: ProductInterface[];
}>();

const emit = defineEmits<{
    (e: "addProductToCart", idProduct: number): void;
}>();
</script>

<template>
    <div class="grid p-20">
        <ShopProduct
            v-for="product in products"
            :product="product"
            :key="product.id"
            @add-product-to-cart="emit('addProductToCart', $event)"
        />
    </div>
</template>

<style scoped lang="scss">
.grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(200px, 1fr));
    grid-auto-rows: 400px;
    grid-gap: 1rem;
}
</style>
