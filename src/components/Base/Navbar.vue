<template>
    <div class="flex gap-3 md:gap-5  lg:gap-8 py-3  text-black  h-fit justify-center">
        <div 
        :key="index"
        v-for="(item, index) in navItems" >
            <NavItem :item="item" />
        </div>
    </div>
</template>

<script setup>
import NavItem from './NavItem.vue'
const navItems = ['Github']
</script>