<template>
    <Father></Father>
</template>

<script lang="ts">
import Father from '@/components/Child.vue'
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'App',
    components: {
        Father,
    },
    setup() {},
})
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
