<script setup lang="ts">
import type { ProductCartInterface } from "@/types";
import { formatPrice } from "@/utils";
defineProps<{
    product: ProductCartInterface;
}>();

const emit = defineEmits<{
    (e: "removeProductFromCart", idProduct: number): void;
}>();
</script>

<template>
    <div class="mb-10 d-flex align-items-center product p-10">
        <strong class="mr-10">{{ product.title }}</strong>
        <span class="flex-fill mr-10">x {{ product.quantity }}</span>
        <span class="mr-10">{{ formatPrice(product.price) }}</span>
        <button
            @click="emit('removeProductFromCart', product.id)"
            class="btn btn-danger"
        >
            {{ product.quantity > 1 ? "Retirer" : "Supprimer" }}
        </button>
    </div>
</template>

<style scoped lang="scss">
.product {
    border: var(--border) 1px solid;
    border-radius: var(--border-radius);
    background: var(--light-1);
}
</style>
