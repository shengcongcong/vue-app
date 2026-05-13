import { createRouter, createWebHistory } from 'vue-router'
import BackendLayout from '../components/BackendLayout.vue'
const backendRouters = [
    {
        path: '/',
        redirect: '/back'
    },
    {
        path: '/back',
        name: 'home',
        component: BackendLayout,
        children: [

        ]
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes: backendRouters
})
export default router
