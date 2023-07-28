<template>
    <div class="pt-36 dark:bg-neutral-900 bg-slate-200" v-if="isBigScreen">
        <desktopNavBarComponent
        @highlight-resume="highlightResume" />
        
        <div :class="{'justify-start' : moveAboutComponent === 'left', 'justify-end' : moveAboutComponent === 'right', 'justify-center' : !moveAboutComponent}" class="flex w-full relative transition-all duration-300">

            <div class="flex gap-5 justify-between items-center px-4">
                <div v-if="moveAboutComponent === 'right'" class="w-[90%] hidden xl:block m-auto left-16 absolute rounded-md max-w-[400px] bg-slate-300 h-[200px]">
                    <codeComponent @close="moveAboutComponent = ''" :direction="moveAboutComponent" />
                </div>
                <div v-if="moveAboutComponent !== 'left'" @click="moveAboutComponent = 'left'" class="font-black hidden xl:block font-mono transition-all duration-300 dark:text-white text-5xl text-black">&lt;</div>
                <div  class="flex relative self-center gap-5 items-center w-full max-w-[700px] m-auto py-4">
                    <myPicture />
                    <aboutComponent />
                </div>
    
                <div v-if="moveAboutComponent !== 'right'" @click="moveAboutComponent = 'right'" class="font-black hidden xl:block  font-mono transition-all duration-300 dark:text-white text-5xl text-black">></div>
                <div v-if="moveAboutComponent === 'left'" class="w-[90%] hidden xl:block absolute rounded-md m-auto right-16 max-w-[400px] bg-slate-300 h-[200px]">
                    <codeComponent @close="moveAboutComponent = ''" :direction="moveAboutComponent" />
                </div>
            </div>
        </div>

        <skillsComponent1 />
        <MyProjects />
        <FootComponent />
    </div>
</template>

<script setup>
import { useScreenSize } from '../composables/useScreenSize';
import codeComponent from '../components/codeComponent.vue'
import aboutComponent from '../components/aboutComponent.vue'
import myPicture from '../components/myPicture.vue'
import desktopNavBarComponent from '../components/desktopNavBarComponent.vue';
import skillsComponent1 from '../components/skillsComponent1.vue';
import MyProjects from '../components/projectsComponents.vue';
import FootComponent from '../components/footComponent.vue';
import {ref, defineProps, watchEffect} from 'vue'

const { isBigScreen } = useScreenSize()
const animateResumeButton = ref(false)
const moveAboutComponent = ref('')

const highlightResume = () => {
    animateResumeButton.value = true
    window.location = '#download'
}


watchEffect(() => {
    if (animateResumeButton.value) {
        setTimeout(() => {            
            window.onscroll = () => {
                animateResumeButton.value = false
            }
        }, 0);
    }
})
</script>
