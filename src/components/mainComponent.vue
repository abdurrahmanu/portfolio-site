<template>
    <div ref="container" class="min-h-fit pb-2">
        <NavBar 
        @highlight-resume="highlightResume"
        @contact-modal="showContactModal = true"
        />
        <mainTab />
        <skillsComponent id="skillsComp" class="intersect" />
        <div id="resumeButton" :class="[animateResumeButton ? 'pt-32 animate-bounce transition-all duration-150' : 'pt-0']">
            <downloadButton />
        </div>
        <Teleport to="#modal">
            <Transition name="cover">           
                <div @click="closeModal" v-if="showContactModal" class="fixed z-[9999] h-screen w-full top-0 left-0 opacity-50 bg-slate-200"></div>
            </Transition>
            <Transition appear name="message">
                <div v-if="showContactModalDelay" class="bg-neutral-900 z-[999999] fixed bottom-0 w-full h-[calc(100vh_-_150px)]">
                    <div @click="closeModal" :class="[showContactModal ? 'text-white' : 'text-red-400']" class="font-mono text-2xl text-right p-3 pr-6"><span class="rounded-full hover:text-red-200 font-black">X</span></div>
                    <footComponent />
                </div>
            </Transition>
        </Teleport>
    </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import skillsComponent from '../components/skillsComponentMobile.vue'
import footComponent from '../components/footComponent.vue'
import NavBar from '../components/navBarComponent.vue';
import downloadButton from '../components/downloadButton.vue';
import mainTab from '../components/mainTab.vue';

const container = ref(null)
const showContactModal = ref(false)
const showContactModalDelay = ref(false)
const animateResumeButton = ref(false)

const highlightResume = () => {
    animateResumeButton.value = true
    window.location = '#resumeButton'
}

const closeModal = () => {
    showContactModal.value = false
    setTimeout(() => {        
        showContactModalDelay.value = false
    }, 100);
}

watchEffect(() => {
    if (showContactModal.value) {
        setTimeout(() => {
            showContactModalDelay.value = true
        }, 500);
        window.onscroll = (e) => {
            e.preventDefault()
            window.scrollTo(pageXOffset, scrollY)
        }
    } else {
        window.onscroll = () => {
            
        }
    }

    if (animateResumeButton.value) {
        setTimeout(() => {            
            window.onscroll = () => {
                animateResumeButton.value = false
            }
        }, 0);
    }
})

</script>

<style scoped>
.message-enter-from {
    height: 0px;
    opacity: 0;
}

.message-enter-active,
.message-leave-active {
    transition: all 0.2s linear;
}

.message-leave-to {
    height: 0;
    opacity: 0;
}

.cover-leave-to {
    height: 0;
}

.cover-enter-from {
    scale: 97%;
}

.cover-enter-active {
    transition: scale .1s linear;
}
</style>