<template>
    <div class="w-[100%] min-w-[300px] bg-neutral-700 text-white dark:bg-neutral-800 p-4 px-6">
        <p class="text-center text-base font-mono md:text-lg p-3">YOU WILL BE REDIRECTED TO VIEW MY RESUME</p>
        <div class="flex gap-10 w-fit p-1 m-auto">
            <div class="text-center">
                <button @click="$emit('toggleResume', 'yes')" class="px-6 rounded-full p-2 text-xs text-white bg-green-500">YES</button>
            </div>
            <div class="text-center">
                <button @click="$emit('toggleResume', 'no')" class="px-6 rounded-full p-2 text-xs text-white bg-red-400">NO</button>
            </div>
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(['toggleResume'])
</script>