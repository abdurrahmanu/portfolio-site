<template>
    <div class="container">
        <div class="copyright">{{ copyright }}</div>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const copyright = computed(() => `@Copyright ${new Date().getFullYear() }`)
</script>

<style scoped>
.container {
    @apply md:bg-none dark:md:bg-none m-auto pt-5
}

.copyright {
    @apply dark:text-slate-300 text-black font-bold font-mono italic text-center
}
</style>