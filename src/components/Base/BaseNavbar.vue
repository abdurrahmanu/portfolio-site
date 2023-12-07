<template>
    <div class="nav">
        <div 
        :key="index"
        @click="navigateFunction(item)"
        v-for="(item, index) in navItems" 
        :class="[currentNavigation === item ? 'current-nav': '']">
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
.nav {
    @apply flex gap-4 md:gap-7 lg:gap-9 text-sm text-black sm:text-base lg:text-[14px]
}

.current-nav {
    @apply border-b border-slate-200 text-slate-200
}

</style>