<template>
    <div class="dark:bg-neutral-900">
        <div class="screen-big:w-fit screen-big:relative screen-big:m-auto screen-big:max-w-[1200px] screen-big:gap-20">
            <div class="flex gap-[20px] px-6 pt-28 text-5xl font-mono text-black justify-center uppercase font-black">
                <div>
                    <span class="px-[1px] animate-pulse transition-all duration-75" v-for="(letter, index) in lastName" :key="index">{{ letter }}</span>
                </div>
                <div>
                    <span class="px-[1px] animate-pulse transition-all duration-75" v-for="(letter, index) in firstName" :key="index">{{ letter }}</span>
                </div>
            </div>
            <AboutMe />
            <skillsComponent />
        </div>
        <BaseDownloadButton class="screen-big:hidden" /> 
    </div>
</template>

<script setup>
import AboutMe from './AboutMe.vue';
import BaseDownloadButton from './Base/BaseDownloadButton.vue';
import skillsComponent from './Skills/skillsComponent.vue';

const firstName = 'Abdulrahman'
const lastName = 'Ahmed'
</script>