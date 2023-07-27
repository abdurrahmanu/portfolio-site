<template>
    <div class="pt-36 dark:bg-neutral-900 bg-white" v-if="isBigScreen">
        <desktopNavBarComponent
        @highlight-resume="highlightResume" />
        <div class="flex relative gap-5 items-center m-auto w-fit max-w-[700px] py-4">
            <myPicture />
            <aboutComponent />
        </div>
        <skillsComponent1 />
        <MyProjects />
        <FootComponent />
    </div>
</template>

<script setup>
import { useScreenSize } from '../composables/useScreenSize';
import aboutComponent from '../components/aboutComponent.vue'
import UseModalComponent from '../components/useModalComponent.vue'
import myPicture from '../components/myPicture.vue'
import desktopNavBarComponent from '../components/desktopNavBarComponent.vue';
import skillsComponent1 from '../components/skillsComponent1.vue';
import MyProjects from '../components/projectsComponents.vue';
import FootComponent from '../components/footComponent.vue';
import {ref, defineProps, watchEffect} from 'vue'

const { isBigScreen } = useScreenSize()
const animateResumeButton = ref(false)

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
