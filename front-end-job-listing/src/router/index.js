import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/authStore';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Homepage.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginPage.vue'),
      meta: {
        hideNavbar: true,
       }

    },
    {
      path: '/job-list',
      name: 'job-list',
      component: () => import('../views/JobListPage.vue')

    }
    
  ]
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (to.path === '/job-list' && !authStore.isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router
