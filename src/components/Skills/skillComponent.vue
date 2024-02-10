<template>
    <useToolTip :value="svg" class="small-screen:hidden">
        <div class="w-fit">
            <div class="rounded-full border-2 border-black bg-slate-300 w-fit m-auto screen-small:hidden">
                <div class="grid w-fit m-auto justify-center p-2">
                    <img class="w-4 md:w-6" :src="`/${svg}.svg`" alt="">
                </div>
            </div>
        </div>
        <div class="hidden screen-small:block text-center text-sm font-mono uppercase border px-1 rounded-md hover:border-blue-400 bg-zinc-300">{{ svg }}</div>
    </useToolTip>
</template>

<script setup>
import useToolTip from '../useComponents/useToolTipNotification.vue'
const props = defineProps({
    index: Number,
    svg: String,
})

</script>
