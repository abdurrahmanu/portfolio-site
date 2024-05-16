<template>
    <div class="relative mx-auto w-[90%] max-w-[500px] dark:bg-neutral-900">
        <p class="font-mono dark:text-white text-zinc-500 m-auto text-sm sm:text-base md:text-lg md:text-center underline">SEND A MAIL</p>
        <div class="relative m-auto w-[100%]">
            <textarea 
            :placeholder="textareaPlaceholder" 
            v-model="message" 
            :class="[textareaPlaceholder === 'write a message' ? 'placeholder:text-red-400' : 'placeholder:text-slate-200']"
            class="p-2 py-2 dark:bg-zinc-800 dark:text-white bg-white shadow shadow-black m-auto outline-none rounded-md min-h-[200px] text-sm sm:text-base w-full"
            cols="30" 
            rows="4"/>
            <img @click.prevent="submit" class="w-7 h-7 absolute  bottom-3 right-3" src="/sendBtn.svg" alt="">
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({ toggle: Boolean })
const textareaPlaceholder = ref('send a mail')
const message = ref('')

const submit = (e) => {
    e.preventDefault()
    if (message.value.length) {
            window.open(`mailto:ahmedabdulrahman103@gmail.com?subject=portfolio?body=${message.value}`)
    } else {
        textareaPlaceholder.value = 'write a mail'
        setTimeout(() => {
            textareaPlaceholder.value = 'send a mail'
        }, 2200);
    }
}
</script>
