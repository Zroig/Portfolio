import { createMemoryHistory, createRouter } from "vue-router";

import MainPortfolio from "../components/MainPortfolio.vue";

const routes = [
    { path: '/', component: MainPortfolio}
];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router;