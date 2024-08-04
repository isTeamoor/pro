<template>
    <div class="flex-row">
        <navbar-vertical style="flex-grow: 1;"></navbar-vertical>
        <div class="display" style="flex-grow: 9;">
            <digital-clock></digital-clock>
        </div>
    </div>
</template>

<script>

import navbarVertical from "../Navigations/navbar-vertical.vue"
import digitalClock from "../Items/digital-clock.vue"

export default {
    name: 'home-ice',
    components: {
        navbarVertical,
        digitalClock
    },


}
</script>

<style scoped>
.flex-row {
    display: flex;
    flex-direction: row;
}

.flex-colm {
    display: flex;
    flex-direction: column;
}

.display {
    background-color: darkcyan;
    border: 2px solid black;
    height: 200px;
}
</style>