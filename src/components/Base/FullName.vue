<template>
        <div class="flex gap-3 p-3 pl-1 screen-small:text-base text-lg  font-mono uppercase justify-start font-black  dark:font-light">
            <div>
                <span class="px-[1px]  hover:text-neutral-400" v-for="(letter, index) in lastName" :key="index">{{ letter }}</span>
            </div>
            <div>
                <span class="px-[1px]  hover:text-neutral-600" v-for="(letter, index) in firstName" :key="index">{{ letter }}</span>
            </div>
            </div>
</template>

<script setup>
const firstName = 'Abdulrahman'
const lastName = 'Ahmed'
</script>

