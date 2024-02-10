<template>    
    <div class="p-[2px] w-fit md:scale-95 scale-[60%] lg:scale-100 dark:bg-white bg-black  h-fit  rounded-full">
        <div  @click="toggle" class="w-14 px-[2px] rounded-full dark:justify-end dark:bg-black justify-start bg-slate-200 flex items-center h-6">
            <div class="w-5 h-5 transition-all duration-[300ms] inline-block dark:bg-slate-300 bg-black rounded-full"></div>
        </div>
    </div>
</template>

<script setup>
import { useDarkMode } from '../../store/useDarkMode'

const darkmodeStore = useDarkMode()

const toggle = () => {
    darkmodeStore.darkMode = !darkmodeStore.darkMode
    localStorage.setItem('portfolioBgMode', darkmodeStore.darkMode)
}
</script>




