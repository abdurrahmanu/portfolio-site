<template>
    <div class="flex sm:p-5 gap-3 items-center m-auto w-fit p-3">
        <clockSvg v-if="!verySmall" />
        <div :class="{'text-xs' : verySmall}" class="font-bold sm:text-4xl font-mono"><span>{{ hours }}</span>:<span>{{ minutes }}</span>:<span>{{ seconds }}</span></div>
    </div>
</template>

<script setup>
import { ref, watch, watchEffect } from 'vue';
import clockSvg from './svgs/clockSvg.vue';
import { useScreenSize } from '../composables/useScreenSize';

const { verySmall } = useScreenSize()

const seconds = ref(new Date().getSeconds())
const minutes = ref(new Date().getMinutes())
const hours = ref(new Date().getHours())
const day = ref(new Date().toLocaleTimeString)

watchEffect(() => {
    if (seconds.value) {
        seconds.value = new Date().getSeconds()
        minutes.value = new Date().getMinutes()
        hours.value = new Date().getHours()
        day.value = new Date().toLocaleTimeString()
    }
})

function timeFormat() {
    let formatted = ''

    seconds

    return formatted
}

</script>

<style lang="scss" scoped>

</style>