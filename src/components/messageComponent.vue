<template>
    <div class="bg-slate-700 p-16">
        <div class="m-auto w-fit rounded-sm grid gap-5">
            <form action="POST" class="grid gap-6 bg-stone-400 p-4">
                <div v-for="i in 5" :key="i">
                    <label for="name" class="self-center p-1 text-white">NAME</label>
                    <input class="outline-none pl-4" id="name" autocomplete="on" type="text" placeholder="name">
                </div>
            </form>
            <form action="POST" class="grid gap-6 bg-stone-400 p-4">
                <div v-for="i in 5" :key="i">
                    <label for="name" class="self-center p-1 text-white">NAME</label>
                    <input class="outline-none pl-4" id="name" autocomplete="on" type="text" placeholder="name">
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
</script>

<style>

</style>