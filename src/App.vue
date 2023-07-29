<script setup>
import changeBgModeComponent from './components/changeBgModeComponent.vue'
import HomeView from './Views/HomeView.vue';
import {ref} from 'vue'

const toggleDarkMode = ref(false)
</script>

<template>
  <div :class="[toggleDarkMode ? 'dark' : '']">
    <changeBgModeComponent @toggleDarkMode="toggleDarkMode = $event" />
    <HomeView />
  </div>
</template>






























