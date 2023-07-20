<template>
    <div
    :class="[imagePutInPlace ? 'gap-[64px]' : 'delay-500 gap-0']"
    class="fixed top-[7px] bg-white opacity-80 transition-all duration-1000  left-[50%] translate-x-[-50%] w-fit rounded-full flex z-50  p-3 px-7 justify-center m-auto">
    <div class="flex ">
        <div
        @click="clicked"
        class="transition-all duration-75 border-b-4" 
        :class="[item.toLowerCase() ===  choice ? 'border-gray-500' : 'border-transparent']" v-for="(item, index) in nav.slice(0, Math.round(nav.length / 2))" :key="index">
            <navItem
            @contact-modal="$emit('contact-modal')"
            :svg="svgs[index]" 
            :item="item" />
        </div>
    </div>
    <div class="flex">
        <div
        @click="clicked"
        class="transition-all duration-75 border-b-4" 
        :class="[item.toLowerCase() ===  choice ? 'border-gray-500' : 'border-transparent']" v-for="(item, index) in nav.slice(Math.round(nav.length / 2))" :key="index" >
            <navItem
            @highlight-resume="$emit('highlight-resume')"
            @contact-modal="$emit('contact-modal')"
            :svg="svgs[Math.round(nav.length / 2) + index]" 
            :item="item" />
        </div>
    </div>

    </div>
</template>

<script setup>
import navItem from './navItem.vue';
import { ref, watchEffect, defineEmits } from 'vue';
import { useScreenSize } from '../composables/useScreenSize';

const emit = defineEmits(['contact-modal', 'highlight-resume'])
const { verySmall } = useScreenSize()
const svgs = ['home', 'pen', 'document', 'contact']
const nav = ['Home', 'Projects', 'Resume', 'Contact',]
const choice = ref('home')
const imagePutInPlace = ref(false)
const lastScrollPosition = ref(null)

window.addEventListener('scroll', e => {
    lastScrollPosition.value = pageYOffset;
    watchEffect(() => {
        if (lastScrollPosition.value > 170) {
            imagePutInPlace.value = true
        } else {
            imagePutInPlace.value = false
        }
    });
})

const clicked = (e) => {
    choice.value = e.target.innerText.toLowerCase()
}
</script>
