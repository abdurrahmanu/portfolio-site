<template>
    <header class=" bg-white shadow-sm shadow-slate-400 z-[999] p-7 h-20 text-3xl fixed top-0 left-0 w-full flex justify-between">
        <div class="text-black text-xl font-mono">AHMED ABDULRAHMAN</div>
        <ul v-if="is_big_screen" class="flex gap-3 text-sm">
            <li>PROJECTS</li>
            <li>ABOUT</li>
            <li>STACKS</li>
            <li>RESUME</li>
        </ul>
    </header>
</template>

<script setup>
import {defineProps} from 'vue'

const props = defineProps({
    is_big_screen: Boolean,
})

</script>