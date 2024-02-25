import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useScrollBar = defineStore('scroll', () => {
    const scrollPercent = ref(0)


    const scrollEvent = () => {
        console.log(scrollY, window.innerHeight);
        scrollPercent.value = (scrollY / (document.body.scrollHeight - window.innerHeight) ) * 100
        console.log(scrollPercent.value);
    }

    window.addEventListener('scroll', scrollEvent);

    return {
        scrollPercent,
    }
})