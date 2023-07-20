<template>
    <div class="">
        <div class="text-white leading-7 min-h-[300px] grid place-content-center text-center w-[90%] max-w-[550px] m-auto">
            <div ref="imgContainer" class="">
                <div ref="" class="grid hover:drop-shadow-2xl rounded-full justify-center w-fit m-auto bg-slate-500 transition-all duration-500 hover:bg-slate-800 p-5 hover:scale-[90%]">
                    <img ref="img" class="w-24 transition-all duration-500" src="../../public/muslim_man.svg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref, watchEffect, onMounted} from 'vue'

const lastScrollPosition = ref(0)
const imgContainer = ref(null)
const img = ref(null)

onMounted(() => {
    lastScrollPosition.value = pageYOffset

    if (img.value instanceof HTMLElement && imgContainer.value instanceof HTMLElement) {
        if (lastScrollPosition.value > 210) {
            img.value.classList.remove('w-24')
            img.value.classList.add('w-7')
            imgContainer.value.classList.add('fixed', 'top-0', 'translate-x-[-50%]', 'left-[50%]', 'z-50')
        }
    }

    window.addEventListener('scroll', e => {
            lastScrollPosition.value = pageYOffset
    
            watchEffect(() => {
                if (img.value instanceof HTMLElement && imgContainer.value instanceof HTMLElement) {
                    if (lastScrollPosition.value > 160 && lastScrollPosition.value < 190) {
                        if (img.value.classList.contains('w-24')) img.value.classList.remove('w-24')
                        if (!img.value.classList.contains('w-7')) img.value.classList.add('w-7')
                        imgContainer.value.classList.add('fixed', 'top-0', 'translate-x-[-50%]', 'left-[50%]', 'z-50')
                    }
                    
                    if (lastScrollPosition.value < 100) {
                        if (img.value.classList.contains('w-7')) img.value.classList.remove('w-7')
                        if (!img.value.classList.contains('w-24'))  img.value.classList.add('w-24')
                        imgContainer.value.classList.remove('fixed', 'top-0', 'translate-x-[-50%]', 'left-[50%]', 'z-50')
                    }

                    if (lastScrollPosition.value > 210) {
                    img.value.classList.remove('w-24')
                    img.value.classList.add('w-7')
                    imgContainer.value.classList.add('fixed', 'top-0', 'translate-x-[-50%]', 'left-[50%]', 'z-50')
        }
                }

    
            })
        })
})

</script>

<style scoped>
</style>



