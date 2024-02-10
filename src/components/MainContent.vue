<template>
    <div class="dark:bg-neutral-900">
        <div class="screen-big:w-fit screen-big:relative screen-big:m-auto screen-big:max-w-[1200px] screen-big:gap-20">
            <AboutMe />
            <skillsComponent />
        </div>
    </div>
</template>

<script setup>
import AboutMe from './AboutMe.vue';
import skillsComponent from './Skills/skillsComponent.vue';
</script>