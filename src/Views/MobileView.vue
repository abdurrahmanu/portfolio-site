<template>
    <div id="home" class=" pt-16  bg-neutral-950" v-if="!isBigScreen">
        <mainComponent />
        <MyProjects />
        <div class="text-slate-300 text-xs font-mono italic text-center pb-3">@Copyright {{ new Date().getFullYear() }}</div>
    </div>
</template>

<script setup>
import { useScreenSize } from '../composables/useScreenSize';
import mainComponent from '../components/mainComponent.vue'
import MyProjects from '../components/projectsComponents.vue';

const { isBigScreen } = useScreenSize()
</script>