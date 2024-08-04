<template>
    <div id="digital-clock"></div>
</template>

<script>
import { showClock } from '../../JS/misc';

export default {
    name: 'digital-clock',
    mounted() {
        showClock(document.querySelector('#digital-clock'))
    }
};
</script>

<style scoped>
#digital-clock {
    width: 80px;
    height: 50px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 100%;
    border: 2px solid black;
    border-radius: 5%;
    background-image: linear-gradient(45deg, #ff7e5f, #feb47b);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>