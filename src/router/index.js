import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import productsView from '../views/productsView.vue'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'
import cartView from '../views/cartView.vue'
import Product from '../views/ProductView.vue'
import categoryView from '../views/categoryView.vue'
import UserView from '../views/UserView.vue'




const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    component: productsView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView
  },
  {
    path: '/cart',
    name: 'cart',
    component: cartView
  },
  {
    path: '/products/:productId/',
    component: Product
  },
  {
    path: '/category',
    component: categoryView
  },
  {
    path: '/user',
    name: 'User',
    component: UserView
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
