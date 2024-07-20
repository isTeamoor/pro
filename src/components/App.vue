<template>
    <div class="flex flex-row">
        <navbar-vertical style="flex-grow: 1;"></navbar-vertical>
        <display-simple style="flex-grow: 9;"></display-simple>
    </div>
</template>

<script>
//Navigations
import navbarVertical from "./Navigations/navbar-vertical.vue"

//Displays
import displaySimple from "./Displays/display-simple.vue"

export default {
    components: {
        //Navigations
        navbarVertical,

        //Displays
        displaySimple
    }
};
</script>

<style scoped>
.flex {
    display: flex;
}

.flex-row {
    flex-direction: row;
}
</style>