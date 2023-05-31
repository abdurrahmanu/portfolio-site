import { ref, watchEffect } from "vue";

export function useOverlapNavBar (colour) {
    const color = ref(false)

    watchEffect(() => {
        color.value = colour
    })

    return color
};
