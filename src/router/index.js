import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import ProductsView from '../views/ProductsView.vue'
import ProductView from '../views/ProductView.vue'
import ProductNewView from '../views/ProductNewView.vue'
import { useAuthStore } from '../stores/auth'

const routes = [
  { path: '/login', name: 'Login', component: LoginView },
  { path: '/', redirect: '/products' },
  { path: '/products', name: 'Products', component: ProductsView },
  { path: '/products/new', name: 'ProductNew', component: ProductNewView },
  { path: '/products/:id', name: 'ProductView', component: ProductView, props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// global guard
router.beforeEach(async (to, from, next) => {
  const auth = useAuthStore()
  // ensure session restored
  if (!auth.initialized) {
    await auth.restoreSession()
  }
  const isAuth = auth.isAuthenticated

  if (to.name === 'Login' && isAuth) {
    return next({ name: 'Products' })
  }
  // protect all other routes if not authenticated
  if (to.name !== 'Login' && !isAuth) {
    return next({ name: 'Login' })
  }
  next()
})

export default router
