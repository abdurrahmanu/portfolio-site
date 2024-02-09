<template>
            <div class="pt-10 screen-big:transition-all grid screen-big:duration-300 screen-big:w-fit screen-big:p-2 screen-big:flex  screen-big:m-auto screen-big:gap-10 screen-big:px-5 screen-big:items-center">
                <div class="leading-7 mt-6 border-zinc-700 dark:border-slate-300 w-[90%] md:w-full pb-3 m-auto dark:text-slate-400 text-slate-700 font-mono relative screen-big:max-w-[450px]">
                    <p class="font-black font-mono after:w-2 after:h-4 pl-5 after:bg-zinc-700 dark:after:bg-slate-300 after:absolute after:rounded-full after:left-[0%] after:translate-x-[-50%] after:top-[50%] after:translate-y-[-50%] relative border-l border-black dark:border-gray-200 text-3xl">{{ stack }}</p>
                    <p class="relative after:w-2 after:h-4 pl-5 after:bg-gray-500 dark:after:bg-slate-300 after:top-[8px] after:absolute after:rounded-full after:-left-[0px] after:translate-x-[-50%] leading-[20px] border-l border-gray-500 text-2xl font-sans bg-zinc-300 rounded-md p-4 shadow-sm shadow-slate-500">{{ information }}</p>
                </div>
            </div>

</template>

<script setup>
const stack = 'FRONTEND WEB DEVELOPER'
const information = `I'm a frontend web developer with expertise in HTML, JavaScript, CSS, Vue.js, Tailwind CSS, Git, GitHub, and Firebase. Passionate about crafting captivating user experiences and turning designs into interactive realities. Dedicated to continuous learning and pushing the boundaries of web development. Contact me, let's build something amazing together!`
</script>



























