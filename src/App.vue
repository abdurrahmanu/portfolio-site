<script setup>
import HomeView from './Views/HomeView.vue';
import { useDarkMode } from '../src/store/useDarkMode'
import windowClick from './components/windowClick/windowClick.vue'
const darkMode = useDarkMode()
</script>

<template>
    <windowClick noException />

    <div 
    id="dd"
    :class="[darkMode.toggleDarkMode]" 
    class="bg-neutral-600">
        <HomeView />
    </div>
</template>




























