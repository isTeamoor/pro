<template>
    <button @click="handleClick">
        <span class="slot">
            <slot></slot>
        </span>
    </button>
</template>

<script>
export default {
    name: 'button-first',
    props: {
        routerPath: {
            type: String,
            required: true
        }
    },
    methods: {
        handleClick() {
            this.$router.push(this.routerPath)
        }
    }
}
</script>

<style scoped>
.slot {
    color: gray;
    font-size: large;
    padding: 20px;
}
</style>