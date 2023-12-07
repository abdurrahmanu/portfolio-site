<template>
    <button draggable="true" @mouseover="moveAway" ref="element"></button>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
// event.srcElement.style.bottom = bottomOffset + 10 + 'px'
// event.srcElement.style.top = topOffset + 10 + 'px'

const shift = ref(0)
const width = ref(0)
const height = ref(0)
const leftOffset = ref(0)
const rightOffset = ref(0)
const element = ref(null)
const initialLeftPosition = ref(0)
const timerID = ref(null)

onMounted(() => {
    initialLeftPosition.value = element.value.getBoundingClientRect().left
}) 

const props = defineProps({
    index: Number
})

const topDistance = computed( () => Math.round(Math.random() * 200) + 'px')
const leftDistance = computed(() => Math.round(Math.random() * 200) + 'px')

const moveAway = (event) => {
    clearTimeout(timerID.value)
    let topOffset = event.srcElement.getBoundingClientRect().top
    leftOffset.value = event.srcElement.getBoundingClientRect().left
    let bottomOffset = event.srcElement.getBoundingClientRect().bottom
    rightOffset.value = event.srcElement.getBoundingClientRect().right
    height.value = event.srcElement.getBoundingClientRect().height
    width.value = event.srcElement.getBoundingClientRect().width
    let spacing = 20

    // if user clicks left of element, it moves right if there is enough room for movement.
    if (rightOffset.value - event.x > event.x - leftOffset.value && event.x < window.innerWidth - (width.value + spacing)) {   
        shift.value = event.x - leftOffset.value

            if (event.srcElement.style.left) {
                let value = +event.srcElement.style.left.slice(0, -2)
                event.srcElement.style.left = spacing + value + shift.value + 'px';
            }
            else {
                event.srcElement.style.left = leftOffset.value + spacing + shift.value + 'px';
            }
    }

        // if user clicks right of the element, it moves left if there is enough room for movement
        if (event.x - leftOffset.value > rightOffset.value - event.x && event.x > width.value + spacing) {
            shift.value = rightOffset.value - event.x 

            if (event.srcElement.style.left) {
                let value = +event.srcElement.style.left.slice(0, -2)
                event.srcElement.style.left = value - (spacing + shift.value) + 'px';
            }
            else {
                event.srcElement.style.left = (leftOffset.value - (spacing + shift.value)) + 'px';
            }        
        }

        timerID.value = setTimeout(() => {
            event.srcElement.style.left = initialLeftPosition.value + 'px'
        }, 2000);
}

</script>

<style scoped>
button {
    transition: all;
    transition-duration: 300ms;
    top: v-bind(topDistance);
    left: v-bind(leftDistance);
}

button {
    @apply bg-neutral-700 p-2 text-[10px] h-1 w-1 rounded-full hover:bg-neutral-800
    text-center text-white font-bold px-6 absolute z-[99999999999]
}

</style>
