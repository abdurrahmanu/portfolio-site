<template>
    <div @click="route(item)" class="grid gap-1 text-white hover:text-black items-center px-2 justify-center rounded-sm font-mono p-1">
        <div class="text-center flex justify-center">
            <img class="w-5" :src="'../../public/' + svg + '.svg'" alt="">
        </div>
        <div class="text-center text-xs">
            <a v-if="!midSmall">{{ item }}</a>
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';
import { useScreenSize } from '../composables/useScreenSize';

const emit = defineEmits(['open-resume'])
const {isBigScreen, midScreen, verySmall, midSmall} = useScreenSize()
const idLink = ref('')
const props = defineProps({
    item: String,
    svg: String,
})

const route = (arg) => {
    console.log(arg);
    if (arg !== 'Resume') {
        idLink.value = '#' + arg.toLowerCase()
        window.location = idLink.value
    } else {
        emit('open-resume', true)
    }
}

</script>