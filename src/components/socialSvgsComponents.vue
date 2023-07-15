<template>
    <div id="contact" class="w-full bg-gray-800 p-1 sm:p-4">
        <div class="grid p-4">
            <p class="font-mono text-white pb-2 pl-5 text-xl lg:text-center underline">EMAIL ME</p>
            
            <div class="py-4 text-center">
                <textarea :placeholder="textareaPlaceholder" v-model="message" class="p-2 max-w-[500px] w-[90%] m-auto outline-none rounded-md min-h-[200px]" name="" id="" cols="30" rows="4"></textarea>
            </div>
            <button @click.prevent="submit" class="text-white bg-blue-400 w-fit px-16 m-auto p-2 rounded-full text-xl">SUBMIT</button>
        </div>

        <div class=" lg:gap-16 flex flex-wrap justify-center m-auto p-5 gap-9">
            <div @click="go(index)" class="" v-for="(svgName, index) in svgsNames" 
            :key="index">
                <img class="w-10 lg:w-16" :src="`../../public/${svgName}.svg`" alt="" >
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';

const textareaPlaceholder = ref('send a message to me')
const svgsNames = ['resume', 'linkedin', 'github', 'email']
const message = ref('')
const address = ref('')

const submit = (e) => {
    e.preventDefault()
    if (message.value.length) {
            window.open(`mailto:ahmedabdulrahman103@gmail.com?subject=portfolio?body=${message.value}`)
    }
    else {
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
    } else if (svgsNames[index] === 'linkedin') {
        window.open('https://www.linkedin.com/in/ahmed-abdulrahman-3a0813205')
    } else {
        window.open('resume.pdf')
    }
}

</script>

<style>
.animate {
    animation: animate 0.8s infinite;
    transition: all ease 1s;
}

@keyframes animate {
    0% {
        scale: 90%;
        opacity: 0.5
    };
    100% {
        scale: 100%;
    }
}
</style>