<template>
    <div
    ref="container"
    :class="[background === 'white' ? `bg-[${background}]` : background === 'gray' ? `bg-${background}-500` : 'bg-teal-700']"
    class="fixed top-0 left-0 w-full min-w-[200px] flex flex-wrap border-b z-40 py-6 justify-center m-auto">
        <div
        @click="clicked"
        class="hover:text-black transition-all duration-75 border-b-4" 
        :class="[item.toLowerCase() ===  choice ? 'border-teal-900' : 'border-transparent']" v-for="(item, index) in nav" :key="index" >
            <navItem :background="background" :svg="svgs[index]" :item="item"/>
        </div>
    </div>
</template>

<script setup>
import navItem from './navItem.vue';
import { ref, watchEffect, defineProps } from 'vue';
import { useScreenSize } from '../composables/useScreenSize';
import { computed } from '@vue/reactivity';

const { verySmall } = useScreenSize()
const svgs = ref(['home', 'about', 'pen', 'contact', 'document'])
const nav = ['Home', 'About', 'Projects', 'Contact', 'Resume']
const choice = ref('home')
const props = defineProps({
    background: String
})

const clicked = (e) => {
    choice.value = e.target.innerText.toLowerCase()
}

watchEffect(()=> {

})

</script>
