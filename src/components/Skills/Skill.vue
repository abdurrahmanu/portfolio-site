<template>
        <div class="relative" @mouseover="toggleTooltip = true" @mouseleave="toggleTooltip = false">
            <Tooltip :value="svg" :toggle="toggleTooltip" class="screen-small:hidden" />
            <div class="w-fit">
            <div class="rounded-full border-2 border-black bg-slate-300 w-fit m-auto screen-small:hidden">
                <div class="grid w-fit m-auto justify-center p-2">
                    <img class="w-4 md:w-6" :src="`/${svg}.svg`" alt="">
                </div>
            </div>
        </div>
        <div class="hidden screen-small:block text-center text-sm font-mono uppercase border px-1 rounded-md hover:border-blue-400 bg-zinc-300">{{ svg }}</div>
    </div>
</template>

<script setup>
import Tooltip from '../Notifications/Tooltip.vue'
import {ref, computed} from 'vue'

const toggleTooltip = ref(false)

const props = defineProps({
    index: Number,
    svg: String,
})

const transition = computed(() => {
    return `all ${(props.index + 2) / 10} ease-in`
})

</script>

