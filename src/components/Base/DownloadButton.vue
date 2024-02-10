<template>
    <div>
        <div class="md:text-lg text-xs w-fit h-fit dark:bg-black dark:hover:bg-green-400 hover:bg-blue-400 p-[1px] flex place-content-center rounded-full m-auto font-mono">
            <button @click="downloadResume" class="rounded-full bg-slate-100 dark:bg-zinc-700 dark:text-neutral-900 shadow m-auto relative p-2 text-slate-700 sm:px-6 uppercase flex items-center gap-2">
                <img class="w-5 z-10 block screen-xs:hidden screen-small:hidden" src="/programmer.svg" /> 
                <span class="screen-small:block hidden">Download</span>
                <span class=" z-10 dark:text-white block screen-small:hidden">Download Resume</span> 
                <img class="w-4 -rotate-90" src="/arrow.svg" /> 
            </button>
        </div>
    </div>
</template>

<script setup>
const downloadResume = () => window.open('resume.pdf')
</script>
