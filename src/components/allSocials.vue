<template>
    <div id="social" class="max-w-fit m-auto p-1 py-8 sm:p-4">
        <div class="max-w-[400px] px-3 p-1 gap-4 flex flex-wrap justify-center m-auto rounded-lg sm:gap-5">
            <img v-for="(svgName, index) in svgsNames" :key="index" class="w-8" :src="`${svgName}`" alt="" >
        </div>
    </div>
</template>

<script setup>

const svgsNames = ['phone.svg', 'twitter.svg', 'linkedin.svg', 'facebook.svg', 'email.svg', 'document.svg']

</script>

<style scoped>

</style>