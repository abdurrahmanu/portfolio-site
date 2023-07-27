<template>
    <div @click="route(item)" class="grid relative gap-1 text-black font-bold hover:text-black items-center px-2 justify-center rounded-sm font-mono p-1">
        <div class="text-center flex justify-center">
            <img :class="[size === 'large' ? 'w-8' : 'w-6']" class="" :src="svg + '.svg'" alt="">
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref, defineEmits } from 'vue';
import { useScreenSize } from '../composables/useScreenSize';

const emit = defineEmits(['contact-modal', 'highlight-resume'])
const {midSmall} = useScreenSize()
const idLink = ref('')

const props = defineProps({
    item: String,
    svg: String,
    size: String
})

const route = (arg) => {
    if (arg === 'Contact') {
        emit('contact-modal')
        return
    } else if (arg !== 'Resume') {
        idLink.value = '#' + arg.toLowerCase()
        window.location = idLink.value
    } else emit('highlight-resume')
}

</script>