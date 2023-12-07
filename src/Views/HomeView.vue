<template>
    <div 
    class="home">
        <BaseHeader />
        <MainContent />
        <Projects />
        <BaseFooter />
        <Chat />
    </div>
</template>

<script setup>
import Chat from '../components/Chat.vue';
import Projects from '../components/Projects/projectsComponents.vue';
import BaseHeader from '../components/Base/BaseHeader.vue'
import BaseFooter from '../components/Base/BaseFooter.vue';
import MainContent from '../components/MainContent.vue';
import ClickMe from '../components/ClickMe.vue';
</script>

<style scoped> 
.home {
    @apply bg-slate-200 dark:bg-neutral-900 max-w-[1200px] mx-auto relative
}
</style>


















































