<script setup>
import { ref, onMounted} from 'vue'
import headerComponent from './components/headerComponent.vue'
import footerComponent from './components/footComponent.vue'
import aboutComponent from './components/aboutComponent.vue'
import projectsComponent from './components/projects.vue'
import roundSidebar from './components/roundSidebar.vue'

const show_nav = ref(false)
const is_big_screen = ref(false)
const open_sidebar = ref(false)

window.addEventListener('resize', () => {
  window.innerWidth > 550 ? is_big_screen.value = true : is_big_screen.value = false;
});

window.addEventListener('scroll', () => {
  window.scrollY > 150 ? show_nav.value = true : show_nav.value = false;
});

onMounted(() => {
  window.innerWidth > 550 ? is_big_screen.value = true : is_big_screen.value = false;
})

</script>

<template>
  <div class="pt-24 bg-zinc-100 px-10 h-full">
    <roundSidebar @toggle="open_sidebar = !open_sidebar" :open_sidebar="open_sidebar"  v-if="!is_big_screen"/>
    <headerComponent  :is_big_screen="is_big_screen" v-if="show_nav || is_big_screen" />
    <aboutComponent />
    <projectsComponent :is_big_screen="is_big_screen" />
    <footerComponent />
  </div>
</template>

<style scoped>
</style>






























