<template>
    <div class="dark:bg-neutral-900">

        <div class="main-style">
            <div class="flex gap-[20px] p-3 text-3xl font-mono text-white justify-center uppercase">
                <div>
                    <span class="px-[1px] animate-pulse transition-all duration-75" v-for="(letter, index) in firstName" :key="index">{{ letter }}</span>
                </div>

                <div>
                    <span class="px-[1px] animate-pulse transition-all duration-75" v-for="(letter, index) in lastName" :key="index">{{ letter }}</span>
                </div>
            </div>
            <div class="about-style">
                <BaseAvatar />
                <AboutMe />
            </div>
            <skillsComponent />
        </div>

        <BaseDownloadButton class="screen-big:hidden" /> 
    </div>
</template>

<script setup>
import AboutMe from './AboutMe.vue';
import BaseAvatar from './Base/BaseAvatar.vue';
import BaseDownloadButton from './Base/BaseDownloadButton.vue';
import skillsComponent from './Skills/skillsComponent.vue';

const firstName = 'Abdulrahman'
const lastName = 'Ahmed'
</script>

<style scoped>
.main-style {
    @apply screen-big:w-fit screen-big:relative screen-big:m-auto screen-big:max-w-[1200px] screen-big:py-20 screen-big:gap-20 
}

.about-style {
    @apply pt-10 screen-big:transition-all grid screen-big:duration-300 screen-big:w-fit screen-big:p-2 screen-big:flex  screen-big:m-auto screen-big:gap-10 screen-big:px-5 screen-big:items-center
}
</style>