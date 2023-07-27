<template>
    <Teleport to="#modal">
        <Transition name="cover">           
            <div 
            @click="closeModal" 
            v-if="showContactModal"  
            class="fixed z-[9999] dark:bg-slate-200 bg-opacity-50 bg-black opacity-80 h-screen w-full top-0 left-0">
            </div>
        </Transition>
        <Transition appear name="message">
            <div 
            v-if="showContactModalDelay" 
            class="z-[999999] fixed bottom-0 w-full dark:bg-neutral-900 bg-slate-300 h-[calc(100vh_-_150px)]">
                <div 
                @click="closeModal" 
                :class="[showContactModal ? 'text-white' : 'text-red-400']" 
                class="font-mono text-2xl text-right p-3 pr-6">
                    <span class="rounded-full hover:text-red-200 font-black">X</span>
                </div>
                <slot />
            </div>
        </Transition>
    </Teleport>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'

const emit = defineEmits(['closeModal'])
const props = defineProps({
    showContactModal: Boolean,
    showContactModalDelay: Boolean,
})

const closeModal = () => {
    emit('closeModal')
}
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