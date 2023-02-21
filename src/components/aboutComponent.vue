<template>
    <transition appear >
        <div class="text-gray-600">
            <div class="m-auto w-[400px]">
            <div class="">
                <h1 class="text-center text-2xl font-bold">
                    <span class="whitespace-pre hover:scale-50 hover:text-white" v-for="(letter, index) in name" :key="index">{{ letter }}</span>
                </h1>
                    <p class="text-center text-sm p-2">FRONTEND ENGINEER</p>
                    <div class="h-32 w-[40%] mb-3 rounded-full m-auto shadow-sm shadow-blue-300">
                    <img src="../assets/mypic.jpg" alt="" class="h-full w-full rounded-full">
                    </div>
                </div>
                <div class="p-2">
                    <p class="font-black text-center pb-2">MY STACK</p>
                    <ul class="flex justify-center gap-4 flex-wrap w-full">
                        <li v-for="stack in Object.keys(stacks)" :key="stack" class="list-disc list-inside flex gap-4 justify-between">
                            <span>{{ stack }}</span>
                            <!-- <automated_writing
                            :stack="stack"
                            :writing="stacks[stack]"
                            /> -->
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup>
import { ref, defineProps, onMounted } from 'vue'
import automated_writing from './automated_writing.vue';

const name = 'AHMED ABDULRAHMAN'
const props = defineProps({ stacks: Object })

</script>



