<template>
    <h1>homepage</h1>
    <div id="currentTime"></div>
</template>

<script>
import { showClock } from '../../JS/misc';
export default {
    name: 'home',
    mounted() {
        const element = document.querySelector('#currentTime')
        showClock(element)
    }

}
</script>

<style></style>