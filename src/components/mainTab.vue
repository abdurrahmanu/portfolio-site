<template>
    <div class="py-20 pt-5">
        <div class="bg-teal-700 shadow-md shadow-black transition duration-75 rounded-tl-none rounded-br-none
        hover:shadow-black hover:shadow-sm text-white leading-7 min-h-[300px] grid place-content-center p-2 rounded-3xl text-center w-[90%] max-w-[550px] m-auto">
            <div class="grid animate rounded-full justify-center w-fit m-auto bg-black hover:bg-white p-4">
                <img class="w-20" src="../../public/muslim_man.svg" alt="">
            </div>
            <p class="text-lg pt-2">AHMED ABDULRAHMAN</p>
            I am a frontend developer, my stack is 
            <p>HTML, JavaScript, CSS, VueJs, NuxtJs, TailwindCSS</p>
        </div>
    </div>
</template>

<script setup>
import { useScreenSize } from '../composables/useScreenSize';

const { midScreen } = useScreenSize()

</script>

<style>
.animate {
    animation: animate 0.8s infinite;
    transition: all ease 1s;
}

@keyframes animate {
    0% {
        scale: 90%;
        opacity: 0.5
    };
    100% {
        scale: 100%;
    }
}
</style>