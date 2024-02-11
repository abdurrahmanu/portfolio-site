<template>
    <div class="w-[100%] max-w-[400px] bg-neutral-700 text-white dark:bg-neutral-800 p-4 px-6">
        <p class="text-center md:text-xl p-3">YOU WILL BE REDIRECTED TO VIEW MY RESUME</p>
        <div class="flex gap-10 w-fit p-1 m-auto">
            <div class="text-center">
                <button @click="$emit('toggleResume', 'yes')" class="px-6 rounded-full p-[2px] text-white bg-green-500">YES</button>
            </div>
            <div class="text-center">
                <button @click="$emit('toggleResume', 'no')" class="px-6 rounded-full p-[2px] text-white bg-red-400">NO</button>
            </div>
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(['toggleResume'])
</script>