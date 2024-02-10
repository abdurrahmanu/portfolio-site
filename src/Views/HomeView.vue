<template>
    <div 
    class="home">
        <Header />
        <MainContent />
        <Projects />
        <MessageMe />
        <Footer />
        <Chat />
    </div>
</template>

<script setup>
import Chat from '../components/Chat.vue';
import MessageMe from '../components/MessageMe.vue'
import Projects from '../components/Projects/projectsComponents.vue';
import Header from '../components/Base/Header.vue'
import Footer from '../components/Base/Footer.vue';
import MainContent from '../components/MainContent.vue';
</script>

<style scoped> 
.home {
    @apply bg-slate-200 dark:bg-neutral-900 max-w-[1200px] mx-auto relative pt-20 md:pt-32
}
</style>


















































