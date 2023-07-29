<template>
    <div @click="route(item)" class="grid relative gap-1 text-black font-bold hover:text-black items-center px-2 justify-center rounded-sm font-mono p-1">
        <div class="text-center flex justify-center">
            <img :class="[size === 'large' ? 'w-8' : 'w-6']" class="" :src="svg + '.svg'" alt="">
        </div>
    </div>
    <usePushNotification @false="toggleResume($event)" :toggle="ModalWarning">
        <div class="w-[100%] max-w-[400px] bg-slate-300 text-black p-4">
            <p class="text-center text-xs p-3">YOU WILL BE REDIRECTED TO VIEW MY RESUME</p>
            <div class="flex gap-7 w-fit p-1 m-auto">
                <div class="text-center">
                    <button @click="toggleResume('completed')" class="px-6 rounded-full p-2 text-xs text-white bg-green-400">YES</button>
                </div>
                <div class="text-center">
                    <button @click="toggleResume" class="px-6 rounded-full p-2 text-xs text-white bg-red-400">NO</button>
                </div>
            </div>
        </div>
    </usePushNotification>
</template>

<script setup>
import { defineProps, ref, defineEmits, watchEffect } from 'vue';
import { useScreenSize } from '../composables/useScreenSize';
import usePushNotification from './usePushNotification.vue'

const emit = defineEmits(['contact-modal', 'highlight-resume'])
const idLink = ref('')
const ModalWarning = ref(false)
const openResume = ref(false)

const toggleResume = (arg) => {
    if (arg == 'completed') {
        openResume.value = true
        window.open('resume.pdf', '_blank');
        setTimeout(() => {            
            ModalWarning.value = false
        }, 0);
    } else {
        openResume.value = false
        ModalWarning.value = false
    }
}

const props = defineProps({
    item: String,
    svg: String,
    size: String
})

const route = (arg) => {
    if (arg === 'Contact') {
        emit('contact-modal');
    } else if (arg === 'Github') {
        window.open('https://github.com/abdurrahmanu', '_blank')
    } else if (arg !== 'Resume') {
        idLink.value = '#' + arg.toLowerCase()
        window.location = idLink.value
    } else {
        ModalWarning.value = true
    }
}
</script>