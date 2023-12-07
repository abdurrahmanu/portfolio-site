<template>
    <img 
    class="absolute z-[999] animate-pulse w-4"
    src="/WhiteStar.png">
</template>                                                                     

<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
    top: Number,
    left: Number,
    right: Number,
    baseStar: String
})

const positionTop = ref(props.top + 'px')
const positionLeft = ref(props.left + 'px')
const positionRight = ref(props.right + 'px')
</script>

<style scoped>
img {
    position: absolute;
    top: v-bind('positionTop');
    left : v-bind('positionLeft');
    right: v-bind('positionRight')
}

</style>        