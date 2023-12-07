<template>
    <div id="download" class="py-10 sm:py-5 md:py-0">
        <div class="relative">
            <div @click="downloadResume" class="hidden screen-xs:block text-sm text-center py-2 p-2">Download</div>
            <div class="button-border">
                <button @click="downloadResume" class="button">
                    <img class="w-5 z-10 block screen-xs:hidden" src="programmer.svg" /> 
                    <span class="button-text block screen-xs:hidden">Download Resume</span> 
                    <img class="w-4 -rotate-90" src="arrow.svg" /> 
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
const downloadResume = () => window.open('resume.pdf')
</script>

<style scoped>
.button-border {
    @apply w-fit h-fit dark:bg-gray-600 hover:dark:bg-green-400 hover:bg-blue-400 p-[3px] top-[50%] md:top-0 md:translate-y-0 translate-y-[50%] flex place-content-center rounded-full m-auto font-mono
}
.button {
    @apply rounded-full bg-slate-100 dark:bg-zinc-500 dark:text-neutral-900 shadow m-auto relative p-2 text-slate-700 sm:px-6 uppercase text-sm flex items-center gap-2
}

.button-text {
    @apply z-10 dark:text-white
}
</style>