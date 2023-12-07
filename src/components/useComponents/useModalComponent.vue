<template>
    <Teleport to="#modal">
        <Transition name="cover">           
            <div 
            @click="closeModal" 
            v-if="toggle"  
            class="fixed z-[99999] dark:bg-slate-200 bg-opacity-50 bg-black opacity-80 h-screen w-full top-0 left-0">
            </div>
        </Transition>
        
        <Transition appear name="message">
            <div
            v-if="toggleDelay" 
            class="z-[999999999] w-full fixed dark:bg-neutral-900 bg-slate-300"> 
                <slot />
            </div>
        </Transition>
    </Teleport>
</template>

<script setup>
import { defineProps, defineEmits, watchEffect } from 'vue'

const emit = defineEmits(['false'])
const props = defineProps({
    toggle: Boolean,
    toggleDelay: Number,
})

const closeModal = () => {
    emit('false')
}

watchEffect(() => {
    if (props.toggle) {
        let xScroll = window.pageXOffset
        let yScroll = window.pageYOffset

        window.onscroll = () => {
            window.scrollTo(xScroll, yScroll)
        }
    } 

    if (!props.toggle) {
        window.onscroll = () => {}
    }
})
</script>

<style scoped>
.message-enter-from {
    height: 0px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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

.cover-enter-active {
    transition: scale .1s linear;
}
</style>