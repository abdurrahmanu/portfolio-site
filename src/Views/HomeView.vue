<template>
        <MobileView />
        <desktopView />
</template>

<script setup>
import desktopView from './DesktopView.vue';
import MobileView from './MobileView.vue'
import {ref, watchEffect} from 'vue'

const isDarkMode = ref(false)
</script>






