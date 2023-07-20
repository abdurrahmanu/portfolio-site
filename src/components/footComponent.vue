<template>
    <div>
        <div class="w-full p-1 sm:p-4">
            <div class="grid p-4">
                <p class="font-mono text-white pb-2 pl-5 text-xl md:text-center underline">SEND A MESSAGE</p>
                
                <div class="pt-4 text-center">
                    <textarea :placeholder="textareaPlaceholder" v-model="message" class="p-2 max-w-[500px] w-[90%] m-auto outline-none bg-slate-300 rounded-md min-h-[200px]" name="" id="" cols="30" rows="4"></textarea>
                </div>
                <div class="py-2">
                    <div @click.prevent="submit" class="p-[2px] shadow-gray-900 hover:shadow-sm shadow-md bg-black hover:bg-gray-800 w-fit m-auto hover:scale-110 rounded-full">
                        <button @click="downloadResume" class="rounded-full font-bold md:px-28 hover:font-thin p-3 bg-slate-200 hover:text-white hover:bg-black px-16 uppercase text-sm flex items-center gap-2">
                            SUBMIT
                        </button>
                    </div>
                </div>
            </div>
    
            <div class="flex flex-wrap justify-center m-auto py-5 md:pb-0 md:pt-3 gap-9">
                <div @click="go(index)" class="p-2 hover:animate-bounce hover:bg-slate-400 transition-all delay-75 rounded-full bg-white" v-for="(svgName, index) in svgsNames" 
                :key="index">
                    <img class="w-10" :src="`${svgName}.svg`" alt="" >
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watchEffect, defineProps } from 'vue';

const textareaPlaceholder = ref('send a message to me')
const svgsNames = ['resume', 'github', 'email']
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
        window.open('https://github/abdurrahmanu')
    } {
        window.open('resume.pdf')
    }
}

</script>