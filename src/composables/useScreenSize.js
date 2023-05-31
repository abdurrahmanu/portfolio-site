import { onMounted, ref, watchEffect } from 'vue';

export function useScreenSize(size) {
    const isBigScreen = ref(false);
    const verySmall = ref(false)
    const midScreen = ref(false)
    const xtraSmall = ref(false)
    const smallScreen = 600;

    window.addEventListener('resize', () => {
        isBigScreen.value = innerWidth > smallScreen;
        verySmall.value = innerWidth < 210
        xtraSmall.value = innerWidth < 180
        midScreen.value = innerWidth < 415
    });

    onMounted(() => {
            verySmall.value = innerWidth < 210
            isBigScreen.value = innerWidth > smallScreen;
            xtraSmall.value = innerWidth < 180
            midScreen.value = innerWidth < 415
        });

    return { isBigScreen, verySmall, xtraSmall, midScreen };
} 










