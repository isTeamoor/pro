<template>
    <div class="wrapper">
        <router-link :to="{ name: 'home' }" class="block marginTop">Home</router-link>
        <router-link :to="{ name: 'check1' }" class="block marginTop">check1</router-link>
        <button-first :routerPath="'/check1'" class="block marginTop">/check1</button-first>
        <button-first :routerPath="'/check2'" class="block marginTop">/check2</button-first>
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