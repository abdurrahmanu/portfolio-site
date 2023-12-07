<template>
    <div class="w-fit grid gap-3 justify-center hover:relative delay-1000 hover:top-[-10px] transition-all">
        <div class="rounded-full p-2  hover:bg-slate-400 bg-white">            
            <img class="w-4 sm:w-5 m-auto" :src="`/${svg}.svg`" alt="">
        </div>
    </div>
</template>

<script setup>
import { defineProps} from 'vue';

const props = defineProps({
    index: Number,
    skill: String,
    svg: String,
})

</script>
