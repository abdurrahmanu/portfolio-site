<template>
    <div class="flex justify-center items-center p-3 relative">
        <div class="dark:text-slate-300 text-black font-mono italic text-center">&copy{{ new Date().getFullYear() }}</div>
        <Scroller top />
    </div>
</template>

<script setup>
import Scroller from '../Scroller.vue';
</script>