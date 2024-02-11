<script setup>
import HomeView from './Views/HomeView.vue';
import { onBeforeMount } from 'vue'
import { useDarkMode } from '../src/store/useDarkMode'
import {storeToRefs} from 'pinia'

const darkMode = useDarkMode()
const {checkLocalStorageForSavedBackground} = darkMode
const {toggleDarkMode} = storeToRefs(darkMode)

onBeforeMount(() => {
    checkLocalStorageForSavedBackground()
})
</script>

<template>
    <div :class="[toggleDarkMode]">
        <HomeView />
    </div>
</template>


























