<template>
    <useToolTip :value="svg">
        <div class="w-fit">
            <div class="rounded-full border-2 border-black bg-slate-300 w-fit m-auto">
                <div class="grid w-fit m-auto justify-center p-2">
                    <img class="w-7 md:w-10" :src="`/${svg}.svg`" alt="">
                </div>
            </div>
        </div>
    </useToolTip>
</template>

<script setup>
import useToolTip from '../useComponents/useToolTipNotification.vue'
const props = defineProps({
    index: Number,
    svg: String,
})

</script>
