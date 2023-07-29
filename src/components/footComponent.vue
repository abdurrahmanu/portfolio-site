<template>
    <div 
    class="relative bg-[url('../../public/white-with-black-crack.png')] dark:bg-[url('../../public/black-with-white-crack.png')]">
        <div class="w-full bg-none p-1 sm:p-4 z-[9] relative">
            <div class="grid md:p-4">
                <p  class="font-mono dark:text-white text-zinc-500 pb-2 pl-5 text-xl md:text-center underline">SEND A MESSAGE</p>
                
                <div class="md:pt-4 pt-0 text-center">
                    <textarea  :placeholder="textareaPlaceholder" v-model="message" class="p-2 dark:bg-black dark:text-white bg-white max-w-[500px] w-[90%] m-auto outline-none border-2 dark:border-white border-black rounded-md min-h-[200px]" name="" id="" cols="30" rows="4"></textarea>
                </div>

                <div class="py-2">
                    <div @click.prevent="submit" class="p-[2px] bg-black w-fit m-auto rounded-full">
                        <button @click="downloadResume" class="rounded-full text-white bg-black md:px-28 p-1 md:p-3 hover:text-white px-16 uppercase text-sm flex items-center gap-2">
                            SUBMIT
                        </button>
                    </div>
                </div>
            </div>
            <div class="flex flex-wrap justify-center m-auto pb-3 md:pb-0 md:pt-3 gap-9">
                <div @click="go(index)" class="p-2 hover:animate-bounce bg-slate-200 border-2 border-black transition-all delay-75 rounded-full" v-for="(svgName, index) in svgsNames" 
                :key="index">
                    <img class="w-7 md:w-10" :src="`${svgName}.svg`" alt="" >
                </div>
            </div>
            <copyrightComponent v-if="!toggle" />
        </div>
        <div class="h-full w-full z-[2] absolute top-0 left-0 dark:bg-black dark:opacity-70 opacity-90 bg-slate-300 md:block">
        </div>
    </div>
</template>

<script setup>
import { ref, watchEffect, defineProps } from 'vue';
import copyrightComponent from './copyrightComponent.vue'
import { useScreenSize } from '../composables/useScreenSize';

const props = defineProps({
    toggle: Boolean
})

const {isBigScreen} = useScreenSize()
const textareaPlaceholder = ref('send a message to me')
const svgsNames = ['linkedin', 'github', 'email']
const message = ref('')

const submit = (e) => {
    e.preventDefault()
    if (message.value.length) {
            window.open(`mailto:ahmedabdulrahman103@gmail.com?subject=portfolio?body=${message.value}`)
    } else {
        textareaPlaceholder.value = 'write a message'
        setTimeout(() => {
            textareaPlaceholder.value = 'send a message to me'
        }, 4000);
    }
}

const go = (index) => {
    if (svgsNames[index] === 'email') {
        window.open('mailto:ahmedabdulrahman103@gmail.com')
    } else if (svgsNames[index] === 'github') {
        window.open('https://github.com/abdurrahmanu')
    } else {
        window.open('linkedin.com')
    }
}

</script>