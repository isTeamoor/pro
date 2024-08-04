<template>
    <div class="wrapper">
        <router-link :to="{ name: 'home-ice' }" class="block marginTop">Home</router-link>
        <button-first :routerPath="'/dailyMenu-ice'" class="block marginTop">/check1</button-first>
    </div>
</template>

<script>
import buttonFirst from "../Buttons/button-first.vue"
export default {
    name: 'navbar-vertical',
    components: {
        buttonFirst
    }
}
</script>

<style scoped>
.wrapper {
    background-color: skyblue;
    border: 2px solid gray;
}

.block {
    display: block;
}

.marginTop {
    margin-top: 18px;
}
</style>