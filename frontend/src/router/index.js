import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Agenda from '../views/Agenda.vue';
import Alunas from '../views/Alunas.vue';
import Login from '../views/Login.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/agenda', component: Agenda },
  { path: '/alunas', component: Alunas },
  { path: '/login', component: Login },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
