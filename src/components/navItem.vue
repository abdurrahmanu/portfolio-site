<template>
    <div :class="[background === 'white' ? 'text-black' : 'text-white']" class="grid gap-1 hover:text-black items-center px-2 justify-center rounded-sm font-mono p-1">
        <div class="text-center flex justify-center">
            <a :href="idLink" @click="route(item)">
                <img class="w-6" :src="'../../public/' + svg + '.svg'" alt="">
            </a>
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
    svg: String,
    background: String,
})

const route = (item) => {
    if (item !== 'resume') {
        idLink.value = '#' + item.toLowerCase()
    }
}

</script>