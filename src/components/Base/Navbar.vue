<template>
    <div class="flex gap-3 md:gap-5  lg:gap-8 py-5  text-black  h-fit justify-center">
        <div 
        :key="index"
        @click="navigateFunction(item)"
        v-for="(item, index) in navItems" 
        :class="[currentNavigation === item ? 'border-b dark:border-b-slate-200 border-black text-black': '']">
            <NavItem :item="item" />
        </div>
    </div>
</template>

<script setup>
import NavItem from './NavItem.vue'

const emit = defineEmits(['currentNav'])
const props = defineProps({
    currentNavigation: String,
})

const navigateFunction = (item) => {
    emit('currentNav', item)
}

const navItems = ['Home', 'Projects', 'Github']
</script>

<style scoped>
</style>