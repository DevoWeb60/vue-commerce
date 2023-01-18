<script setup lang="ts">
import type { FiltersInterface, FilterUpdate, ProductInterface } from "@/types";
import ShopFilters from "./ShopFilters.vue";
import ShopProductList from "./ShopProductList.vue";

const props = defineProps<{
    products: ProductInterface[];
    filters: FiltersInterface;
}>();

const emit = defineEmits<{
    (e: "addProductToCart", idProduct: number): void;
    (e: "updateFilter", filterUpdate: FilterUpdate): void;
}>();

const getRangePriceProduct = () => {
    return [
        Math.min(...props.products.map((product) => product.price)),
        Math.max(...props.products.map((product) => product.price)),
    ] as [number, number];
};
const minMaxPriceRange: [number, number] = getRangePriceProduct();
</script>

<template>
    <div class="d-flex">
        <ShopFilters
            :filters="filters"
            :number-of-products="products.length"
            :min-max-price-range="minMaxPriceRange"
            @update-filter="emit('updateFilter', $event)"
            class="shop-filter"
        />
        <ShopProductList
            class="flex-fill"
            :products="products"
            @add-product-to-cart="emit('addProductToCart', $event)"
        />
    </div>
</template>

<style scoped lang="scss">
.shop-filter {
    flex: 0 0 200px;
}
</style>
