<template>
    <div ref="container" id="about" class="text-center font-teal-900 bg-white py-16 pt-10 font-mono">
        <div class="grid m-auto w-fit hover:rotate-[360deg] transition-all duration-[3000ms] justify-center py-5" v-if="isBigScreen">
            <img class="w-40" src="../../public/avatar.svg" alt="">
        </div>
        <div class="m-auto w-[90%]">
            <h2 class="text-5xl font-extrabold py-2">ABOUT ME</h2>
            <p class="text-lg py-3">I am a frontend developer with passion for creating beautiful and functional websites. While I don't have any professional experience in web development, I've spent the last 1yr teaching myself the necessary skills through online courses and personal projects.</p>
            <p class="text-lg py-3">I'm proficient in HTML, CSS, JavaScript, VueJs, TailwindCss and I've also worked wiht frameworks such as SASS</p>
            <p class="text-lg py-3">in terms of education, I am an Undergraudate studying Chemical Engineering</p>
            <p class="text-lg py-3">My ultimate goal is to become a full stack web developer and contribute to meaningful pojects that make a difference in people's lives. I'm excited to continue learning and growing in this field and would love the opportunity to work with a team that shares passion for creating great websites.</p>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, watchEffect } from 'vue';
import { useOverlapNavBar } from '../composables/topOverlapsNavBar';
import { useScreenSize } from '../composables/useScreenSize';

const { isBigScreen } = useScreenSize()
const container = ref(null)
const containerTop = ref(null)
const containerBottom = ref(null)

onMounted(() => {
    containerBottom.value = container.value.getBoundingClientRect().bottom
    containerTop.value = container.value.getBoundingClientRect().top
})

watchEffect(() => {
    if (containerTop.value < 88 && containerBottom.value > 88) {
        useOverlapNavBar('white')
    }
})

</script>