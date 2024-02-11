<template>
    <div 
    @click="route(item)" 
    class=" hover:text-black font-mono uppercase font-black border border-transparent hover:border-black hover:rounded-md text-sm md:text-base px-[2px] md:px-2 lg:px-3 dark:text-slate-100 dark:hover:border-slate-400">
        {{ item }}
    </div>
</template>

<script setup>
const emit = defineEmits(['contact-modal']);
const props = defineProps({
    item: String,
})

const route = (arg) => {
    if (arg === 'Github') window.open('https://github.com/abdurrahmanu', '_blank')
}
</script>



