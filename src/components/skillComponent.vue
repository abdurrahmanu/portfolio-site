<template>
    <div class="border-2 border-white rounded-md">
        <div 
        :class="[`hover:bg-gradient-to-br hover:from-${colours[index]}-700 hover:via-${colours[index]}-400 hover:to-white`]"
        class="p-[5px] rounded-md w-fit transition-all duration-200 ">
            <div class="grid justify-center p-5">
                <img class="w-16" :src="svgs[index] + '.svg'" alt="">
            </div>
            <div :class="[`bg-${colours[index]}-400`]" class="p-2 md:text-xl font-bold text-center bg-white rounded-md">{{ skill }}</div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
    index: Number,
    skill: String
})

const svgs = ref(['html', 'html', 'javascript', 'vue', 'vue', 'vue', 'vue'])
const colours = ref(['red', 'blue', 'yellow', 'teal', 'gray', 'blue', 'blue'])

</script>

<style lang="scss" scoped>

</style>