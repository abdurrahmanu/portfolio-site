<template>
    <Teleport to="#modal">
        <Transition>           
            <div @click="toggleModal" v-if="toggle" class="fixed h-screen w-full top-0 left-0 bg-black opacity-40"></div>
        </Transition>
        <Transition name="content">
            <div class="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] " v-if="toggle" >
                <div class="bg-black text-white place-content-center p-2 rounded-md">
                    <div @click="toggleModal" class="absolute top-0 right-2">x</div>
                    <slot ></slot>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    toggle: Boolean
})
const emit = defineEmits(['false'])
const toggleModal = () => {
    emit('false')
}

</script>

<style scoped>
.v-enter-from {
    scale: 70%;
}

.v-enter-active {
    transition: scale .2s linear;
}

.content-leave-to {
    opacity: 30%;
}

.content-leave-active {
    transition: .1s linear;
}

.v-leave-to {
    opacity: 0;
}

.v-leave-active {
    transition: all .3s linear;
}
</style>