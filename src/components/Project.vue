<script setup>
import { onMounted } from 'vue';
import { ref } from 'vue';
import Skill from './Skill.vue'

const props = defineProps({
    title: {
        required: true,
        type: String,
    },
    description: {
        required: true,
        type: String,
    },
    url: {
        required: true,
        type: String,
    },
    image: {
        required: true,
        type: String,
    },
})

const url = ref(false);

const checkURL = () => {
    if (props.url === "disabled") {
        url.value = false;
    } else {
        url.value = true;
    }
}

onMounted(() => {
    checkURL();
});
</script>

<template>
    <div
        class="w-full h-80 bg-white/80 isolate flex flex-row items-center p-2 justify-between mb-4 rounded-lg shadow hover:shadow-xl transition duration-500">
        <div class="h-full w-4/6 flex flex-col items-start p-4">
            <div class="w-full">
                <h1 class="text-4xl mb-2">{{ props.title }}</h1>
                <hr class="w-full border-gray-400 mb-2">
                <p class="mb-4 min-h-42 max-h-42 overflow-hidden text-ellipsis md:text-clip">{{ props.description }}</p>
            </div>
            <div class="flex flex-row justify-end w-full">
                <a v-if="url" :href="props.url" target="_blank"
                    class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
                    ¡Visita el proyecto!
                </a>
                <span v-else class="bg-gray-400 text-white px-4 py-2 rounded cursor-not-allowed">
                    ¡Proyecto privado!
                </span>
            </div>

        </div>
        <div class="w-2/6 h-full p-2 rounded-md">
            <img class="h-full w-full object-cover rounded-md shadow-md" :src="props.image" alt="Project image">
        </div>
    </div>
</template>