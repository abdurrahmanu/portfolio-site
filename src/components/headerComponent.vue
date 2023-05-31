<template>
    <div class="text-[50px] w-full text-white font-black flex gap-4 place-content-center bg-teal-700 font-mono text-center border-black h-24 p-4 m-auto relative">        
    <span class="rotate-3 hover:rotate-1"><span class="hover:text-gray-400" v-for="alphabet in heading[0]">{{ alphabet }}</span></span>
    <span class="-rotate-6 hover:rotate-4"><span class="hover:text-gray-400" v-for="alphabet in heading[1]">{{ alphabet }}</span></span>
    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';

const heading = ['ABDULRAHMAN', 'AHMED']
</script>