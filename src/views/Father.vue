<template>
    <div>我是父组件</div>
    <Child></Child>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch, Ref, provide } from 'vue'
import { getBaseconfig } from '@/services'
import Child from '@/components/Child.vue'
export default defineComponent({
    components: {
        Child
    },
    setup() {
        console.log(this)
        console.log('env', import.meta.env)
        console.log(getBaseconfig)
        let req = {
            keyWords: ['checkinTopMsg']
        }
        // getBaseconfig(req)
        //     .then(res => {
        //         console.log(res)
        //     })
        //     .catch(err => {
        //         console.log(err, 'err')
        //     })
        provide('pzd', 111)
        return {
            a: 1,
            b: 2
        }
    }
})
</script>

<style></style>
