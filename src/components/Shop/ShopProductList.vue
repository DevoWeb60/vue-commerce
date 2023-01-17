<template>
    <div class="grid p-20">
        <ShopProduct />
        <ShopProduct />
        <ShopProduct />
        <ShopProduct />
        <ShopProduct />
        <ShopProduct />
        <ShopProduct />
    </div>
</template>

<script setup lang="ts">
import ShopProduct from "./ShopProduct.vue";
</script>

<style scoped lang="scss">
.grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(200px, 1fr));
    grid-auto-rows: 400px;
    grid-gap: 1rem;
}
</style>
