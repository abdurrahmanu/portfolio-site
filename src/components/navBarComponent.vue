<template>
    <div
    ref="container"
    class="fixed top-[7px] opacity-90 bg-sky-700 left-[50%] translate-x-[-50%] w-[80%] min-w-[200px] rounded-full flex flex-wrap z-40 p-1 justify-center m-auto">
        <div
        @click="clicked"
        class="hover:text-black transition-all duration-75 border-b-2" 
        :class="[item.toLowerCase() ===  choice ? 'border-black' : 'border-transparent']" v-for="(item, index) in nav" :key="index" >
            <navItem 
            @open-resume="$emit('open-resume', $event)"
            :svg="svgs[index]" :item="item" />
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

const clicked = (e) => {
    choice.value = e.target.innerText.toLowerCase()
}

const props = defineProps({
    navSelection: String
})

const selectedNav = computed(() => {
    return props.navSelection.substring(0, props.navSelection.length - 4)
})

</script>
