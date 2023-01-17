<script setup lang="ts">
import type { ProductInterface } from "@/types";
import ShopProductList from "./ShopProductList.vue";

defineProps<{
    products: ProductInterface[];
}>();

const emit = defineEmits<{
    (e: "addProductToCart", idProduct: number): void;
}>();
</script>

<template>
    <div>
        <ShopProductList
            :products="products"
            @add-product-to-cart="emit('addProductToCart', $event)"
        />
    </div>
</template>

<style scoped lang="scss"></style>
