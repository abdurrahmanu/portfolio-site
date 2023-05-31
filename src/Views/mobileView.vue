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
import { useScreenSize } from '../composables/useScreenSize';
import baseButton from '../components/baseButtonComponent.vue';
import mainTab from '../components/mainTab.vue';
import footerComponent from '../components/footerComponent.vue';
import NavBar from '../components/navBarComponent.vue';
import AboutMe from '../components/aboutComponent.vue';
import MyProjects from '../components/projectsComponents.vue';
import MySkills from '../components/skillsComponent.vue';

const { isBigScreen } = useScreenSize()
</script>



