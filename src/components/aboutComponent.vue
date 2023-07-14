<template>
    <div ref="container" class="text-center relative font-teal-900 bg-white font-mono pb-4">
        <div id="about">
            <div class="h-[70px] w-full"></div>
            <div class="grid m-auto w-fit hover:rotate-[360deg] transition-all duration-[3000ms] justify-center py-5" v-if="isBigScreen">
                <img class="w-40" src="../../public/avatar.svg" alt="">
            </div>
            <div class="m-auto w-[90%] text-[13px]">
                <h2 class="md:text-5xl text-3xl leading-7 font-extrabold py-2">ABOUT ME</h2>
                <p class="md:text-lg py-2">I am a frontend developer with passion for creating beautiful and functional websites. While I don't have any professional experience in web development, I've spent the last 1yr teaching myself the necessary skills through online courses and personal projects.</p>
                <p class="md:text-lg py-2">I'm proficient in HTML, CSS, JavaScript, VueJs, TailwindCss and I've also worked wiht frameworks such as SASS</p>
                <p class="md:text-lg py-2">in terms of education, I am an Undergraudate studying Chemical Engineering</p>
                <p class="md:text-lg py-2">My ultimate goal is to become a full stack web developer and contribute to meaningful pojects that make a difference in people's lives. I'm excited to continue learning and growing in this field and would love the opportunity to work with a team that shares passion for creating great websites.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, watchEffect, defineEmits } from 'vue';
import { useScreenSize } from '../composables/useScreenSize';
import { useOverlapNavBar } from '../composables/topOverlapsNavBar';

const { isBigScreen, midScreen } = useScreenSize()
const container = ref(null)
const containerTop = ref(null)
const containerBottom = ref(null)

</script>