<template>
    <ChatButton v-if="!showMessages" @click="showMessages = true" />
    <Modal :toggle="toggleModal" @close="showMessages = false">
        <ChatRoom @closeMessages="showMessages = false" :showMessages="showMessages" />
    </Modal>
</template>

<script setup>
import ChatButton from './ChatButton.vue'
import ChatRoom from './ChatRoom.vue'
import Modal from './Notifications/Modal.vue'
import {ref, watch} from 'vue'

const showMessages = ref(false)
const toggleModal = ref(false)

watch(showMessages, (newVal, oldVal) => {
    if (newVal) {
        toggleModal.value = true
    } else {
        toggleModal.value = false
    }
})

</script>