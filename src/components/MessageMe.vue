<template>
    <div 
    class="main-container">
        <div class="message-container">
            <div class="grid md:p-4">
                <div class="max-w-[600px] w-[100%] m-auto">
                    <p class="font-mono dark:text-white text-zinc-500 pb-2 w-[90%] m-auto text-sm sm:text-base md:text-lg md:text-center underline">SEND A MESSAGE</p>
                    <div class="md:pt-4 pt-0 text-center">
                        <textarea  
                        :placeholder="textareaPlaceholder" 
                        v-model="message" 
                        class="p-2 py-2 dark:bg-zinc-800 dark:text-white bg-white shadow shadow-black max-w-[500px] w-[90%] m-auto outline-none rounded-md min-h-[200px] text-sm sm:text-base"
                        cols="30" 
                        rows="4"></textarea>
                    </div>
                    <div @click.prevent="submit" class="submit-button-container">
                        <button 
                        @click="downloadResume" 
                        class="submit-button">SUBMIT</button>
                    </div>
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
        }, 4000);
    }
}

</script>

<style scoped>
.main-container {
    @apply relative m-auto dark:bg-neutral-900
}

.submit-button-container {
    @apply p-[2px] w-full m-auto rounded-full relative text-center py-6
}

.submit-button {
    @apply rounded-full py-3 w-[80%] text-slate-300 hover:bg-gray-900 text-center m-auto bg-black p-1 md:p-3 hover:text-white px-16 uppercase dark:bg-neutral-800 text-xs sm:text-base
}


.message-container {
    @apply w-full p-1 sm:p-4 z-[9] relative
}

</style>