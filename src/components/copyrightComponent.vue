<template>
    <div class="py-5 dark:bg-[url('../../public/black-with-white-crack.png')] bg-[url('../../public/white-with-black-crack.png')] md:bg-none dark:md:bg-none">
        <div class="dark:text-slate-300 text-black font-mono italic text-center pb-3">@Copyright {{ new Date().getFullYear() }}</div>
    </div>
</template>

<script setup>
import { useScreenSize } from '../composables/useScreenSize';

const { isBigScreen } = useScreenSize()
</script>

<style lang="scss" scoped>

</style>