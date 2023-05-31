<template>
    <div id="home" class=" pt-20" v-if="!isBigScreen">
        <div class="min-h-fit">
            <NavBar />
            <baseButton />
            <mainTab />
        </div>
        <AboutMe />
        <MySkills />
        <MyProjects />
        <footerComponent />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useScreenSize } from '../../composables/useScreenSize';
import baseButton from '../../components/baseButton.vue';
import mainTab from '../../components/mainTab.vue';
import footerComponent from '../../components/footerComponent.vue';
import NavBar from '../../components/navBar.vue';
import AboutMe from '../../components/aboutMe.vue';
import MyProjects from '../../components/myProjects.vue';
import MySkills from '../../components/mySkills.vue';

const { isBigScreen } = useScreenSize()
</script>



