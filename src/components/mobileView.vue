<template>
    <div id="home" class=" pt-20" v-if="!isBigScreen">
        <mainComponent @inView="inView($event)" :background="navBarBackground" />
        <AboutMe @inView="inView($event)" />
        <MySkills @inView="inView($event)" />
        <MyProjects @inView="inView($event)" />
        <footerComponent />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useScreenSize } from '../composables/useScreenSize';
import mainComponent from './mainComponent.vue'
import footerComponent from './footerComponent.vue';
import AboutMe from './aboutComponent.vue';
import MyProjects from './projectsComponents.vue';
import MySkills from './skillsComponent.vue';

const { isBigScreen } = useScreenSize()
const navBarBackground = ref('')

const inView = (e) => {
    navBarBackground.value = e
}

</script>



