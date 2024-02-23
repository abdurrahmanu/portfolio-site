<template>    
    <div v-if="!showMessages" @click="showMessages = true" class="ml-4 md:w-[50px] md:h-[50px] w-[40px] h-[40px] shadow-md z-[999] bottom-3 shadow-zinc-400 grid place-content-center bg-white rounded-full rounded-bl-none dark:text-slate-400 dark:bg-neutral-600 dark:shadow-black fixed">
        <div class="text-center text-[10px] md:text-base p-2 dark:text-slate-200">CHAT</div>
    </div>

    <Modal
    :toggle="showMessages"
    @close="showMessages = false">

    <div v-if="showMessages" class="rounded-md relative space-y-1 py-1 ring-1 bg-neutral-700 dark:bg-neutral-800">
        <div class="text-right font-mono text-white px-1"><span @click="showMessages = false">X</span></div>
        
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
                        <div class="text-center">{{ allSiteReviews.messages }}</div>
                    </div>
                    <div>
                        <img class="w-7 h-5" src="/LoveTransparent.svg" alt="">
                        <div class="text-center">{{allSiteReviews.likes}}</div>
                    </div>
                    <div>
                        <img class="w-7 h-5" src="/LoveTransparent.svg" alt="">
                        <div class="text-center">{{allSiteReviews.views}}</div>
                    </div>
                </div>

                <div v-if="!writeMessage">
                    <button @click="writeMessage = true" class="px-4 p-1 text-center bg-blue-300 dark:bg-cyan-600 rounded-full">write message</button>
                </div>
            </div>

            <div v-if="writeMessage" class="pl-12 text-slate-300">
                <div class="flex gap-2 items-center w-[90%] max-w-[400px]">
                    <input ref="messageInputRef" type="text" v-model="newMessage" class="rounded-full dark:text-black text-xs p-1 pl-5 w-full outline-none">
                    <img @click="sendMessage" class="w-5 h-5 rotate-[40deg]" src="/sendBtn.svg" />
                </div>
                <div class="w-fit text-xs">
                    <p class="py-2 font-mono">ADD IMAGE FROM GALLERY...</p>
                    <div class="flex">
                        <input class="appearance-none file:bg-green-200  file:px-5 font-serif rounded-md file:outline-none" v-on:change="chosenFile = true" type="file" name="" id="">
                        <button :class="[chosenFile ? 'bg-green-400' : 'bg-red-400']" class="px-7 rounded-full">post</button>
                    </div>
                </div>
            </div>
    </div>

    </Modal>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import Modal from './Notifications/Modal.vue'

const showDeleteBtn = ref(false)
const showMessages = ref(false)
const writeMessage = ref(false)
const chosenFile = ref(false)
const newMessage = ref('')
const emit = defineEmits(['notWrite', 'write'])
const liked = ref(false)
const numberOfLikes = ref(4)
const mediaMessage = ref(false)
const messageInputRef = ref(null)

const like = () => {
    if (!liked.value) {
        liked.value = true
        numberOfLikes.value++
    } else {
        liked.value = false
        numberOfLikes.value--
    }
}

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
// const deleteMyMessage = (message) => {
//     if (sentByMe) {
//         messages.value = messages.value.filter((singleMessage) => {
//             message !== singleMessage
//         }) 
        
//     }
// }

</script>







