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

button {
    padding: .3em .8em;
    border: 1px solid rgba(0, 0, 0, .1);
    background: linear-gradient(hsla(0, 0%, 100%, 0.2), transparent);
    border-radius: .2em;
    box-shadow: 0 .05em .25em rgba(0, 0, 0, .5);
    color: white;
    text-shadow: 0 -.05em .05em rgba(0, 0, 0, .5);
    font-size: 125%;
    line-height: 1.5;
    background-color: #c00;
}
</style>