<template>
    <div class="max-w-[600px] bg-neutral-700 text-white dark:bg-neutral-800 p-4 px-6">
        <p class="text-center md:text-xl p-3">NOT AVAILABLE NOW</p>
        <div class="flex justify-center gap-10 w-fit p-1 m-auto">
            <div class="text-center">
                <button @click="$emit('toggleResume', 'no')" class="px-6 rounded-full p-[2px] text-white bg-red-400">CLOSE</button>
            </div>
        </div>
    </div>
</template>