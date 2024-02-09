<template>
    <div class="fixed top-0 z-[9999] w-full max-w-[1200px] m-auto">
        <div id="this" class="flex justify-center bg-slate-300 shadow w-full">
            <DownloadButton 
            class="lg:flex hidden absolute px-4 left-[10px] top-[50%] translate-y-[-50%]" 
            size="large" />
            
            <div class="mx-5 lg:mx-[100px] flex gap-12 py-5 m-auto justify-center transition-all duration-300">
                <BaseNavbar
                @currentNav="currentNavigation = $event"
                :currentNavigation="currentNavigation" />
            </div>
        </div>
        <BaseBgToggleButton />
    </div>
</template>

<script setup>
import { ref } from 'vue' 
import { BaseNavbar } from '../../composables/componentsImports';
import BaseBgToggleButton from './BaseBgToggleButton.vue';
import DownloadButton from '../Base/BaseDownloadButton.vue'

const currentNavigation = ref('Home')
</script>

<style scoped>
</style>