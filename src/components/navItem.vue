<template>
    <div class="grid gap-1 text-white hover:text-black items-center px-2 justify-center rounded-sm font-mono p-1">
        <div class="text-center flex justify-center">
            <img class="w-6" src="../assets/vue.svg" alt="">
        </div>
        <div class="text-center">
            <a @click="call(item)" :href="idLink">{{ item }}</a>
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';

const idLink = ref('')
const props = defineProps({
    item: String
})

const call = (item) => {
    if (item !== 'home' && item !== 'resume') {
        idLink.value = '#' + item.toLowerCase()
        console.log(idLink.value);
    }
}

</script>

<style lang="scss" scoped>

</style>