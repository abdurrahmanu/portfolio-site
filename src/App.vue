<script setup>
import changeBgModeComponent from './components/changeBgModeComponent.vue'
import HomeView from './Views/HomeView.vue';
import {ref, watchEffect} from 'vue'

const toggleDarkMode = ref(false)
watchEffect(() => {
  console.log(toggleDarkMode.value);
})
</script>

<template>
  <div :class="[toggleDarkMode ? 'dark' : '']">
    <changeBgModeComponent @toggleDarkMode="toggleDarkMode = !toggleDarkMode" />
    <HomeView />
  </div>
</template>






























