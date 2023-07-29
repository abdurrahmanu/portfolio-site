<template>
    <div class="flex p-5 bg-slate-200 z-[999] fixed top-0 shadow-sm dark:shadow-white shadow-black left-0 w-full dark:bg-white dark:opacity-90 justify-center gap-8">
        <div class="absolute left-10 flex items-center gap-4">
            <div class="w-fit animate border border-black rounded-full p-2 transition-all duration-[400s]">
                <img class="w-8 self-start" src="../../public/avatar.svg" alt="">
            </div>
            <downloadButton class="lg:block hidden" size="large" />
        </div>
        <div
        @click="clicked(item)"
        class="transition-all relative duration-75 border-b-4" 
        :class="[item.toLowerCase() ===  choice ? 'border-gray-500' : 'border-transparent', item === 'Resume' ? 'lg:hidden lg:absolute lg:top-10' : 'block relative top-0']" v-for="(item, index) in nav" :key="index">
        <!-- <UseToolTipNotification> -->
            <navItem
            size="large"
            :svg="svgs[index]" 
            :item="item" />
        <!-- </UseToolTipNotification> -->
        </div>
    </div>
</template>

<script setup>
import {ref, defineEmits} from 'vue'
import navItem from './navItem.vue'
import downloadButton from './downloadButton.vue'
import UseToolTipNotification from './useToolTipNotification.vue';

const svgs = ['home', 'pen', 'document', 'github']
const nav = ['Home', 'Projects', 'Resume','Github'];
const choice = ref('home')

const clicked = (item) => {
    choice.value = item.toLowerCase()
}
</script>

<style scoped>
@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
.animate {
    animation: spin 6s linear infinite;
}

</style>