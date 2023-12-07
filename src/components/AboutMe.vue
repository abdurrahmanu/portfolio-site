<template>
    <div class="about-container">
        <p class="heading">{{ stack }}</p>
        <p class="information">{{ information }}</p>
    </div>
</template>

<script setup>
const stack = 'FRONTEND WEB DEVELOPER'
const information = `I'm a frontend web developer with expertise in HTML, JavaScript, CSS, Vue.js, Tailwind CSS, Git, GitHub, and Firebase. Passionate about crafting captivating user experiences and turning designs into interactive realities. Dedicated to continuous learning and pushing the boundaries of web development. Contact me, let's build something amazing together!`
</script>

<style scoped>
.about-container {
    @apply leading-7 mt-6 border-zinc-700 dark:border-slate-300 w-[90%] md:w-full pb-3 m-auto dark:text-slate-400 text-slate-700 font-mono relative text-[10px] sm:text-xs md:text-sm lg:text-base screen-big:max-w-[450px]
}

.heading {
    @apply font-black font-mono after:w-2 after:h-4 pl-5 after:bg-zinc-700 dark:after:bg-slate-300 after:absolute after:rounded-full after:left-[0%] after:translate-x-[-50%] after:top-[50%] after:translate-y-[-50%] relative text-lg border-l border-black dark:border-gray-200
}

.information {
    @apply relative after:w-2 after:h-4 pl-5 after:bg-gray-500 dark:after:bg-slate-300 after:top-[8px] after:absolute after:rounded-full after:-left-[0px] after:translate-x-[-50%] leading-7 text-xs md:text-[14px] border-l border-gray-500
}

</style>




























