<template>    
    <div class="max-w-[600px] w-[100%] m-auto rounded-md relative font-mono bg-neutral-800 rounded-tl-none">
        <div class="text-right px-1"><span @click="$emit('closeMessages')" class="text-red-500 px-1 bg-zinc-800 rounded-md">X</span></div>

            <div class="text-lg  font-sans underline absolute bottom-[100%] px-3 bg-neutral-900 rounded-t-md text-white" @mouseover="toggleTooltip = true" @mouseleave="toggleTooltip = false">
                <Tooltip :toggle="toggleTooltip" value="Drop a chat for me" class="whitespace-nowrap shadow-none rounded-none " />
                <div>Drop a chat</div>
            </div>

            <div>
                <div class="max-h-[300px] h-full overflow-y-scroll">
                    <div
                    @mouseover="showDeleteBtn = true"
                    v-for="(message, index) in messages" 
                    :key="index" 
                    class="flex gap-2 relative p-2 items-center text-slate-300 font-sans hover:bg-neutral-900">
                        <div class="p-1 rounded-full bg-white border border-slate-400">
                            <img class="w-6 rounded-full" src="/programmer.svg" alt="">
                        </div>
                        <div class="p-1 m-auto max-w-[500px] w-[90%] text-xs">{{message.message}}</div>
                    </div>
                </div>
            </div>

            <div class="text-right px-3 py-2 text-xs md:text-sm bg-neutral-700">
                <button :class="[!writeMessage ? 'hover:bg-green-700' : 'hover:bg-red-700']" @click="writeMessage = !writeMessage" class="px-7 bg-white text-black uppercase hover:text-white py-1">{{ !writeMessage ? 'chat' : 'close' }}</button>
            </div>

            <Transition v-if="writeMessage" appear>
                <div  class="pl-12 text-slate-300 transition-all duration-150 py-2  bg-neutral-600">
                    <div class="flex items-center w-[90%] max-w-[400px] relative bg-gradient-to-tr from-pink-700 via-blue-600 to-red-300 rounded-full p-1 border border-neutral-700">
                        <input ref="messageInputRef" type="text" placeholder="drop a chat..." v-model="newMessage" class="rounded-full text-xs font-serif p-1 pl-5 w-full outline-none text-black placeholder:text-black">
                        <img @click="sendMessage" class="w-5 h-5 rotate-[40deg]" src="/sendBtn.svg" />
                    </div>
                    <div class="w-fit text-xs py-2">
                        <p class="py-2 text-white">ADD FILE...</p>
                        <div class="flex">
                            <input class="appearance-none file:bg-green-200 hover:file:bg-green-400 text-white  file:px-3 font-serif file:rounded-full file:border-none w-fit" v-on:change="chosenFile = true" type="file" name="" id="">
                            <button class="px-7 bg-white text-black uppercase hover:bg-black hover:text-white py-1">post</button>
                        </div>
                    </div>
                </div>
            </Transition>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import Tooltip from './Notifications/Tooltip.vue';

const toggleTooltip = ref(false)
const showDeleteBtn = ref(false)
const writeMessage = ref(false)
const chosenFile = ref(false)
const newMessage = ref('')
const numberOfLikes = ref(4)
const mediaMessage = ref(false)
const messageInputRef = ref(null)

const messages = ref([
    {
        img: '',
        message: 'I spent very little time on the site, I hope you like it.'
    },
])

const allSiteReviews = computed(() => {
    return {
        likes: numberOfLikes.value,
        messages: messages.value.length,
        views: 400
    }
})

const sendMessage = () => {
    if (newMessage.value.length) {
        messages.value.push({
            img: '',
            message: newMessage.value,
        })
        newMessage.value = ''
    }
    if (mediaMessage.value) {
        
    }
}

onMounted(() => {
    window.addEventListener('keyup', e => {
        if (e.target === messageInputRef.value && e.key === 'Enter') {
            sendMessage()
        }
    })
})

</script>


<style scoped>
.v-enter-from, .v-leave-to {
    opacity: 0;
}


.v-enter-active, .v-leave-active {
    transition: all 0.2s ease-in;
}
</style>




