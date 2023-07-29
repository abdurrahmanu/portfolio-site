<template>
    <div class="min-h-fit text-center w-fit m-auto pt-[0px]">
        <div class="">
            <div class="grid hover:drop-shadow-2xl self-baseline rounded-full justify-center w-fit m-auto bg-slate-500 transition-all duration-500 hover:bg-slate-800 p-5 hover:scale-[90%]">
                <img ref="img" class="w-24 transition-all duration-500" src="../../public/muslim_man.svg" alt="">
            </div>
        </div>
    </div>
    <aboutComponent />
</template>

<script setup>
import { ref, watchEffect, onMounted } from 'vue'
import aboutComponent from './aboutComponent.vue'
import { useScreenSize } from '../composables/useScreenSize';

const {fixedPictureMinScreen, isBigScreen} = useScreenSize()

onMounted(() => {
})

</script>