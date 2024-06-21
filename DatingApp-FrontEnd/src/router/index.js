import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { useAuthStore } from '@/stores/authStore.js';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/SignView.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/RegisterView.vue')
    },
    {
        path: '/main',
        name: 'main',
        component: () => import('../views/MainView.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/match',
        name: 'match',
        component: () => import('../views/MatchView.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/matchlist',
        name: 'matchlist',
        component: () => import('../views/MatchListView.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import('../views/ProfileView.vue'),
        meta: {requiresAuth: true}
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!authStore.isAuthenticated) {
            next({ name: 'login' });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;