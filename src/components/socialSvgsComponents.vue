<template>
    <div id="contact" class="w-full bg-gray-800 p-1 sm:p-4">
        <div class="grid p-4">
            <p class="font-mono text-white pb-7 text-xl pl-2 lg:text-center underline">CONTACT</p>
            <form action="http://gmail.com/ahmadabdulrahman103@gmail.com/" method="post">
                <div class="flex relative w-full text-center m-auto max-w-[400px]">
                    <input placeholder="email address" v-model="address" class="rounded-full w-full p-2 outline-none pl-8" type="email">
                    <img class="w-6 absolute left-1 top-[50%] translate-y-[-50%]" src="../../public/email.svg" alt="">
                    <button @click="submit" class="bg-teal-700 rounded-r-full p-[10px] text-white absolute right-[-1px] top-[50%] translate-y-[-50%]">SUBMIT</button>
                </div>
            </form>

            <div class="pt-8 text-center">
                <textarea placeholder="enter message" v-model="message" class="p-2 max-w-[500px] w-[90%] m-auto outline-none rounded-md min-h-[200px]" name="" id="" cols="30" rows="4"></textarea>
            </div>
        </div>

        <div class="pb-10 lg:gap-16 flex flex-wrap justify-center m-auto p-5 gap-5">
            <img v-for="(svgName, index) in svgsNames" :key="index" class="w-10 lg:w-16" :src="`../../public/${svgName}.svg`" alt="" >
        </div>
    </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';

const svgsNames = ['email', 'linkedin', 'resume', 'github']

const message = ref('')
const address = ref('')

watchEffect(() => {
    console.log(message.value, address.value);
})

const submit = (e) => {
        
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