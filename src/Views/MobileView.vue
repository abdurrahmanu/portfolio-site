<template>
    <div id="home" class="dark:bg-neutral-900 bg-slate-200 pt-[114px]" v-if="!isBigScreen">
        <mainComponent />
        <MyProjects />
        <CopyrightComponent />
    </div>
</template>

<script setup>
import { useScreenSize } from '../composables/useScreenSize';
import mainComponent from '../components/mainComponent.vue'
import MyProjects from '../components/projectsComponents.vue';
import { ref, defineProps, watchEffect } from 'vue'
import CopyrightComponent from '../components/copyrightComponent.vue';

const { isBigScreen } = useScreenSize()
</script>