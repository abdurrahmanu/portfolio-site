<template>
    <div class="svgs-container">
        <div @click="go(index)" class="svg" v-for="(svgName, index) in svgsNames" 
        :key="index">
            <img class="w-7 md:w-10" :src="`/${svgName}.svg`" alt="">
        </div>
    </div>
    <Copyright />
</template>

<script setup>
import Copyright from '../Copyright.vue'
const svgsNames = ['linkedin', 'github', 'email']

const go = (index) => {
    if (svgsNames[index] === 'email') {
        window.open('mailto:ahmedabdulrahman103@gmail.com')
    } else if (svgsNames[index] === 'github') {
        window.open('https://github.com/abdurrahmanu')
    } else {
        window.open('linkedin.com')
    }
}
</script>

<style scoped>
.svgs-container {
    @apply flex justify-center mx-auto gap-9 pt-5 dark:bg-neutral-900
}

.svg {
    @apply p-2 hover:animate-bounce border-2 border-black transition-all delay-75 rounded-full
}
</style>