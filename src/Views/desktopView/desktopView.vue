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
import { useScreenSize } from '../../composables/useScreenSize';
import allSocials from '../../components/allSocials.vue';
import HeaderComponent from '../../components/headerComponent.vue';
import AboutMe from '../../components/aboutMe.vue';
import MySkills from '../../components/mySkills.vue';
import MyProjects from '../../components/myProjects.vue';

const {isBigScreen} = useScreenSize()
</script>