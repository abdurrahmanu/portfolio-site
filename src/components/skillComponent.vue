<template>
    <div class="w-fit">
        <div class="rounded-full border-2 border-black bg-slate-300 w-fit m-auto">
            <div class="grid w-fit m-auto justify-center p-2">
                <img class="w-6 md:w-8" :src="svg + '.svg'" alt="">
            </div>
        </div>
        <div class="uppercase text-xs text-center font-mono font-bold p-2 dark:text-white text-black ">{{ skill }}</div>
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
