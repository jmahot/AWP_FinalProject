import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../components/Auth/Login.vue'
import Register from '../components/Auth/Register.vue'
import MyCard from '../components/User/MyCard.vue'
import ProductList from '../components/User/ProductList.vue'
import UserProfile from '../components/User/UserProfile.vue'
import AdminView from '../components/Admin/AdminView.vue'
import ManageProduct from '../components/Admin/ManageProduct.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/my_card',
    name: 'my_card',
    component: MyCard
  },
  {
    path: '/product_list',
    name: 'product_list',
    component: ProductList
  },
  {
    path: '/user_profile',
    name: 'user_profile',
    component: UserProfile
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView
  },
  {
    path: '/manage_product',
    name: 'manage_product',
    component: ManageProduct
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
