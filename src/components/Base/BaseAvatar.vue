<template>
    <div class="pl-7">
        <div class="container">
            <img ref="img" class="avatar" src="/muslim_man.svg">
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.container {
    @apply inline-block dark:bg-slate-500 dark:shadow-black shadow-md bg-gray-200 hover:drop-shadow-2xl rounded-full w-fit m-auto transition-all duration-500 p-7 screen-big:p-9 hover:scale-[90%]
}

.avatar {
    @apply w-28 screen-big:w-48 transition-all duration-500
}
</style>