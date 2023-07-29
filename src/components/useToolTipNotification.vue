<template>
    <div ref="hoverElement" @focus="show" @blur="hide" @mouseenter="show" @mouseleave="hide" class="w-fit h-fit">
        <slot name="hover" />
    </div>

    <div ref="tooltipElement" v-show="tooltipToggle" class="bg-white z-[999] p-1 py-0 text-xs border border-black w-fit h-fit text-black rounded-md fixed">
        <slot />
    </div>
</template>

<script setup>
import { ref, defineEmits, watchEffect, defineProps, onMounted } from 'vue';

const emit = defineEmits(['false', 'true'])
const props = defineProps({
    target: String
})
const hoverElement = ref(null)
const tooltipElement = ref(null)
const tooltipToggle = ref(false)
const left = ref(0)
const mouseIn = ref(false)
const mouseOut = ref(true)
const right = ref(0)
const top = ref(0)

onMounted(() => {
    if (hoverElement.value instanceof HTMLElement && hoverElement.value.firstElementChild) {
        top.value = hoverElement.value.firstElementChild.getBoundingClientRect().top
        left.value = hoverElement.value.firstElementChild.getBoundingClientRect().left
        right.value = hoverElement.value.firstElementChild.getBoundingClientRect().right
    }
})

const show = () => {
    mouseIn.value = true
    mouseOut.value = false

    setTimeout(() => {     
        if (mouseOut.value === false) {
            tooltipToggle.value = true
            tooltipElement.value.style.top = top.value + 40 + 'px'
            tooltipElement.value.style.left = left.value + 'px'
        } else return
    }, 1000);

    setTimeout(() => {
        tooltipToggle.value = false
    }, 3000);
}

const hide = () => {
    mouseIn.value = false
    tooltipToggle.value = false
    mouseOut.value = true
}

</script>
