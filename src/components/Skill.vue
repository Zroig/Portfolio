<script setup>
    const props = defineProps({
        title: {
            required: true,
            type: String,
        },
        description: {
            required: true,
            type: String,
        },
        image: {
            required: true,
            type: String,
        },
    })
</script>
<template>
    <div 
        class="skill-container w-full h-24 bg-white/20 isolate p-4 flex items-center justify-between rounded-lg shadow relative hover:shadow-xl transition duration-500"
        :style="{ '--background-image': `url(${props.image})` }"
    >
        <div class="flex flex-col items-start z-10">
            <h1 class="text-4xl">{{ props.title }}</h1>
            <p>{{ props.description }}</p>
        </div>
    </div>
</template>

<style scoped>
.skill-container {
    position: relative;
    overflow: hidden;
}

.skill-container::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: var(--background-image); /* Dynamically replace this with props.image */
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right center;
    opacity: 0.3; /* Adjust the opacity here */
    z-index: 1;
    pointer-events: none; /* Ensure it doesn't interfere with interactions */
}
</style>