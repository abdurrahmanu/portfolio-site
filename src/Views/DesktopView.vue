<template>
    <div class="bg-neutral-950 pt-36" v-if="isBigScreen">
        <div class="p-4">
            <div ref="" class="grid hover:drop-shadow-2xl rounded-full justify-center w-fit m-auto bg-slate-500 transition-all duration-500 hover:bg-slate-800 p-5 hover:scale-[90%]">
                <img ref="img" class="w-32 transition-all duration-500" src="../../public/muslim_man.svg" alt="">
            </div>
        </div>
        <desktopNavBarComponent />
        <div class="text-slate-200 w-[900px] text-lg font-mono  p-4 m-auto text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aliquam asperiores minima quas veritatis expedita quaerat laudantium tempora aspernatur saepe?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aliquam asperiores minima quas veritatis expedita quaerat laudantium tempora aspernatur saepe?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aliquam asperiores minima quas veritatis expedita quaerat laudantium tempora aspernatur saepe?
        </div>
        <MySkills />
        <MyProjects />
        <FootComponent />
    </div>
</template>

<script setup>
import { useScreenSize } from '../composables/useScreenSize';
import desktopNavBarComponent from '../components/desktopNavBarComponent.vue';
import MySkills from '../components/skillsComponent.vue';
import MyProjects from '../components/projectsComponents.vue';
import FootComponent from '../components/footComponent.vue';

const {isBigScreen} = useScreenSize()
</script>