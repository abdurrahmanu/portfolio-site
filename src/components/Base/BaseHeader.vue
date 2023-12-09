<template>
    <windowClick
    multi
    :number="4"
    target="effect-this" />

    <div class="sticky top-0 left-0 z-[9999]">
        <div id="this" class="header">
            <DownloadButton 
            class="download-button" 
            size="large" />
            
            <div class="header-style">
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
import windowClick from '../windowClick/windowClick.vue'
import { BaseNavbar } from '../../composables/componentsImports';
import BaseBgToggleButton from './BaseBgToggleButton.vue';
import DownloadButton from '../Base/BaseDownloadButton.vue'

const currentNavigation = ref('Home')
</script>

<style scoped>
.header {
    @apply flex justify-center bg-sky-900 shadow w-full
}

.header-style {
    @apply mx-5 lg:mx-[100px] flex gap-12 py-5 m-auto justify-center transition-all duration-300
}

.download-button {
    @apply lg:flex hidden absolute px-4 left-[10px] top-[50%] translate-y-[-50%]
}
</style>