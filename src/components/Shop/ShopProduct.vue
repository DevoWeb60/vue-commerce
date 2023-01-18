<script setup lang="ts">
import type { ProductInterface } from "@/types";
import { formatPrice } from "@/utils";

defineProps<{
    product: ProductInterface;
}>();

const emit = defineEmits<{
    (e: "addProductToCart", idProduct: number): void;
}>();
</script>

<template>
    <div class="product d-flex flex-column p-10">
        <div
            class="product-image"
            :style="{
                backgroundImage: `url(./src/assets/images/products/${product.image})`,
            }"
        ></div>
        <div class="p-10 d-flex flex-column">
            <h4>{{ product.title }}</h4>
            <p>{{ product.description }}</p>
            <div class="d-flex align-items-center">
                <span class="flex-fill">{{ formatPrice(product.price) }}</span>
                <button
                    @click="emit('addProductToCart', product.id)"
                    class="btn btn-primary"
                >
                    Ajouter
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.product {
    background-color: var(--white);
    border: 1px solid var(--border);
    border-radius: var(--border-radius);
    &-image {
        height: 250px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }
}
</style>
