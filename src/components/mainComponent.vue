<template>
    <div ref="container" class="min-h-fit">
        <NavBar :background="background" />
        <baseButton />
        <mainTab />
    </div>
</template>

<script setup>
import { ref, defineEmits, onMounted, defineProps } from 'vue';
import NavBar from '../components/navBarComponent.vue';
import baseButton from '../components/baseButtonComponent.vue';
import mainTab from '../components/mainTab.vue';
import { useOverlapNavBar } from '../composables/topOverlapsNavBar'

const container = ref(null)
const emit = defineEmits(['inView'])
const props = defineProps({
    background : String
})

onMounted(() => {
    const { emitBoolean } = useOverlapNavBar(container.value)
    window.addEventListener('scroll', event => {
        if (emitBoolean.value) {
            emit('inView', 'teal')
        }
    })
})

</script>