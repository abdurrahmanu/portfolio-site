<template>
    <div class="bg-neutral-700" v-if="isBigScreen">
        <div class="max-w-[1000px] w-[90%] m-auto min-h-screen">
            <HeaderComponent />
            <AboutMe />
            <MySkills />
            <MyProjects />
            <allSocials />
        </div>
    </div>
</template>

<script setup>
import { useScreenSize } from '../composables/useScreenSize';
import allSocials from './socialSvgsComponents.vue';
import HeaderComponent from './headerComponent.vue';
import AboutMe from './aboutComponent.vue';
import MySkills from './skillsComponent.vue';
import MyProjects from './projectsComponents.vue';

const {isBigScreen} = useScreenSize()
</script>