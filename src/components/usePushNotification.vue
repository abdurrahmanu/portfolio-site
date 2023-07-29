<template>
    <Teleport to="#modal">
        <div v-if="toggle" class="fixed z-[10] max-w-[90%] top-40 left-[50%] translate-x-[-50%] m-auto">
            <div>
                <Transition name="width-increase">
                    <div v-if="topLeft" class="bg-green-800 h-[3px] absolute left-0 w-[50%]"></div>
                </Transition>
                <Transition name="width-increase">
                    <div v-if="topRigth" class="bg-red-500 h-[3px]  absolute right-0 w-[50%]"></div>
                </Transition>
            </div>
            <div class="m-auto">
                <slot />
            </div>
            <div>
                <Transition name="width-increase">
                    <div v-if="bottomLeft" class="bg-green-800 h-[3px] absolute left-0 w-[50%]"></div>
                </Transition>
                <Transition name="width-increase">
                    <div v-if="bottomLeft" class="bg-red-500 h-[3px] absolute right-0 w-[50%]"></div>
                </Transition>
            </div>
        </div>
    </Teleport>
</template>

<script setup>
import { defineProps, ref, defineEmits, watchEffect } from 'vue';

const intervalId = ref(null)
const props = defineProps({
    toggle: Boolean
})

const emit = defineEmits(['false'])
const topLeft = ref(false)
const topRigth = ref(false)
const bottomLeft = ref(false)
const bottomRight = ref(false)

watchEffect(() => {
    if (props.toggle) {
        setTimeout(() => {            
            topLeft.value = true
            topRigth.value = true
            bottomLeft.value = true
            bottomRight.value = true
        }, 100);
        intervalId.value = setTimeout(() => {
            topLeft.value = false
            topRigth.value = false
            bottomLeft.value = false
            bottomRight.value = false
            if (props.toggle) {
                emit('false', 'completed');
            } else return
        }, 6000);
    } else {
        clearInterval(intervalId.value)
        topLeft.value = false
        topRigth.value = false
        bottomLeft.value = false
        bottomRight.value = false
    }
})

</script>

<style scoped>
.width-increase-enter-from {
    width: 0px;
}

.width-increase-enter-active {
    animation: move 6s ease;
}

@keyframes move {
    0% {
        width: 0px;
    };
    100% {
        width: 50%;
    }
}
</style>