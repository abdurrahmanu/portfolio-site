<template>
    <div class="bg-slate-200 dark:bg-neutral-900 max-w-[1200px] mx-auto selection:bg-inherit relative">
        <Header />
        <AboutMe />
        <Skills />
        <Projects />
        <SendAMessage />
        <Footer />
        <Chat />
    </div>
</template>

<script setup>
import Skills from '../components/Skills/Skills.vue';
import AboutMe from '../components/Base/AboutMe.vue';
import SendAMessage from '../components/SendAMessage.vue'
import Projects from '../components/Projects/Projects.vue';
import Header from '../components/Base/Header.vue'
import Footer from '../components/Base/Footer.vue';
import Chat from '../components/Chat.vue';
</script>
















































