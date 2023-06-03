import { ref, watchEffect, onMounted } from "vue";

export function useOverlapNavBar(element) {
    const container = ref(element);
    const containerTop = ref(null);
    const containerBottom = ref(null)
    const emitBoolean = ref(false)

    onMounted(() => {
        containerBottom.value = container.value.getBoundingClientRect().bottom;
        containerTop.value = container.value.getBoundingClientRect().top;
    });

    window.addEventListener('scroll', event => {
        containerBottom.value = container.value.getBoundingClientRect().bottom;
        containerTop.value = container.value.getBoundingClientRect().top;
    });

    watchEffect(() => {
        if (containerTop.value < 100 && containerBottom.value > 100) {
            emitBoolean.value = true
        } else {
            emitBoolean.value = false
        }
    })

    return {emitBoolean}
};
