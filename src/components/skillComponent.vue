<template>
    <div class="">
        <div class="bg-white rounded-full">
            <div 
            class=" rounded-md transition-all duration-200 ">
                <div class="grid justify-center p-4">
                    <img class="lg:w-16 w-10" :src="'../../public/' + svg + '.svg'" alt="">
                </div>
            </div>
        </div>
        <div class="uppercase text-xs text-center font-mono font-bold p-2 text-white">{{ skill }}</div>
    </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { ref, defineProps, onBeforeMount, onMounted } from 'vue';

const props = defineProps({
    index: Number,
    skill: String,
    svg: String,
})



</script>
