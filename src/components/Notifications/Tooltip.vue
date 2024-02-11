<template>
        <div v-show="toggle" :class="[toggle ? 'block' : 'hidden']" class="w-fit h-fit absolute top-[-100%] rounded-md px-1 text-xs uppercase text-black shadow-sm font-bold font-mono  shadow-black bg-slate-100 p-[1px] z-[99] text-center translate-x-[-50%] left-[50%]">{{ value }}</div>
</template>

<script setup>
const props = defineProps({ 
    value: String,
    toggle: Boolean,
})
</script>