<template>
    <code v-if="direction === 'left'" class="italic relative text-black">
        <p @click="$emit('close')" class="w-fit absolute text-xl right-3 top-1">x</p>
        <p class="pl-2 text-center text-lg py-1 font-bold">VUE</p>
        <p class="pl-2 py-1">
            <span class="text-purple-800">import </span>
            <span class="text-yellow-500">{ <span class="text-blue-500">createApp</span> }</span>
            <span class="text-purple-800"> from</span> 
            <span class="brown-800">'vue'</span>
        </p>
        <p class="pl-2 py-1">
            <span class="text-purple-800">import </span> 
            <span class="brown-800">'./assets/tailwind.css'</span>
        </p>
        <p class="pl-2 py-1">
            <span class="text-purple-800">import </span>App <span class="text-purple-800">from</span>
            <span class="brown-300">'./App.vue'</span>
        </p>
        <p class="pl-2 py-1">
            <span>createApp(App).mount('#app')</span>
        </p>
    </code>
    <code v-if="direction === 'right'" class="italic text-black">
        <p @click="$emit('close')" class="w-fit absolute text-xl right-3 top-1">x</p>
        <p class="pl-2 text-center text-lg py-1 font-bold">JAVASCRIPT</p>
        <p class="py-1 pl-2">
            <span class="text-blue-700">let </span>
            <span class="text-blue-400">count</span>
            <span class="text-slate-700"> =</span>
            <span class="text-slate-700"> 0</span>
        </p>
        <p class="pl-2 py-1">
            <span class="text-purple-800">export default function </span>
            <span class="text-yellow-900">useIncrement </span>
            <span class="text-yellow-600"> ()</span> 
            <span class="text-orange-700"> {</span>
        </p>
        <p class="pl-7 py-1">
            <span class="text-blue-400">count</span>
            <span class="text-slate-700">++</span>
        </p>
        <p class="pl-7 py-1">
            <span class="text-purple-800"> return</span>
            <span class="text-purple-800"> {</span>
            <span class="text-blue-400">count</span>
            <span class="text-purple-800">}</span>
        </p>
        <p class="pl-2 py-1">
            <span class="text-orange-700">}</span>
        </p>
    </code>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    direction: String
})
</script>