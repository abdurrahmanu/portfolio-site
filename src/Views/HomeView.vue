<template>
    <div class="bg-slate-200 dark:bg-neutral-900 max-w-[1200px] mx-auto pt-20 md:pt-32 selection:bg-inherit relative">
        <Header />
        <AboutMe />
        <Skills />
        <Projects />
        <SendAMessage />
        <Footer />
        <Chat />
        <Scroller top/>
    </div>
</template>

<script setup>
import Chat from '../components/Chat.vue';
import Skills from '../components/Skills/Skills.vue';
import AboutMe from '../components/Base/AboutMe.vue';
import SendAMessage from '../components/SendAMessage.vue'
import Projects from '../components/Projects/Projects.vue';
import Header from '../components/Base/Header.vue'
import Footer from '../components/Base/Footer.vue';
import Scroller from '../components/Scroller.vue';
</script>
















































