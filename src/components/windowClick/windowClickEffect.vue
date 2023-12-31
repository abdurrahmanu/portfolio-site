<template>
    <div ref="effectElement" class="style transition-all duration-100 shadow-sm shadow-black"></div>
</template>

<script setup>
import { onMounted, defineEmits, ref } from 'vue';

const colorShades = [
    // Shades of blue
    "#0000FF",  // Deep blue
    "#007BFF",  // Royal blue
    "#17A2B8",  // Light blue

    // Shades of gray
    "#808080",  // Gray
    "#D3D3D3",  // Light gray
    "#F5F5F5",  // Very light gray

    // Shades of green
    "#008000",  // Green
    "#2E8B57",  // Sea green
    "#90EE90",  // Light green

    // Shades of yellow
    "#FFFF00",  // Yellow
    "#FFD700",  // Gold
    "#FFFFE0",  // Light yellow

    // Shades of pink
    "#FFC0CB",  // Pink
    "#FF69B4",  // Hot pink
    "#F0F8FF",  // Alice blue

    // Shades of red
    "#FF0000",  // Red
    "#DC143C",  // Crimson
    "#FF7F50",  // Coral

    // Shades of teal
    "#008080",  // Teal
    "#00CED1",  // Dark turquoise
    "#48D1CC",  // Medium turquoise

    // Shades of sky blue
    "#00BFFF",  // Deep sky blue
    "#87CEEB",  // Sky blue
    "#87CEFA",  // Light sky blue

    // Shades of orange
    "#FFA500",  // Orange
    "#FF8C00",  // Dark orange
    "#FFE4B5",  // Light orange

    // Purple
    "#9B30FF", // Electric purple
    "#800080", // Purple
    "#4B0082", // Indigo
    "#BA55D3", // Amethyst
    "#663399", // Iris
    "#C699FF", // Mauve
    "#E6E6FA", // Lavender
    "#DDA0DD", // Plum

    // Brown
    "#A52A2A", // Chestnut
    "#55280C", // Saddle brown
    "#CD853F", // Copper
    "#D2B48C", // Tan
    "#7E4212", // Chocolate
    "#8B4513", // Mahogany
    "#F4A460", // Sienna
    "#B76E25", // Cinnamon

    // Black
    "#000000", // Black
    "#191919", // Charcoal
    "#2F4F4F", // Graphite
    "#333333", // Slate
    "#555555", // Gunmetal
    "#666666", // Dark gray
    "#4D4D4D", // Charcoal gray
    "#363636", // Dark slate gray

    // White
    "#FFFFFF", // White
    "#F5F5F5", // Snow
    "#FAFAFA", // Ghost white
    "#F0F0F0", // Ivory
    "#DCDCDC", // Gainsboro
    "#E6E6E6", // Light gray
    "#EEEEEE", // Silver
    "#F8F8F8", // Alice white

    // Bonus Colors
    "#F0E68C", // Khaki
    "#708090", // Slate gray
    "#4286f4", // Dodger blue
    "#228B22", // Forest green
    "#FFD700", // Gold
    "#CD5C5C", // Indian red
    "#FF1493", // Deep pink
    "#00FFFF", // Cyan
];
const emit = defineEmits(['targetClicked'])
const effectElement = ref(null)
const props = defineProps({
    target: String,
    noException: Boolean,
    time: Number,
    direction: String,
    index: Number,
});

onMounted(() => {
    const intervalID = ref(null)
    document.body.style.height = '100vh';
    effectElement.value.style.display = 'hidden'

    window.addEventListener('click', event => {
        // if (event.srcElement.id || event.srcElement.parentElement.id || event.srcElement.parentElement.parentElement.id) {
        //     let srcEl = event.srcElement.id
        //     let srcElParent = event.srcElement.parentElement.id
        //     let srcElParentParent = event.srcElement.parentElement.parentElement.id

        //     if (srcEl) {

        //     } 

        //     else if (srcElParent) {

        //     }

        //     else if (srcElParentParent) {

        //     }
        // }

        clearInterval(intervalID.value);

        if (props.target && event.srcElement.id) {
            if (`effect-${event.srcElement.id}` === props.target && effectElement.value instanceof HTMLElement) {
                emit('targetClicked')
                document.getElementById(`${event.srcElement.id}`).appendChild(effectElement.value.parentElement)
                effectElement.value.style.background = colorShades[Math.floor(Math.random() * colorShades.length)]
                effectElement.value.style.top = event.clientY + 'px'
                effectElement.value.style.left = event.clientX + 'px'
                effectElement.value.style.right = event.clientX + 'px'
                effectElement.value.style.bottom = event.clientY + 'px'
                effectElement.value.style.transform = 'translate(-50%, -50%)'

                //FALLBACK
                effectElement.value.style.WebkitTransform = 'translate(-50%, -50%)'
                effectElement.value.style.msTransform = 'translate(-50%, -50%)'
                //...

                moveEffect(effectElement.value)
                effectElement.value.classList.remove('hidden')
                intervalID.value = setTimeout(() => {
                    effectElement.value.classList.add('hidden')
                }, 500);
            }
        }

        if (!props.target) {
            if (event.srcElement === document.body || (document.body.contains(event.srcElement)) && effectElement.value instanceof HTMLElement) {
                //If there are exceptions
                if (!props.noException) {
                    if (event.srcElement.dataset.noeffect) return
                }

                document.body.appendChild(effectElement.value.parentElement)
                effectElement.value.style.background = colorShades[Math.floor(Math.random() * colorShades.length)]
                effectElement.value.style.top = event.clientY + 'px'
                effectElement.value.style.left = event.clientX + 'px'
                effectElement.value.style.right = event.clientX + 'px'
                effectElement.value.style.bottom = event.clientY + 'px'
                effectElement.value.style.transform = 'translate(-50%, -50%)'

                //FALLBACK
                effectElement.value.style.WebkitTransform = 'translate(-50%, -50%)'
                effectElement.value.style.msTransform = 'translate(-50%, -50%)'
                //....

                effectElement.value.classList.remove('hidden')
                intervalID.value = setTimeout(() => {
                    effectElement.value.classList.add('hidden')
                }, 500);
            }
        }
    })
})

const moveEffect = (effectElement) => {
    if (props.direction === 'top') {
        let top = effectElement.style.top.slice(0, effectElement.style.top.length - 2)
        effectElement.style.top = +top - 35 + 'px'
    }


    else if (props.direction === 'left') {
        let left = effectElement.style.left.slice(0, effectElement.style.left.length - 2)
        effectElement.style.left = +left + 35 + 'px'
    }


    else if (props.direction === 'right') {
        let right = effectElement.style.right.slice(0, effectElement.style.right.length - 2)
        effectElement.style.right = +right + 35 + 'px'
    }


    else if (props.direction === 'bottom') {
        let bottom = effectElement.style.bottom.slice(0, effectElement.style.bottom.length - 2)
        effectElement.style.bottom = +bottom + 35 + 'px'
    }

    // if (props.direction === 'top-left') {
    // }

    // if (props.direction === 'top-right') {
    // }

    // if (props.direction === 'bottom-right') {
    // }

    // if (props.direction === 'bottom-left') {
    // }

    // if (props.direction === 't-top-left') {
    // }

    // if (props.direction === 't-top-right') {
    // }

    // if (props.direction === 'b-bottom-right') {
    // }

    // if (props.direction === 'b-bottom-left') {
    // }
}

</script>

<style scoped>
.style {
    @apply w-[10px] rounded-full fixed h-[10px]
}

</style>