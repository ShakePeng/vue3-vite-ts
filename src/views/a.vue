<template>
    <div>1111</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getBaseconfig } from '@/services'
export default defineComponent({
    setup() {
        console.log('a页面加载')
        console.log('env', import.meta.env)
        console.log(getBaseconfig)
        let req = {
            keyWords: ['checkinTopMsg']
        }
        getBaseconfig(req)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err, 'err')
            })
    }
})
</script>

<style></style>
