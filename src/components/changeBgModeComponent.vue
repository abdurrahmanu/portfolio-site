<template>    
    <!-- <useToolTipNotification> -->
        <!-- <template #hover> -->
            <div class="p-[2px] w-fit md:scale-95 scale-90 lg:scale-100 dark:bg-white bg-black fixed top-[14px] md:top-6 right-1 lg:right-4 z-[99999] rounded-full">
                <div  @click="toggle" class="w-14 px-[2px] rounded-full dark:justify-end dark:bg-black justify-start bg-slate-200 flex items-center h-6">
                    <div class="w-5 h-5 transition-all duration-300ms inline-block dark:bg-slate-300 bg-black rounded-full"></div>
                </div>
            </div>
        <!-- </template> -->
        <!-- <div class="max-w-[100px] w-fit text-center">toggle mode</div> -->
    <!-- </useToolTipNotification> -->
</template>

<script setup>
import { ref, defineEmits, defineProps, onBeforeMount, onUpdated, onMounted, watchEffect } from 'vue'
import useToolTipNotification from './useToolTipNotification.vue';

const toggleDarkMode = ref(false)
const emit = defineEmits(['toggleDarkMode'])

const toggle = () => {
    toggleDarkMode.value = !toggleDarkMode.value
    localStorage.setItem('portfolioBgMode', toggleDarkMode.value)
    emit('toggleDarkMode', toggleDarkMode.value)
}

onBeforeMount(() => {
    if (localStorage.getItem('portfolioBgMode').length) {
        if (localStorage.getItem('portfolioBgMode') == 'true') {
            toggleDarkMode.value = true
        } else if (localStorage.getItem('portfolioMode' == 'false')) {
            toggleDarkMode.value = false
        }
        emit('toggleDarkMode', toggleDarkMode.value)
    } else {
        localStorage.setItem('portfolioBgMode', toggleDarkMode.value)
        emit('toggleDarkMode', toggleDarkMode.value)
    }
})

</script>



