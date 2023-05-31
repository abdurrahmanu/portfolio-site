<template>
    <div class="py-20">
        <div v-if="xtraSmall" class="text-sm font-mono text-center py-2">Download</div>
        <div class="p-[2px] bg-teal-600 w-fit m-auto hover:scale-110 transition duration-75 rounded-full">
            <button class="rounded-full p-2 bg-white hover:text-white hover:bg-teal-500 sm:px-6 uppercase text-sm flex items-center gap-2">
                <programmerAvatar v-if="!verySmall" /> <span v-if="!xtraSmall">Download Resume</span> <DownloadArrowSvg /> </button>
        </div>
    </div>
</template>

<script setup>
import DownloadArrowSvg from './svgs/downloadArrowSvg.vue';
import programmerAvatar from './svgs/programmerAvatar.vue';
import { useScreenSize } from '../composables/useScreenSize';
import { onMounted, watchEffect } from 'vue';

const { isBigScreen, verySmall, xtraSmall } = useScreenSize()

</script>

<style lang="scss" scoped>

</style>