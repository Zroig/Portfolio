<script setup>
import { ref } from 'vue';
import Project from './Project.vue'
import Skill from './Skill.vue'

const selectedProject = ref('');

const scrollToProject = () => {
    if (!selectedProject.value) return;
    console.log(selectedProject.value);
    const project = document.getElementById(selectedProject.value);
    console.log(selectedProject.value);
    project.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
    <header class="fixed top-5 left-0 right-0 h-24 rounded-lg shadow-lg bg-white w-11/12 flex flex-row items-center p-2 justify-between mx-auto z-50">
        <h1 class="text-4xl">Portfolio Mateo Cerna</h1>
        <div>
            <select class="bg-gray-100 px-4 py-2 rounded shadow hover:shadow-xl transition duration-500 cursor-pointer" @change="scrollToProject()" name="projects" id="projects" v-model="selectedProject">
                <option value="">Sobre mi</option>
                <option value="osiris">Projecte 1</option>
                <option value="totmaquina">Projecte 2</option>
            </select>
        </div>
    </header>

    <main class="pt-28">
        <div class="w-5/6 min-h-24 mx-auto flex flex-col mt-15">
            <!-- Info about me -->
            <div class="w-full bg-white/80 p-4 rounded-lg shadow mb-4 isolate hover:shadow-xl transition duration-500">
                <h1 class="text-4xl mb-2">Sobre mi</h1>
                <hr class="w-full border-gray-400 mb-2">
                <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <h1 class="text-6xl mb-8 border-b-2 border-gray-400">Habilitats</h1>
            <div class="grid grid-cols-6 w-full gap-2">
                <Skill title="PHP" description="Descripció de la skill 1" image="/vite.svg"></Skill>
                <Skill title="Laravel" description="Descripció de la skill 2" image="/vite.svg"></Skill>
                <Skill title="Java" description="Descripció de la skill 3" image="/vite.svg"></Skill>
                <Skill title="JavaScript" description="Descripció de la skill 4" image="/vite.svg"></Skill>
                <Skill title="Vue" description="Descripció de la skill 5" image="/vite.svg"></Skill>
                <Skill title="CSS" description="Descripció de la skill 6" image="/vite.svg"></Skill>
                <Skill title="Tailwind" description="Descripció de la skill 7" image="/vite.svg"></Skill>
                <Skill title="Bootstrap" description="Descripció de la skill 8" image="/vite.svg"></Skill>
                <Skill title="MySQL" description="Descripció de la skill 9" image="/vite.svg"></Skill>
                <Skill title="Git" description="Descripció de la skill 10" image="/vite.svg"></Skill>
                <Skill title="JQuery" description="Descripció de la skill 11" image="/vite.svg"></Skill>
                <Skill title="Node" description="Descripció de la skill 12" image="/vite.svg"></Skill>
            </div>
            <h1 class="text-6xl mb-8 border-b-2 border-gray-400">Projectes</h1>
            <Project id="osiris" title="Projecte 1" description="Descripció del projecte 1" url="https://www.google.com" image="vite.svg"></Project>
            <Project id="totmaquina" title="Projecte 2" description="Descripció del projecte 2" url="https://www.google.com" image="vite.svg"></Project>
        </div>
    </main>
</template>