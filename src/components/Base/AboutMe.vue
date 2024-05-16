<template>
    <Transition appear>
        <div class="screen-big:transition-all grid screen-big:duration-300 screen-big:w-fit screen-big:p-2 screen-big:flex  screen-big:m-auto screen-big:gap-10 screen-big:px-5 relative screen-big:items-center pt-4 ">
            <div class="leading-6 mt-6 border-zinc-700 dark:border-slate-300 w-[90%] md:w-full pb-3 m-auto dark:text-slate-400 text-slate-700 font-mono relative screen-big:max-w-[550px]">
                <p class="font-black font-mono after:w-2 after:h-4 pl-5 after:bg-zinc-700 dark:after:bg-slate-300 after:absolute after:rounded-full after:left-[0%] after:translate-x-[-50%] after:top-[50%] after:translate-y-[-50%] relative border-l border-black dark:border-gray-200 text-lg md:text-xl">{{ stack }}</p>
                <div class="relative after:w-2 after:h-4 divl-5 after:bg-neutral-500 dark:after:bg-slate-300 after:top-[8px] after:absolute after:rounded-full after:-left-[0px] after:translate-x-[-50%] leading-[20px] border-l border-gray-500 text-sm md:text-base font-sans p-4 dark:text-slate-300" >
                    <img @click="write = !write" class="mr-1 w-5 h-5 inline rounded-md p-[1px] shadow-sm shadow-slate-400 font-bold dark:bg-neutral-500" src="/pen.svg" />
                    <span v-if="!write || write">{{ information }}</span>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import {ref} from 'vue'
const stack = 'FRONTEND WEB DEVELOPER'
const information = `I'm a frontend web developer with expertise in HTML, JavaScript, CSS, Vue.js, Tailwind CSS, Git, GitHub, and Firebase. Passionate about crafting captivating user experiences and turning designs into interactive realities. Dedicated to continuous learning and pushing the boundaries of web development. Contact me, let's build something amazing together!`

const write = ref(false)
</script>

<style scoped>
.v-enter-from {
    transform: translateX(-200px);
    z-index: -10;
    opacity: 0;
}

.v-enter-active {
    transition: all .6s ease-in;
}
</style>



























