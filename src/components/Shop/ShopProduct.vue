<template>
    <div class="product d-flex flex-column p-10">
        <div class="product-image">
            <!-- <img src="../../assets/macbookair.png" alt="Macbook Air M1" /> -->
        </div>
        <div class="p-10 d-flex flex-column">
            <h4>{{ product.title }}</h4>
            <p>{{ product.description }}</p>
            <div class="d-flex align-items-center">
                <span class="flex-fill">{{ product.price }} €</span>
                <button class="btn btn-primary">Ajouté au panier</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ProductInterface } from "@/types/product.interface";

defineProps<{
    product: ProductInterface;
}>();
</script>

<style scoped lang="scss">
.product {
    background-color: var(--white);
    border: 1px solid var(--border);
    border-radius: var(--border-radius);
    &-image {
        background-image: url("../../assets/macbookair.png");
        height: 250px;
        background-size: cover;
        background-position: center;
    }
}
</style>
