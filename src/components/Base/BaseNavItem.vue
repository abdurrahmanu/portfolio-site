<template>
    <div 
    @click="route(item)" 
    class="nav-style">
        {{ item }}
    </div>
    <usePushNotification 
    @false="toggleResume($event)" 
    :toggle="togglePushNotfication">
        <PushNOtificationForResume 
        @toggleResume="toggleResume" />
    </usePushNotification>
</template>

<script setup>
import { ref } from 'vue';
import usePushNotification from '../useComponents/usePushNotification.vue'
import PushNOtificationForResume from '../PushNOtificationForResume.vue'

const togglePushNotfication = ref(false)
const openResume = ref(false)
const emit = defineEmits(['contact-modal']);
const props = defineProps({
    item: String,
})

const toggleResume = (arg) => {
    if (arg == 'completed') {
        openResume.value = true
        window.open('resume.pdf', '_blank');
        setTimeout(() => {            
            togglePushNotfication.value = false
        }, 0);
    }

    else {
        openResume.value = false
        togglePushNotfication.value = false
    }
}

const route = (arg) => {
    if (arg === 'Github') window.open('https://github.com/abdurrahmanu', '_blank')
    else if (arg === 'Resume') togglePushNotfication.value = true
}

</script>

<style scoped>
.nav-style {
    @apply relative hover:text-slate-200 font-mono
}

</style>




