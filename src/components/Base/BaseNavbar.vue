<template>
    <div class="flex gap-10 md:gap-14 lg:gap-17  text-black text-2xl md:text-3xl">
        <div 
        :key="index"
        @click="navigateFunction(item)"
        v-for="(item, index) in navItems" 
        :class="[currentNavigation === item ? 'border-b border-black text-black': '']">
            <BaseNavItem :item="item" />
        </div>
    </div>
</template>

<script setup>
import BaseNavItem from './BaseNavItem.vue'

const emit = defineEmits(['currentNav'])
const props = defineProps({
    currentNavigation: String,
})

const navigateFunction = (item) => {
    emit('currentNav', item)
}

const navItems = ['Home', 'Projects', 'Resume', 'Github']
</script>

<style scoped>
</style>