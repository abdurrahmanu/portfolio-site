<template>
    <div class="scroller">
        <div @click="useDirection">{{ scrollerDirection() }}</div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['scrollerDirection'])
const scrollPosition = ref(window.scrollY)
const windowHeight = ref(window.innerHeight)

window.addEventListener('scroll', event => {
    scrollPosition.value = window.scrollY
    emit('scrollerDirection', scrollerDirection())
})

window.addEventListener('resize', event => {
    windowHeight.value = window.innerHeight
    emit('scrollerDirection', scrollerDirection())
})

const scrollerDirection = () => {
    const halfScreenHeight = Math.floor(windowHeight.value / 2)
    if (halfScreenHeight < scrollPosition.value) return 'T'
    return 'B'
}

const useDirection = () => {
    const height = document.documentElement.scrollHeight
    if (scrollerDirection() === 'T')  window.scrollTo(0,0)
    else if (scrollerDirection() === 'B')  window.scrollTo(0, height)
}

</script>

<style scoped>
.scroller {
    @apply mb-2  fixed bottom-0 shadow shadow-black left-[50%] translate-x-[-50%] rounded-full bg-zinc-600  z-[999999999] text-white font-mono font-bold text-[10px] h-6 w-6 flex items-center  justify-center
}

.now {
    background-color:  #cddfdf;
}
</style>

