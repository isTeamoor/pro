<template>
    <div class="wrapper">
        <productCard-ice v-for="product in data" :key="product.id" :details="product" class="element"></productCard-ice>
    </div>

</template>

<script>
import data from '../../data/menu-ice.js';
import productCardIce from '../Items/productCard-ice.vue';

export default {
    name: 'monthMenu-ice',
    components: { productCardIce },
    data() {
        return {
            data,
        }
    }
}
</script>

<style scoped>
.wrapper {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
.element {
   width:25%;
   margin: 20px;
}
</style>