import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GuestView from '../views/GuestView.vue'
import UserView from '../views/UserView.vue'
import MyCard from '../components/user/MyCard.vue'
import ProductList from '../components/user/ProductList.vue'
import UserProfile from '../components/user/UserProfile.vue'
import  RegisterView from '../components/auth/RegisterView.vue'
import  LoginView from '../components/auth/LoginView.vue'
import AdminView from '../views/AdminView.vue'
import ManageUsers from '../components/admin/ManageUsers.vue'
import ManageProduct from '../components/admin/ManageProduct.vue'
import AddProduct from '../components/admin/AddProduct.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/guestview',
    name: 'GuestView',
    component: GuestView
  },
  {
    path: '/loginview',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/registerview',
    name: 'RegisterView',
    component: RegisterView
  },
  {
    path: '/userview',
    name: 'UserView',
    component: UserView
  },
  {
    path: '/userview/mycard',
    name: 'MyCard',
    component: MyCard
  },
  {
    path: '/userview/productlist',
    name: 'ProductList',
    component: ProductList
  },
  {
    path: '/userview/userprofile',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/adminview',
    name: 'AdminView',
    component: AdminView
  },
  {
    path: '/manageusers',
    name : 'ManageUsers',
    component : ManageUsers,
  },
  {
    path: '/manageproduct',
    name : 'ManageProduct',
    component : ManageProduct,
  },
  {
    path: '/addproduct',
    name : 'AddProduct',
    component : AddProduct,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
