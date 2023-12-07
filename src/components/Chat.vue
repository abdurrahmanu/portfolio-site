<template>
    <div v-if="!showMessages" @click="showMessages = true" class="ml-4 md:w-[70px] md:h-[70px] w-[60px] h-[60px] shadow-md sticky z-[999] bottom-6 left-4 shadow-zinc-400 grid place-content-center bg-white rounded-full rounded-bl-none dark:text-slate-400 dark:bg-neutral-600 dark:shadow-black">
        <div class="text-center text-[13px] md:text-base p-2">CHAT</div>
    </div>

    <useModalComponent
    :toggleDelay="1000"
    :toggle="showMessages"
    @false="showMessages = false">

    <div v-if="showMessages" class=" dark:text-slate-200 dark:bg-neutral-800 bg-slate-200 w-[90%] rounded-lg max-w-[500px] mt-2 m-auto p-4 py-6 fixed border border-slate-700 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <div class="text-right font-mono p-2 pt-0 absolute top-0 right-0"><span @click="showMessages = false">X</span></div>

            <div class="my-4 border border-gray-300 rounded-md  pr-1 relative dark:border-neutral-600 w-[90%] m-auto overflow-y-scroll max-h-[200px]">
                
                <div class="max-h-[200px] h-full">
                    <div
                    @mouseover="showDeleteBtn = true"
                    v-for="(message, index) in messages" 
                    :key="index" 
                    class="flex gap-2 relative p-2 py-2 items-center border-b dark:border-neutral-300 border-slate-300 hover:bg-slate-300">
                        <div class="p-1 rounded-full bg-white border border-slate-400">
                            <img class="w-5 h-6 rounded-full" src="message.svg" alt="">
                        </div>
                        <div class="p-1 m-auto max-w-[500px] w-[90%] text-xs">{{message.message}}</div>
                        <div v-if="showDeleteBtn" class="text-xs absolute right-[5px] top-[50%] translate-y-[-50%]">del</div>
                    </div>
                    <!-- after:w-2 after:h-2 after:bg-black after:rounded-full after:absolute after:left-[-5px] after:top-[50%] after:translate-y-[50%] -->
                </div>
            </div>

            <div class="flex uppercase text-[10px] gap-10 w-[85%] py-2 m-auto justify-around"> 
                <div class="">
                    <img class="w-5 h-5" src="message.svg" alt="">
                    <div class="text-center">{{ allSiteReviews.messages }}</div>
                </div>
                <div class="">
                    <img class="w-7 h-5" src="LoveTransparent.svg" alt="">
                    <div class="text-center">{{allSiteReviews.likes}}</div>
                </div>
                <div class="">
                    <img class="w-7 h-5" src="LoveTransparent.svg" alt="">
                    <div class="text-center">{{allSiteReviews.views}}</div>
                </div>
            </div>

            <div v-if="!writeMessage" class="text-right pr-10 p-2">
                <button @click="writeMessage = true" class="text-xs px-4 p-1 text-center bg-blue-300 dark:bg-cyan-600 rounded-full">write message</button>
            </div>

            <div v-if="writeMessage" class="w-[90%] mt-2 m-auto  py-1 max-w-[500px]">
                <div class="flex items-center relative w-[90%] max-w-[400px] m-auto gap-5">
                    <input ref="messageInputRef" type="text" v-model="newMessage" class="rounded-full dark:text-black text-xs p-1 pl-5 w-full outline-none">
                    <img @click="sendMessage" class="w-5 h-5 rotate-[40deg]" src="sendBtn.svg" />
                </div>
                <div class="pl-5 py-1 w-fit text-xs">
                    <p class="py-2 font-mono">ADD IMAGE FROM GALLERY...</p>
                    <div class="flex gap-4 m-auto">
                        <input class="" v-on:change="chosenFile = true" type="file" name="" id="">
                        <button :class="[chosenFile ? 'bg-green-400' : 'bg-red-400']" class="px-7 rounded-full">post</button>
                    </div>
                </div>
            </div>
        </div>

    </useModalComponent>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import useModalComponent from './useComponents/useModalComponent.vue'

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
        message: 'My site is nice.'
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







