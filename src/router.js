import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'hello',
      meta: { layout: 'auth' },
      component: () => import('./views/HelloComponent'),
    },
    {
      path: '/game',
      name: 'game',
      meta: { layout: 'game' },
      component: () => import('./layouts/GameLayout'),
    },
    {
      path: '/about',
      name: 'about-project',
      meta: { layout: 'auth' },
      component: () => import('./components/TheAboutProject.vue'),
    },
    {
      path: '/login',
      name: 'login',
      meta: { layout: 'auth' },
      component: () => import('./views/LoginComponent.vue'),
    },
    {
      path: '/register',
      name: 'register',
      meta: { layout: 'auth' },
      component: () => import('./views/RegisterComponent.vue'),
    },
  ],
});

export default router;
 