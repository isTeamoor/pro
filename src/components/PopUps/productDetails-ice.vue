<template>
    <div class="popup">
        <div class="popup-content">
            <round-x-button @click="closePopup"></round-x-button>
            <p>Это небольшое pop-up окошко.</p>
        </div>
    </div>
</template>

<script>
import roundClose from '../Buttons/round-close.vue';
export default {
    name:'productDetails-popUp-ice',
    components:{'round-x-button':roundClose},
    methods: {
        closePopup() {
            this.$emit('close');
        }
    }
};
</script>

<style scoped>
.popup {
position: fixed;
top: 50%;
left: 50%;
width: 20%;
height: 20%;
background-color: rgba(0, 0, 0, 0.5);
display: flex;
align-items: center;
justify-content: center;
}

.popup-content {
background-color: white;
padding: 20px;
border-radius: 10px;
box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
position: relative;
max-width: 300px;
width: 100%;
}
</style>
