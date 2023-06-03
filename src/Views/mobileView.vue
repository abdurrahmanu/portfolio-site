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
import mainComponent from '../components/mainComponent.vue'
import footerComponent from '../components/footerComponent.vue';
import AboutMe from '../components/aboutComponent.vue';
import MyProjects from '../components/projectsComponents.vue';
import MySkills from '../components/skillsComponent.vue';

const { isBigScreen } = useScreenSize()
const navBarBackground = ref('')

const inView = (e) => {
    navBarBackground.value = e
}

</script>



