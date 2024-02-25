<template>
    <img @click="useDirection" class="h-6 w-6 rounded-full p-1 bg-zinc-400" :class="topClass, bottomClass" src="/arrow.svg" />
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
    top: {
        type: Boolean,
        default: false,
    },

    bottom: {
        type: Boolean,
        default: false
    },
})

const topClass = computed(() => {
    return props.top ? 'bottom-3 right-3 rotate-90'   : ''
})

const bottomClass = computed(() => {
    return props.bottom ? 'top-28 right-3 -rotate-90' : ''
})

const useDirection = () => {
    const height = document.documentElement.scrollHeight
    if (props.top) window.scrollTo({top: 0, behavior: 'smooth'})
    if (props.bottom) window.scrollTo(0, height)
}
</script>