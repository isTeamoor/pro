<template>
    <div class="wrapper">
        <h2 class="date">{{ details.day }} {{ details.month }} - {{ details.weekDay }}</h2>
        <div class="img"></div>
        <h2>{{ details.name }}</h2>
        <h3>{{ details.title }}</h3>
        <button-details-ice @click="showPopup">Подробнее</button-details-ice>
        <button-order-ice>Хочу</button-order-ice>
        <productDetails-popUp-ice v-if="isPopupVisible" @close="closePopup"></productDetails-popUp-ice>
        
    </div>
</template>

<script>
import buttonOrderIce from '../Buttons/order-ice.vue';
import buttonDetailsIce from '../Buttons/details-ice.vue';
import productDetailsIce from '../PopUps/productDetails-ice.vue';
export default {
    name: 'productCard-ice',
    components: {
        'button-order-ice': buttonOrderIce,
        'button-details-ice': buttonDetailsIce,
        'productDetails-popUp-ice': productDetailsIce},
    props: ['details'],
    data(){
        return{
            isPopupVisible:false
        }
    },
    methods:{
        showPopup(){
            this.isPopupVisible = true
        },
        closePopup(){
            this.isPopupVisible = false
        }
    }
};
</script>

<style scoped>
.wrapper {
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    background-color: #fff;
}

.img {
    background-image: linear-gradient(black, yellowgreen);
    background-position: center;
    margin-bottom: 16px;
    width: 100%;
    height: 250px;
    border-radius: 8px;
}

h2,
h3, .date {
    margin: 8px 0;
    text-align: center;
}
h3 + button {
    margin-bottom: 10px;
}

</style>