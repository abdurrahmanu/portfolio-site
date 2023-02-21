<template>
    <TransitionGroup v-if="screen_width > 1000" name="fade" tag="div" class="flex bg-black px-1 w-[80%] text-center text-white whitespace-nowrap items-center">
            <span 
            v-for="(letter, index) in writing" :key="index"
            v-show="writing_time === index || writing_time > index"
            class="whitespace-pre text-xs">
                {{ letter }}
            </span>
    </TransitionGroup>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const writing_time = ref(-1)
const screen_width = ref(innerWidth)
const props = defineProps({
    stack: String,
    writing: String,
});
window.addEventListener('resize', () => screen_width.value = innerWidth)

setInterval(() => {
    if (screen_width.value > 1000) {  
        setTimeout(() => writing_time.value += 1, 800);      
        if (writing_time.value === props.stacks['HTML']) {
            writing_time.value = -1;
        }
    } else {
        writing_time.value = -1
    }
}, 500);

</script>