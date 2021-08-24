<template>
    <div>我是子组件</div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
export default defineComponent({
    setup() {
        const a = inject('pzd')
        return {
            a
        }
    }
})
</script>

<style></style>
