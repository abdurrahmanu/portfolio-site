<template>
        <MobileView />
        <desktopView />
</template>

<script setup>
import desktopView from './desktopView.vue';
import MobileView from './mobileView.vue'
import {ref, watchEffect} from 'vue'

const isDarkMode = ref(false)
</script>






