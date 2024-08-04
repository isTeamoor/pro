<template>
    <div class="flex-row">
        <navbar-vertical style="flex-grow: 1;"></navbar-vertical>
        <div class="display" style="flex-grow: 150;">
            <div class="title">Ежедневное меню</div>
            <monthMenu-ice></monthMenu-ice>
        </div>
    </div>
</template>

<script>
import navbarVertical from "../Navigations/navbar-vertical.vue"
import monthMenuIce from "../Lists/monthMenu-ice.vue";

export default {
    name: 'dailyMenu-ice',
    components: {
        navbarVertical,
        monthMenuIce
    }
}
</script>

<style scoped>
.flex-row {
    display: flex;
    flex-direction: row;
}

.display {
    background-color: bisque;
    border: 2px solid black;
    height: 100%;
}

.title {
    text-align: center;
    font-size: 200%;
    margin: 20px;
}
</style>