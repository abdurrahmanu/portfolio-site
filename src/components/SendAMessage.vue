<template>
    <div 
    class="relative mx-auto dark:bg-neutral-900">
        <div class="w-full p-1 relative">
                <div class="max-w-[600px] w-[100%] mx-auto">
                    <p class="font-mono dark:text-white text-zinc-500 w-[90%] m-auto text-sm sm:text-base md:text-lg md:text-center underline">SEND A MESSAGE</p>
                    <div class="relative m-auto w-[90%] max-w-[500px]">
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
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({ toggle: Boolean })
const textareaPlaceholder = ref('send a message to me')
const message = ref('')

const submit = (e) => {
    e.preventDefault()
    if (message.value.length) {
            window.open(`mailto:ahmedabdulrahman103@gmail.com?subject=portfolio?body=${message.value}`)
    } else {
        textareaPlaceholder.value = 'write a message'
        setTimeout(() => {
            textareaPlaceholder.value = 'send a message to me'
        }, 2200);
    }
}
</script>
