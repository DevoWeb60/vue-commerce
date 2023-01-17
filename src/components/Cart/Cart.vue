<script setup lang="ts">
import type { ProductCartInterface } from "@/types";
import { computed } from "vue";
import CartProductList from "./CartProductList.vue";
import { formatPrice } from "@/utils";

const props = defineProps<{
    cart: ProductCartInterface[];
}>();

const emit = defineEmits<{
    (e: "removeProductFromCart", idProduct: number): void;
}>();

const totalPrice = computed(() => {
    const value = props.cart.reduce((acc, product) => {
        return acc + product.price * product.quantity;
    }, 0);
    return formatPrice(value);
});
</script>

<template>
    <div class="p-20 d-flex flex-column">
        <h2 class="mb-10">Panier</h2>
        <CartProductList
            class="flex-fill"
            :cart="cart"
            @remove-product-from-cart="emit('removeProductFromCart', $event)"
        />
        <button class="btn btn-success">Commander ({{ totalPrice }})</button>
    </div>
</template>

<style scoped lang="scss"></style>
