<template>
    <div class="pt-20 pb-12">
        <div class="transition duration-75 rounded-tl-none rounded-br-none
        text-white leading-7 min-h-[300px] grid place-content-center rounded-3xl text-center w-[90%] max-w-[550px] m-auto">
            <div class="grid rounded-full justify-center w-fit m-auto bg-black hover:bg-gray-800 p-6 hover:scale-[90%] transition-all duration-75">
                <img class="w-32" src="../../public/muslim_man.svg" alt="">
            </div>
            <div class="font-mono pt-10 w-[90%] text-[13px] m-auto text-gray-400">
                <p class="text-lg pt-2">AHMED ABDULRAHMAN</p>
                I am a frontend developer, my stack is 
                <p>HTML, JavaScript, CSS, VueJs, NuxtJs, TailwindCSS</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useScreenSize } from '../composables/useScreenSize';
const { midScreen } = useScreenSize()

</script>

<style>
</style>




