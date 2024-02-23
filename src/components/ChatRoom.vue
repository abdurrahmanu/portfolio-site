<template>    
    <div class="max-w-[500px] rounded-md relative space-y-1 py-1 bg-neutral-700 pb-4 font-mono">
        <div class="text-right px-1"><span @click="$emit('closeMessages')" class="text-red-500 px-1 bg-zinc-800 rounded-md">X</span></div>
        
            <div class="border-b border-b-gray-900">
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

            <div class="flex justify-between p-2 text-sm pl-12">
                <div class="flex w-fit justify-around gap-10 text-xs"> 
                    <div>
                        <img class="w-5 h-5" src="/message.svg" alt="">
                        <div class="text-center text-white">{{ allSiteReviews.messages }}</div>
                    </div>
                    <div>
                        <img class="w-7 h-5" src="/LoveTransparent.svg" alt="">
                        <div class="text-center text-white">{{allSiteReviews.likes}}</div>
                    </div>
                    <div>
                        <img class="w-7 h-5" src="/LoveTransparent.svg" alt="">
                        <div class="text-center text-white">{{allSiteReviews.views}}</div>
                    </div>
                </div>

                <div v-if="!writeMessage">
                    <button @click="writeMessage = !writeMessage" class="px-4 p-1 text-center bg-green-300 rounded-full">write message</button>
                </div>
            </div>

            <div v-if="writeMessage" class="pl-12 text-slate-300">
                <div class="flex gap-2 items-center w-[90%] max-w-[400px] relative">
                    <span @click="writeMessage = !writeMessage" class="font-mono absolute -left-8 text-red-500 px-1 bg-zinc-800 rounded-md">X</span>
                    <input ref="messageInputRef" type="text" v-model="newMessage" class="rounded-full dark:text-black text-xs font-serif p-1 pl-5 w-full outline-none text-black">
                    <img @click="sendMessage" class="w-5 h-5 rotate-[40deg]" src="/sendBtn.svg" />
                </div>
                <div class="w-fit text-xs">
                    <p class="py-2">ADD IMAGE FROM GALLERY...</p>
                    <div class="flex">
                        <input class="appearance-none file:bg-green-200  file:px-5 font-serif rounded-md file:outline-none" v-on:change="chosenFile = true" type="file" name="" id="">
                        <button :class="[chosenFile ? 'bg-green-400' : 'bg-red-400']" class="px-7 rounded-full">post</button>
                    </div>
                </div>
            </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'

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







