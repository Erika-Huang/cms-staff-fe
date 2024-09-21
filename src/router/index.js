import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    {
        path: '/login',
        component: () => import("@/views/admin/LoginView.vue")
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router