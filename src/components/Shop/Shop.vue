<template>
    <div>
        <ShopProductList :products="products" />
    </div>
</template>

<script setup lang="ts">
import type { ProductInterface } from "@/types/product.interface";
import ShopProductList from "./ShopProductList.vue";

defineProps<{
    products: ProductInterface[];
}>();
</script>

<style scoped lang="scss"></style>
