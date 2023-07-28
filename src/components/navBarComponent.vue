<template>
    <div
    :class="[imagePutInPlace ? 'pr-20' : 'delay-500 gap-0']"
    class="fixed top-[7px] bg-white border-2 border-slate-600 transition-all duration-200 left-[5px] w-fit rounded-full rounded-l-none flex z-50 p-1 pr-10 pl-5 justify-center m-auto">
    <div class="flex gap-1">
        <div
        @click="clicked(item)"
        class="transition-all duration-75 relative border-b-4" 
        :class="[item.toLowerCase() ===  choice ? 'border-gray-500' : 'border-transparent']" v-for="(item, index) in nav" :key="index">
            <UseToolTipNotification>
                <template #hover>
                    <navItem
                    @contact-modal="$emit('contact-modal')"
                    :svg="svgs[index]" 
                    :item="item" />
                </template>
                <div class="max-w-[100px] w-fit text-center">{{ item }}</div>
            </UseToolTipNotification>
        </div>
    </div>
    </div>
</template>

<script setup>
import navItem from './navItem.vue';
import { ref, watchEffect, defineEmits } from 'vue';
import { useScreenSize } from '../composables/useScreenSize';
import UseToolTipNotification from './useToolTipNotification.vue';

const emit = defineEmits(['contact-modal', 'highlight-resume'])
const { verySmall } = useScreenSize()
const svgs = ['home', 'pen', 'document', 'contact']
const nav = ['Home', 'Projects', 'Resume', 'Contact',]
const choice = ref('home')
const imagePutInPlace = ref(false)
const lastScrollPosition = ref(null)

//Tooltip usage

//...................................

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

const clicked = (item) => {
    choice.value = item.toLowerCase()
}
</script>
