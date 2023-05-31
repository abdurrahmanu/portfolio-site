<template>
    <div class="grid gap-1 text-white hover:text-black items-center px-2 justify-center rounded-sm font-mono p-1">
        <div class="text-center flex justify-center">
            <img class="w-6" :src="svg + '.svg'" alt="">
        </div>
        <div class="text-center">
            <a @click="route(item)" :href="idLink">{{ item }}</a>
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';

const idLink = ref('')
const props = defineProps({
    item: String,
    svg: String
})

const route = (item) => {
    if (item !== 'resume') {
        idLink.value = '#' + item.toLowerCase()
    }
}

</script>