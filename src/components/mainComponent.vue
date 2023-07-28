<template>
    <NavBar 
    @contact-modal="showContactModal = true" />
    <mainTab />
    <skillsComponent />
    <downloadButton /> 
    <UseModalComponent 
    @false="closeModal"
    :toggleDelay="showContactModalDelay"
    :toggle="showContactModal">
        <footComponent />
    </UseModalComponent>
</template>

<script setup>
import { ref, watchEffect, defineProps } from 'vue';
import skillsComponent from '../components/skillsComponent1.vue'
import footComponent from '../components/footComponent.vue'
import NavBar from '../components/navBarComponent.vue';
import downloadButton from '../components/downloadButton.vue';
import mainTab from '../components/mainTab.vue';
import UseModalComponent from './useModalComponent.vue';

const showContactModal = ref(false)
const showContactModalDelay = ref(false)

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
})

</script>

<style scoped>
</style>