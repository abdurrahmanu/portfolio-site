<template>
    <div ref="container" class="min-h-fit pb-2">
        <NavBar @open-resume="$emit('open-resume', $event)" :navSelection="navSelection" />
        <mainTab />
        <baseButton />
    </div>
</template>

<script setup>
import { ref, defineEmits, onMounted, defineProps, watchEffect } from 'vue';
import NavBar from '../components/navBarComponent.vue';
import baseButton from '../components/baseButtonComponent.vue';
import mainTab from '../components/mainTab.vue';
import { useOverlapNavBar } from '../composables/topOverlapsNavBar'

const container = ref(null)
const props = defineProps({
    navSelection: 'String'
})

</script>