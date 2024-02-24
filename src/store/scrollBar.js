import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useScrollBar = defineStore('scroll', () => {
    const scrollPercent = ref(0)

const scrollEvent = () => {
    scrollPercent.value = (scrollY / document.body.scrollHeight) * 100
}

window.addEventListener('scroll', scrollEvent);

    return {
        scrollPercent,
    }
})