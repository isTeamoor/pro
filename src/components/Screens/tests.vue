<template>
    <div class="test">
        <div class="subtest"></div>
    </div>
</template>
<script>
export default {
    name:'test'
}
</script>
<style scoped>
.subtest {
    display: inline-block;
    width: 300px;
    height: 200px;
    border: 1px solid blue;
    background: yellow;
    background-image: repeating-linear-gradient(to right, black, black 15px, transparent 30px);


    
    
}
</style>