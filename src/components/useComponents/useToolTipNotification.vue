<!-- <template>
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

</script> -->

<template>
    <div @mouseover="openTooltip" @mouseleave="closeTooltip" ref="tooltipContainer" class="tooltip-parent">
        <div v-show="toggle" ref="tooltip" class="tooltip">{{ value }}</div>
        <slot />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({ value: String })

const tooltipContainer = ref(null)
const toggle = ref(false)
const tooltip = ref(null)
const left = ref(0)
const right = ref(0)
const top = ref(0)
const bottom = ref(0)
const timeout = ref(null)
const timeout2 = ref(null)

const openTooltip = (event) => {
    let currentElement = event.currentTarget
    left.value = currentElement.getBoundingClientRect().left
    right.value = currentElement.getBoundingClientRect().right
    top.value = currentElement.getBoundingClientRect().top
    bottom.value = currentElement.getBoundingClientRect().bottom

    if (tooltip.value instanceof HTMLElement) {
        if (left.value === 0 && right.value === 0) {
            tooltip.value.style.top = bottom.value + 'px'
        } else {
            if (left.value === 0) {
                tooltip.value.style.left = right.value + 'px'
            }

            if (right.value === 0) {
                tooltip.value.style.right = left.value + 'px'
            }
        }
    }

    timeout.value = setTimeout(() => {
        toggle.value = true
    }, 300);

    timeout2.value = setTimeout(() => {            
        toggle.value = false
    }, 1000);
}

const closeTooltip = () => {
    clearTimeout(timeout.value)
    clearTimeout(timeout2.value)
    toggle.value = false
}

</script>

<style scoped>
.tooltip-parent {
    @apply w-fit h-fit relative
}

.tooltip {
    @apply w-[130px] absolute top-[-100%] rounded-full px-3 bg-slate-400 p-2 z-[99999] text-center text-white translate-x-[-50%] left-[50%]
}

/* .tooltip::after {
    content: 'asdf';
    clip-path: polygon(0% 0%, 100% 50%, 100% 100%);
    background: #000;
    width: 15px;
    height: 15px;
    top: 0;
    z-index: 999;
    left: 50%;
    transform: translateX(-50%);
} */


</style>
