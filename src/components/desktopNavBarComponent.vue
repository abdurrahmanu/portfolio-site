<template>
    <div class="flex p-5 z-40 fixed top-0 left-0 w-full bg-white opacity-40 justify-center gap-8">

        <div class="w-fit animate border border-black rounded-full p-2 absolute left-10 transition-all duration-[4000s]">
            <img class="w-8 self-start" src="../../public/avatar.svg" alt="">
        </div>

        <div
        @click="clicked"
        class="transition-all duration-75 border-b-4" 
        :class="[item.toLowerCase() ===  choice ? 'border-gray-500' : 'border-transparent']" v-for="(item, index) in nav" :key="index" >

            <navItem
            size="large"
            @highlight-resume="$emit('highlight-resume')"
            @contact-modal="$emit('contact-modal')"
            :svg="svgs[index]" 
            :item="item" />

        </div>
    </div>
</template>

<script setup>
import navItem from './navItem.vue'

const svgs = ['home', 'pen', 'document', 'contact']
const nav = ['Home', 'Projects', 'Resume', 'Contact',]

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