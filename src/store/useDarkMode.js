import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useDarkMode = defineStore('darkmode', () => {
    const darkMode = ref(false)
    
    function checkLocalStorageForSavedBackground() {
        if (localStorage.getItem('portfolioBgMode')) {
            if (localStorage.getItem('portfolioBgMode').length) {
                if (localStorage.getItem('portfolioBgMode') == 'true') {
                    darkMode.value = true
                } else if (localStorage.getItem('portfolioMode' == 'false')) {
                    darkMode.value = false
                } 
            }
        } else {
            localStorage.setItem('portfolioBgMode', darkMode.value)
        }
    }

    const toggleDarkMode = computed(() => darkMode.value ? 'dark' : '');

    return {
        darkMode,
        toggleDarkMode,
        checkLocalStorageForSavedBackground,
    }
})