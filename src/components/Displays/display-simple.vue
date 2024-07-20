<template>
    <div class="wrapper">
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'display-simple'
}
</script>

<style scoped>
.wrapper {
    background-color: bisque;
    border: 2px solid black;
    height: 200px;
}
</style>