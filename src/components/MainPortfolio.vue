<script setup>
import { ref } from 'vue';
import Project from './Project.vue'
import Skill from './Skill.vue'

const selectedProject = ref('about-me');

const scrollToProject = () => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        if (!selectedProject.value) return;

        const project = document.getElementById(selectedProject.value);
        let headerOffset = 150;
        let projectPosition = project.getBoundingClientRect().top;
        let offsetPosition = projectPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}
</script>

<template>
    <header
        class="fixed top-5 left-0 right-0 h-24 rounded-lg shadow-lg bg-white w-11/12 flex flex-row items-center p-2 justify-between mx-auto z-50">
        <h1 class="text-2xl md:text-4xl">Portfolio Mateo Cerna</h1>
        <div>
            <select class="bg-gray-100 px-4 py-2 rounded shadow hover:shadow-xl transition duration-500 cursor-pointer"
                @change="scrollToProject()" name="projects" id="projects" v-model="selectedProject">
                <option value="about-me">Sobre mi</option>
                <option value="osiris">Osiris</option>
                <option value="scope">Scope</option>
                <option value="zstep">Z-Step Rythm Mania</option>
            </select>
        </div>
    </header>

    <main class="pt-28">
        <div class="w-5/6 min-h-24 mx-auto flex flex-col mt-15">
            <!-- Info about me -->
            <div class="w-full bg-white/80 p-4 rounded-lg shadow mb-4 isolate hover:shadow-xl transition duration-500"
                id="about-me">
                <h1 class="text-4xl mb-2">Sobre mi</h1>
                <hr class="w-full border-gray-400 mb-2">
                <div class="flex flex-col-reverse md:flex-row justify-around w-full">
                    <p class="text-lg text-gray-600 leading-relaxed max-w-lg">
                        <span class="font-semibold text-gray-800">¡Hola! 👋</span> Soy un <span
                            class="text-green-500 font-bold">programador web full-stack</span> enfocado en
                        <span class="text-red-500 font-bold">Laravel</span> y <span class="text-green-400 font-bold">Vue
                            3</span>. Actualmente trabajo como
                        <span class="text-blue-500 font-bold">profesor de programación</span> en
                        <a href="https://codelearn.es/"
                            class="text-blue-400 hover:text-green-400 duration-200 transition-colors underline">CodeLearn</a>.
                        <br><br>
                        Mi objetivo es <span class="font-semibold text-gray-800">mejorar un poco cada día</span> y
                        compartir mis conocimientos con los demás. ¡Gracias por visitar mi portfolio! 🚀
                    </p>
                    <div class="flex flex-col items-center">
                        <img src="/mateo.png" alt="Mateo Cerna"
                            class="rounded-full w-32 h-32 object-cover shadow-lg transition-transform duration-300 hover:scale-110">
                        </img>
                        <a href="https://www.linkedin.com/in/mateo-cerna-994b59263/" target="_blank"
                            class="mt-4 text-blue-600 hover:text-blue-800 transition duration-300">
                            <i class="fab fa-linkedin fa-2x"></i>
                        </a>
                    </div>
                </div>
            </div>
            <h1 class="text-6xl mb-8 border-b-2 border-gray-400">Habilidades</h1>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full gap-2">
                <Skill title="PHP" description="Formación y experiencia en PHP ^8.0."
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/640px-PHP-logo.svg.png">
                </Skill>
                <Skill title="Laravel" description="Formación y experiencia en Laravell ^11.0."
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/640px-Laravel.svg.png">
                </Skill>
                <Skill title="Java" description="Formación en Java, JDK ^17."
                    image="https://education.oracle.com/file/general/p-80-java.png"></Skill>
                <Skill title="JavaScript" description="Formación y experiencia en JavaScript."
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/330px-Unofficial_JavaScript_logo_2.svg.png">
                </Skill>
                <Skill title="Vue" description="Formación y experiencia en Vue 3."
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png">
                </Skill>
                <Skill title="CSS" description="Formación y experiencia en CSS 3."
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png">
                </Skill>
                <Skill title="HTML" description="Formación y experiencia en HTML 5."
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png">
                </Skill>
                <Skill title="Tailwind" description="Formación y experiencia en Tailwind ^3."
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png">
                </Skill>
                <Skill title="Bootstrap" description="Formación en Bootstrap."
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png">
                </Skill>
                <Skill title="MySQL" description="Formación en MySQL y MariaDB."
                    image="https://d1.awsstatic.com/asset-repository/products/amazon-rds/1024px-MySQL.ff87215b43fd7292af172e2a5d9b844217262571.png">
                </Skill>
                <Skill title="Git" description="Formación y experiencia en Git."
                    image="https://avatars.githubusercontent.com/u/18133?s=280&v=4"></Skill>
                <Skill title="JQuery" description="Formación en JQuery ^3.0."
                    image="https://miro.medium.com/v2/resize:fit:860/0*eFomJUFua8tuqe8g.png"></Skill>
                <Skill title="Node" description="Formación y experiencia en NodeJS ^21.0."
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png">
                </Skill>
                <Skill title="GML" description="Experiencia en GML (Game Maker Language)."
                    image="https://cdn.creazilla.com/icons/3256724/file-type-light-gamemaker-icon-md.png"></Skill>
                <Skill title="Python" description="Formación en Python ^3.10."
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png">
                </Skill>
                <Skill title="WordPress"
                    description="Formación y experiencia en WordPress, WooCommerce, Divi, Elementor, Beaver Builder y desarrollo de plugins y temas."
                    image="https://s.w.org/style/images/about/WordPress-logotype-wmark.png"></Skill>
                <Skill title="Ubuntu Server" description="Formación en Ubuntu Server ^20.0"
                    image="https://www.irontec.com/image/trainingsFull/18-curso-linux-ubuntu-administracion-basico.png">
                </Skill>
                <Skill title="Windows Server" description="Formación en Windows Server ^2019"
                    image="https://www.uc3m.es/sdic/media/sdic/img/mediana/original/im_microsoft-ssoo-cliente---icono/im_microsoft-ssoo-cliente---icono.png">
                </Skill>
            </div>
            <h1 class="text-6xl mb-8 border-b-2 border-gray-400">Proyectos</h1>
            <Project id="osiris" title="Osiris"
                description="Osiris es una aplicación web creada para ayudar a organizar las tareas del día a día, lecturas, estudios y recuerdos. Usando herramientas por la creación y finalización de tareas, el método Pomodoro de estudio y una integración con inteligencia artificial para poder resumir textos y preparar planes de estudio personalizados."
                url="https://osiris.cat/" image="./projects/osiris.PNG"></Project>
            <Project id="scope" title="Scope"
                description="Scope nace no como un producto sino como una solución por un problema que todo el mundo puede tener, la falta de gestión. Más en concreto nos centramos a ofrecer una herramienta para poder gestionar tareas y mantenimientos sobre las máquinas que pueda tener el cliente. Nuestro gestor ofrece opciones como añadir usuarios, tareas y máquinas, gestión de roles, lector y generador de QR, etc. Just el que una empresa como la tuya necesita. #JOINSCOPE"
                url="disabled" image="./projects/scope.svg"></Project>
            <Project id="zstep" title="Z-Step Rythm Mania"
                description="Z-Step Rythm Mania es un proyecto basado en crear un juego de ritmo con PHP y JavaScript puro, usando JSONs en vez de bases de datos."
                url="disabled" image="./projects/zstep.png"></Project>
        </div>
    </main>
</template>