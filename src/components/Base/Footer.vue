<template>
    <div class="flex justify-between items-center p-3">
        <div></div>
        <div class="dark:text-slate-300 text-black font-mono italic text-center">&copy{{ new Date().getFullYear() }}</div>
        <Scroller top />
    </div>
</template>

<script setup>
import Scroller from '../Scroller.vue';
</script>