<template>
    <div id="social" class="max-w-fit m-auto p-1 sm:p-4">
        <div class="grid justify-center w-fit p-4 m-auto">
            <p class="font-mono text-lg text-white p-2 text-center">CONTACT ME</p>
            <div class="flex relative">
                <input placeholder="email address" class="rounded-full p-2 min-w-[300px] lg:w-[600px] outline-none pl-8" type="text">
                <img class="w-6 absolute left-1 top-[50%] translate-y-[-50%]" src="../../public/email.svg" alt="">
                <button class="bg-teal-700 rounded-r-full p-[10px] text-white absolute right-[-1px] top-[50%] translate-y-[-50%]">SUBMIT</button>
            </div>
            <div class="grid justify-center py-4">
                <div class="rounded-md w-fit bg-black p-[5px] grid place-content-center">
                    <textarea placeholder="enter message" class="p-2 lg:w-[500px] outline-none rounded-sm" name="" id="" cols="30" rows="4"></textarea>
                </div>
            </div>
        </div>
        <div class="max-w-[400px] pb-10 gap-6 flex flex-wrap justify-center m-auto p-5 sm:gap-5">
            <img v-for="(svgName, index) in svgsNames" :key="index" class="w-8 animate" :src="`../../public/${svgName}.svg`" alt="" >
        </div>
    </div>
</template>

<script setup>
const svgsNames = ['phone', 'twitter', 'linkedin', 'facebook', 'document']

</script>

<style>
.animate {
    animation: animate 0.8s infinite;
    transition: all ease 1s;
}

@keyframes animate {
    0% {
        scale: 90%;
        opacity: 0.5
    };
    100% {
        scale: 100%;
    }
}
</style>