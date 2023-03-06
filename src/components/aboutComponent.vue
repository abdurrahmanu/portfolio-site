<template>
        <div class="text-gray-600 pb-10">
            <div class="m-auto max-w-[1000px] min-w-[400px] gap-10 md:gap-2">
            <div class="md:flex md:pb-10 justify-center">                
                <div class="md:my-auto ">
                    <div class="h-40 w-40 m-auto border md:h-52 md:w=52 rounded-lg">
                        <img src="../assets/mypic.jpg" alt="img" class="h-full w-full rounded-lg">
                    </div>
                    <h1 class="text-center text-2xl font-bold p-5">
                        <span class="whitespace-pre hover:scale-50 hover:text-gray-300" v-for="(letter, index) in name" :key="index">{{ letter }}</span>
                    </h1>
                </div>
                <div @mouseenter="showBg = true" @mouseleave="unload_background" class="relative md:mx-0 mx-auto max-w-[400px] lg:mr-0 border-2 rounded-md border-gray-200">
                    <div ref="element" :class="[showBg ?  'show_bg' : 'hide_bg']" class="w-[100%] h-[100%] absolute top-0 left-0 rounded-md"></div>
                    <div class="text-center text-lg p-5 m-auto relative">
                        lasdlfa sdflasjfd  asdfasjldf asdfasdfjkla sdfasdfas asdfa sdas fas dfasd fasd fqwe rdrh  yuer sdfg fgsd trwe ts a  ewt etrw aedfg fge twe rwer tet qe t as fas fa sew aerqwe rqwe rqw er wqe rqw er qwe rqw erasyer tasdfas werqwreqw grwrt3qewt gedseqwer astatqwee raserwe fsdt werqwe ryret wer dfs h sdgfss eerqwerq qerqwr hedrs fh ytutr urtyitry 
                    </div>
                </div>
            </div>
            <div class="max-w-[400px] m-auto">
                <p class="font-black text-center p-4">MY STACK</p>
                <div class="flex justify-center gap-4 flex-wrap w-full">
                    <div v-for="stack in Object.keys(stacks)" :key="stack" class="uppercase flex gap-4 justify-center hover:scale-90 bg-trasparent rounded-md p-1 
                    transition transition-delay-2s font-medium all ease hover:bg-gradient-to-r from-blue-800 via-blue-600 to-blue-200">
                        <span class="bg-gray-100 rounded-md p-1 px-4 text-xs">
                            {{ stack }}
                        </span>
                    </div>
                </div>
            </div>
            </div>
        </div>
</template>

<script setup>
import { ref, defineProps, onMounted, watchEffect } from 'vue'
import { stacks } from '../../composables/projectsList'
import automated_writing from './automated_writing.vue';

const name = 'AHMED ABDULRAHMAN'
const showBg = ref(false)
const element = ref(null)
const element_width = ref(null)


const unload_background = () => {
    showBg.value = false
    element_width.value = element.value.getBoundingClientRect().width
    element.value.style.width = element_width.value + 'px'
}

</script>

<style scoped>
.show_bg {
    transition: animation 7s ease;
    background: rgb(164, 165, 166);
    animation: load 3s;
}

.hide_bg {
    transition: animation 3s ease;
    background: rgb(164, 165, 166);
    animation: unload 3s;
}

@keyframes unload {
    100% {
        width: 0px;
    }
}

@keyframes load {
    0% {
        width: 0px;
    }
    100% {
        width: 100%
    }
}
</style>