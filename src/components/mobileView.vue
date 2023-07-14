<template>
    <div id="home" class=" pt-16" v-if="!isBigScreen">
        <mainComponent @open-resume="openResume = $event" id="mainComp" class="intersect" :navSelection="navSelection" />
        <AboutMe id="aboutComp" class="intersect" />
        <MySkills id="skillsComp" class="intersect" />
        <MyProjects id="projectsComp" class="intersect" />
        <footerComponent id="footerComp" class="intersect" />
        <useModalNotification @false="openResume = false" :toggle="openResume">
            <resume />
        </useModalNotification>
    </div>
</template>

<script setup>
import { onMounted, ref, watchEffect } from 'vue';
import { useScreenSize } from '../composables/useScreenSize';
import mainComponent from './mainComponent.vue'
import useModalNotification from './useModalNotification.vue';
import footerComponent from './footerComponent.vue';
import AboutMe from './aboutComponent.vue';
import MyProjects from './projectsComponents.vue';
import MySkills from './skillsComponent.vue';
import resume from './resume.vue';

const { isBigScreen } = useScreenSize()
const navBarBackground = ref('')
const navSelection = ref('')
const openResume = ref(false)

const inView = (e) => {
    navBarBackground.value = e
}

const currentIntersector = ref('')

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                currentIntersector.value = entry.target.id
                entry.target.classList.add('current-intersector')
                
                watchEffect(() => {
                    navSelection.value = currentIntersector.value
                })
            }

            if (!entry.isIntersecting) {
                entry.target.classList.remove('current-intersector')
            }
        });
    })
    document.querySelectorAll('.intersect').forEach(section => {        
        observer.observe(section)            
    });
})
</script>


<style>
.current-intersector {
    border-radius: 100px;
    transition: all 3s ease;
}
.check {
    background: red;
}
</style>
