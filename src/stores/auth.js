import { defineStore } from 'pinia'
import axios from 'axios'

const API_BASE = 'https://dummyjson.com'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
    user: null,
    error: null,
    initialized: false
  }),
  getters: {
    isAuthenticated: (state) => !!state.token
  },
  actions: {
    async login({ username, password }) {
      this.error = null
      try {
        const res = await axios.post(`${API_BASE}/auth/login`, {
          username,
          password
        })
        this.token = res.data.accessToken
        this.user = { id: res.data.id, username: res.data.username, ...res.data }
        // persist
        localStorage.setItem('aliensoft_auth', JSON.stringify({ token: this.token, user: this.user }))
      } catch (err) {
        this.error = err?.response?.data?.message || 'Login failed'
        throw err
      }
    },
    logout() {
      this.token = null
      this.user = null
      localStorage.removeItem('aliensoft_auth')
    },
    async restoreSession() {
      const raw = localStorage.getItem('aliensoft_auth')
      if (raw) {
        try {
          const parsed = JSON.parse(raw)
          this.token = parsed.token
          this.user = parsed.user
        } catch (e) {
          console.warn('failed to parse session', e)
        }
      }
      this.initialized = true
    }
  }
})
