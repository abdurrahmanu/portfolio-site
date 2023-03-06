<template>
    <div @click="$emit('toggle')" class="fixed grid place-content-center top-8 right-10 w-5 h-5 z-[9999] bg-white border border-black">
        <div v-if="open_sidebar" class="bg-gray-200 shadow-sm shadow-gray-300 relative border border-gray-200 w-[300px] h-[300px] grid rounded-full">
            <div @click="open_sidebar = true" class=" text-red-600 rounded-full cursor-pointer font-mono text-4xl place-self-center text-center ">x</div>
            <div class="active:scale-125 hover:bg=gray-600 font-mono font=black absolute uppercase p-1 left-2 top-[120px]"  v-for="list_item in list" :key="list_item"> {{ list_item }}</div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    open_sidebar: Boolean,

})

const list = ['ABOUT', 'PROJECTS', 'STACK', 'RESUME']

</script>