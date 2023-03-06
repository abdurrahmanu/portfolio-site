<template>
    <footer id="footer">
        <div class="bg-gray-700 px-5 pt-5 absolute w-full left-0">
        <div class="flex justify-center p-5 items-center text-sm">
            <div class="text-whtite bg-gray-300 p-1 font-bold border-r-2 border-black">MESSAGE</div>
            <input type="text" class="outline-none bg-white p-1 w-[200px]">
            <button class="bg-blue-400 px-3 rounded-r-full p-1">SEND</button>
        </div>
        <ul class="flex gap-5 justify-center pb-5">
            <li v-for="i in 5" :key="i" class="bg-white w-10 h-10 rounded-full"></li>
        </ul>
        <p class="text-white text-center font-mono p-3 pb-8">Ahmed Abdulrahman <span>2022 Copyright</span></p>
        </div>
    </footer>
</template>