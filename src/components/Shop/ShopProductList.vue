<template>
    <div class="grid p-20">
        <ShopProduct v-for="product in products" :product="product" />
    </div>
</template>

<script setup lang="ts">
import type { ProductInterface } from "@/types/product.interface";
import ShopProduct from "./ShopProduct.vue";

defineProps<{
    products: ProductInterface[];
}>();
</script>

<style scoped lang="scss">
.grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(200px, 1fr));
    grid-auto-rows: 400px;
    grid-gap: 1rem;
}
</style>
