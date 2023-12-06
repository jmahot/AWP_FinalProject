import { createRouter, createWebHistory } from 'vue-router';
import GuestView from '../views/GuestView.vue';
import LoginView from '../components/auth/LoginView.vue';
import RegisterView from '../components/auth/RegisterView.vue';

const routes = [
  {
    path: '/',
    name: 'guestview',
    component: GuestView,
  },
  {
    path: '/loginview',
    name: 'loginview',
    component: LoginView,
  },
  {
    path: '/registerview',
    name: 'registerview',
    component: RegisterView,
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
