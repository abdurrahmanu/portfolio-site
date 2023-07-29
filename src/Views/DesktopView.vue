<template>
    <div class="pt-36 dark:bg-neutral-900 bg-slate-200" v-if="isBigScreen">
        <desktopNavBarComponent @highlight-resume="highlightResume" />
        
        <div :class="{'justify-start' : moveAboutComponent === 'left', 'justify-end' : moveAboutComponent === 'right', 'justify-center' : !moveAboutComponent}" class="flex w-full relative transition-all duration-300">

            <div class="flex gap-5 justify-between items-center px-4">
                <div :class="[xxlScreen ? 'block' : 'hidden']" v-if="moveAboutComponent === 'right'" class="w-[90%] m-auto left-16 absolute rounded-md max-w-[350px] bg-slate-300 py-3 h-fit">
                    <codeComponent @close="moveAboutComponent = ''" :direction="moveAboutComponent" />
                </div>
                <div :class="[xxlScreen ? 'block' : 'hidden']" v-if="moveAboutComponent !== 'left'" @click="moveAboutComponent = 'left'" class="font-black font-mono transition-all duration-300 dark:text-white text-5xl text-black">&lt; </div>
                <div  class="flex relative self-center gap-5 items-center w-full max-w-[700px] m-auto py-4">
                    <myPicture />
                    <aboutComponent />
                </div>
                <div :class="[xxlScreen ? 'block' : 'hidden']"  v-if="moveAboutComponent !== 'right'" @click="moveAboutComponent = 'right'" class="font-black font-mono transition-all duration-300 dark:text-white text-5xl text-black">></div>
                <div :class="[xxlScreen ? 'block' : 'hidden']" v-if="moveAboutComponent === 'left'" class="w-[90%] absolute rounded-md m-auto right-16 max-w-[350px] bg-slate-300 py-3 h-fit">
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

const { xxlScreen, isBigScreen } = useScreenSize()
const moveAboutComponent = ref('')

const highlightResume = () => {
    window.location = '#download'
}
</script>
