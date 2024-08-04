<template>
    <span class="close-btn" @click="closePopup">&#10006;</span>
</template>

<script>
export default {
    name: 'round-x-button',
}
</script>

<style scoped>
.close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    background-color: #ff6f61;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s, box-shadow 0.3s;
}
</style>