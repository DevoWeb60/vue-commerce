<template>
    <div class="product d-flex flex-column p-10">
        <div class="product-image">
            <!-- <img src="../../assets/macbookair.png" alt="Macbook Air M1" /> -->
        </div>
        <div class="p-10 d-flex flex-column">
            <h4>Macbook Air M1</h4>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae alias natus quod id dicta iusto fugit. Sed voluptas
                modi molestias fugiat perferendis qui, odio omnis.
            </p>
            <div class="d-flex align-items-center">
                <span class="flex-fill">1200 €</span>
                <button class="btn btn-primary">Ajouté au panier</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

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
