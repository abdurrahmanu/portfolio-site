<template>
    <div  class="p-[2px] md:scale-95 scale-90 lg:scale-100 dark:bg-white bg-black fixed top-[14px] md:top-6 right-4 z-[99999] rounded-full">
        <div  @click="toggle" class="w-14 px-[2px] rounded-full dark:justify-end dark:bg-black justify-start bg-slate-200 flex items-center h-6">
            <div class="w-5 h-5 transition-all duration-300ms inline-block dark:bg-slate-300 bg-black rounded-full"></div>
        </div>
    </div>
</template>

<script setup>
import {ref, defineEmits, onBeforeMount, onMounted, watch} from 'vue'

const toggleDarkMode = ref(false)
const emit = defineEmits(['toggleDarkMode'])

const toggle = () => {
    toggleDarkMode.value = !toggleDarkMode.value
    emit('toggleDarkMode', toggleDarkMode.value)
    localStorage.setItem('portfolioIsDarkMode', toggleDarkMode.value)
}

onMounted(() => {
    if (localStorage.getItem('portfolioIsDarkMode')) {
        if (localStorage.getItem('portfolioIsDarkMode') === 'true') {
            toggleDarkMode.value = true
        } else {
            console.log(toggleDarkMode.value);
            toggleDarkMode.value = false
        }
        emit('toggleDarkMode', toggleDarkMode.value)
    } else {
        localStorage.setItem('portfolioIsDarkMode', toggleDarkMode.value)
    }
})

</script>



