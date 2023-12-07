<script setup>
import HomeView from './Views/HomeView.vue';
import { useDarkMode } from '../src/store/useDarkMode'
const darkMode = useDarkMode()
</script>

<template>
    <div 
    :class="[darkMode.toggleDarkMode]" 
    class="bg-neutral-600">
        <HomeView />
    </div>
</template>




























