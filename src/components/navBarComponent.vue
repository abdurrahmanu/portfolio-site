<template>
    <div
    ref="container"
    :class="{'fixed top-0 left-0 w-full min-w-[200px]': true, navBg : bg}"
    class="flex flex-wrap z-20 py-6 justify-center m-auto bg-teal-600">
        <div
        @click="clicked"
        class="hover:text-black transition-all duration-75 border-b-4" 
        :class="[item.toLowerCase() ===  choice ? 'border-teal-900' : 'border-transparent']" v-for="(item, index) in nav" :key="index" >
            <navItem :svg="svgs[index]" :item="item"/>
        </div>
    </div>
</template>

<script setup>
import navItem from './navItem.vue';
import { onMounted, ref, watchEffect } from 'vue';
import { useScreenSize } from '../composables/useScreenSize';
import { useOverlapNavBar } from '../composables/topOverlapsNavBar'
import { computed } from '@vue/reactivity';

const { color } = useOverlapNavBar()
const { verySmall } = useScreenSize()
const svgs = ref(['home', 'about', 'pen', 'contact', 'document'])
const nav = ['Home', 'About', 'Projects', 'Contact', 'Resume']
const choice = ref('home')
const bg = ref('')

const navBg = computed(() => {
    return `bg-${bg.value}-400`
})

watchEffect(() => {
    bg.value = color
})

const clicked = (e) => {
    choice.value = e.target.innerText.toLowerCase()
}

</script>
