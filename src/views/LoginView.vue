<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center px-4">
    <div class="w-full max-w-md">
      <!-- Logo -->
      <div class="text-center mb-10">
        <div class="flex items-center justify-center space-x-3 mb-10">
          <div class="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <div class="w-6 h-4 border-2 border-white rounded-sm"></div>
          </div>
          <h1 class="text-2xl font-bold text-primary">Platform Logo</h1>
        </div>
        
        <h2 class="text-3xl font-bold text-gray-900 mb-3">Welcome Back</h2>
        <p class="text-gray-500">Sign in to manage your products.</p>
      </div>

      <!-- Login Form -->
      <div class="bg-white rounded-2xl shadow-lg p-8">
        <form @submit.prevent="onSubmit" class="space-y-5">
          <div>
            <label class="block text-sm font-medium text-gray-900 mb-2">Email or Username</label>
            <input v-model="username" required placeholder="you@example.com"
              class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"/>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-900 mb-2">Password</label>
            <div class="relative">
              <input v-model="password" :type="showPassword ? 'text' : 'password'" required placeholder="Enter your password"
                class="w-full px-4 py-3 pr-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"/>
              <button type="button" @click="showPassword = !showPassword" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
              </button>
            </div>
          </div>

          <div class="flex items-center justify-between text-sm">
            <label class="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" v-model="remember" class="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary focus:ring-offset-0"/>
              <span class="text-gray-600">Remember me</span>
            </label>
            <a href="#" class="text-primary font-medium hover:opacity-80 transition-opacity">Forgot Password?</a>
          </div>

          <button type="submit" :disabled="loading"
            class="w-full py-3.5 rounded-lg bg-primary text-white font-semibold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 transition-all shadow-sm">
            <span v-if="!loading">Login</span>
            <span v-else>Logging in...</span>
          </button>

          <p v-if="error" class="text-red-600 text-sm text-center">{{ error }}</p>
        </form>
      </div>

      <footer class="mt-10 text-center text-sm text-gray-500">
        © 2024 Platform Inc. All Rights Reserved.
      </footer>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const username = ref('')
    const password = ref('')
    const remember = ref(false)
    const showPassword = ref(false)
    const auth = useAuthStore()
    const router = useRouter()
    const loading = ref(false)
    const error = ref(null)

    const onSubmit = async () => {
      loading.value = true
      error.value = null
      try {
        await auth.login({ username: username.value || 'kminchelle', password: password.value || '0lelplR' })
        router.push({ name: 'Products' })
      } catch (err) {
        error.value = auth.error || 'Invalid credentials.'
      } finally {
        loading.value = false
      }
    }

    return { username, password, remember, showPassword, onSubmit, loading, error }
  }
}
</script>