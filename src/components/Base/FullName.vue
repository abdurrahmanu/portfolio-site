<template>
        <div class="flex gap-3 p-3 screen-small:text-sm text-base  font-mono text-black uppercase justify-start font-black dark:text-slate-100 dark:font-light">
            <div>
                <span class="px-[1px] " v-for="(letter, index) in lastName" :key="index">{{ letter }}</span>
            </div>
            <div>
                <span class="px-[1px] " v-for="(letter, index) in firstName" :key="index">{{ letter }}</span>
            </div>
            </div>
</template>

<script setup>
const firstName = 'Abdulrahman'
const lastName = 'Ahmed'
</script>

