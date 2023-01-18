<script setup lang="ts">
import { DEFAULT_FILTERS, CATEGORIES } from "@/data/filters";
import type { FiltersInterface, FilterUpdate } from "@/types";
import { formatPrice } from "@/utils";
import { ref } from "vue";

const props = defineProps<{
    filters: FiltersInterface;
    minMaxPriceRange: [number, number];
    numberOfProducts: number;
}>();

const emit = defineEmits<{
    (e: "updateFilter", filterUpdate: FilterUpdate): void;
}>();

const handleClick = () => {
    emit("updateFilter", {});
    minPrice.value = props.minMaxPriceRange[0];
    maxPrice.value = props.minMaxPriceRange[1];
};

const step = "any";
const minPrice = ref(props.minMaxPriceRange[0]);
const maxPrice = ref(props.minMaxPriceRange[1]);
</script>

<template>
    <div class="p-20 d-flex flex-column">
        <section class="mb-20">
            <h3 class="mb-10">Rechercher</h3>
            <input
                :value="filters.search"
                type="text"
                placeholder="Rechercher par nom..."
                @input="
                    emit('updateFilter', {
                        search: ($event.target as HTMLInputElement).value,
                    })
                "
            />
        </section>
        <section class="mb-20">
            <h3 class="mb-10">Prix</h3>
            <div class="mb-5">
                <p class="my-0">minimum ({{ formatPrice(minPrice) }})</p>
                <input
                    type="range"
                    v-model="minPrice"
                    :min="props.minMaxPriceRange[0]"
                    :max="props.minMaxPriceRange[1]"
                    :step="step"
                    @input="
                        emit('updateFilter', {
                            priceRange: [
                                +($event.target as HTMLInputElement).value,
                                filters.priceRange[1],
                            ],
                        })
                    "
                    list="range"
                />
            </div>
            <div class="mb-5">
                <p class="my-0">maximum ({{ formatPrice(maxPrice) }})</p>
                <input
                    type="range"
                    v-model="maxPrice"
                    :min="props.minMaxPriceRange[0]"
                    :max="props.minMaxPriceRange[1]"
                    :step="step"
                    @input="
                        emit('updateFilter', {
                            priceRange: [
                                filters.priceRange[0],
                                +($event.target as HTMLInputElement).value,
                            ],
                        })
                    "
                    list="range"
                />
            </div>
            <datalist id="range">
                <option :value="0" :key="0" />
                <option
                    v-for="i in DEFAULT_FILTERS.priceRange[1] / 500"
                    :value="i * 500"
                    :key="i"
                />
            </datalist>
        </section>
        <section class="mb-20 flex-fill">
            <h3 class="mb-10">Catégories</h3>
            <p
                class="category my-0"
                :class="{ selected: filters.category === category.value }"
                v-for="category in CATEGORIES"
                @click="emit('updateFilter', { category: category.value })"
            >
                {{ category.label }}
            </p>
        </section>
        <small class="mb-5"
            >Nombre de résultat : <strong>{{ numberOfProducts }}</strong></small
        >
        <button class="btn btn-danger" @click="handleClick">
            Supprimer les filtres
        </button>
    </div>
</template>

<style scoped lang="scss">
.category {
    cursor: pointer;
    padding: 5px 10px;
    border-radius: var(--border-radius);
    border: 2px solid transparent;
    margin-bottom: 5px;
    transition: 0.1s ease-in-out;
    &.selected {
        background-color: var(--info-2);
        color: var(--white);
    }

    &:hover {
        border-color: var(--info-2);
    }
}
</style>
