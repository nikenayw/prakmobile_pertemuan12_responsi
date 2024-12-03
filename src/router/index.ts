import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import Login from '../views/Login.vue';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', name: 'login', component: Login },
  { path: '/home', name: 'home', component: HomePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
