import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
    {
        path: '/generarToken',
        component: () => import('../pages/Token.vue')
    },
    {
        path: '/guardarEstudiante',
        component: () => import('../pages/Estudiante.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('../pages/NoFoundPage.vue')
    }
]

const router = createRouter({history: createWebHashHistory(), routes})
export default router