<template>
    <Teleport to="body">
        <Transition name="overlay">           
            <div @click="emitToggleValue" v-if="toggle" class="fixed top-0 left-0 w-full h-screen bg-black opacity-40 z-[999999]"></div>
        </Transition>
        <Transition :name="transitionType" mode="in-out" appear>
            <div ref="modalEl" class="fixed w-full z-[9999999]" v-if="toggle" >
                <div class="h-full w-fit max-w-[500px] min-w-[80%] shadow-sm m-auto">
                    <slot ></slot>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup>
import { ref, onBeforeMount, onMounted, watchEffect } from 'vue';

const transitionType = ref('')
const modalEl = ref(null)
const toggle = ref(false)
const emit = defineEmits(['close'])

const props = defineProps({
    toggle: {
        type: Boolean,
        default: false,
    },
    left: {
        type: Boolean,
        default: false,
    },
    right: {
        type: Boolean,
        default: false,
    },
    top: {
        type: Boolean,
        default: false,
    },
    bottom: {
        type: Boolean,
        default: false,
    },
    full: {
        type: Boolean,
        default: false
    }
})

onBeforeMount(() => {
    if (!props.left && !props.right && !props.top && !props.bottom) {
        transitionType.value = 'auto'
    }

    if (props.left) {
        transitionType.value = 'left'
    }

    if (props.right) {
        transitionType.value = 'right'
    }

    if (props.top) {
        transitionType.value = 'top'
    }

    if (props.bottom) {
        transitionType.value = 'bottom'
    }
})

onMounted(() => {
    watchEffect(() => {
        if (props.toggle && modalEl.value instanceof HTMLElement) {
            if (!props.left && !props.right && !props.top && !props.bottom) {
                modalEl.value.className += ' top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-md'
            }

            if (props.left) {
                modalEl.value.className += ' top-0 left-0 h-full max-w-[40%]'
            }
    
            if (props.right) {
                modalEl.value.className += ' right-0 top-0 h-full max-w-[40%]'
            }
    
            if (props.top) {
                modalEl.value.className += ' top-0 lleft-0 w-full max-h-20%'
            }
    
            if (props.bottom) {
                modalEl.value.className += ' bottom-0 left-0 w-full max-h-[20%]'
            }
        }
    })
})

watchEffect(() => {
    if (props.toggle) toggle.value = true
    if (!props.toggle) toggle.value = false
})

const emitToggleValue = () => {
    toggle.value = false
    emit('close')
}
</script>

<style scoped>
/* ENTER */
.bottom-enter-from {
    transform: translateY(100%);
}

.left-enter-from {
    transform: translateX(-100%);
}

.right-enter-from {
    transform: translateX(100%);
}

.auto-enter-from {

}

.top-enter-from {
    transform: translateY(-100%);
}

/* LEAVE */

.bottom-leave-to {
    transform: translateY(100%);
}

.left-leave-to {
    transform: translateX(-100%);
}

.right-leave-to {
    transform: translateX(100%);
}

.top-leave-to {
    transform: translateY(-100%);
}

/* ENTER ACTIVE */

.left-enter-active, 
.top-enter-active,
.right-enter-active,
.auto-enter-active,
.bottom-enter-active {
        transition: all 0.3s ease;
}

/*  LEAVE ACTIVE */

.left-leave-active, 
.top-leave-active,
.right-leave-active,
.auto-leave-active,
.bottom-leave-active {
        transition: all 0.3s ease;
}

</style>











