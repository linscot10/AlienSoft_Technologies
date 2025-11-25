import { defineStore } from 'pinia'
import axios from 'axios'
import { useAuthStore } from './auth'
const API_BASE = 'https://dummyjson.com'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [],
    isLoading: false,
    error: null,
  }),
  actions: {
    async fetchProducts(query = '') {
      this.isLoading = true
      this.error = null
      try {
        
        const res = await axios.get(`${API_BASE}/products${query}`)
        
        this.products = res.data.products
      } catch (err) {
        this.error = 'Failed to load products'
      } finally {
        this.isLoading = false
      }
    },
    async fetchProductById(id) {
      this.isLoading = true
      try {
        const res = await axios.get(`${API_BASE}/products/${id}`)
        this.isLoading = false
        return res.data
      } catch (err) {
        this.isLoading = false
        throw err
      }
    },
    async addProduct(payload) {
      this.isLoading = true
      const auth = useAuthStore()
      try {
        const headers = auth.token ? { Authorization: `Bearer ${auth.token}` } : {}
        const res = await axios.post(`${API_BASE}/products/add`, payload, { headers })
        // API returns created product - push to local state
        this.products.unshift(res.data)
        return res.data
      } catch (err) {
        throw err
      } finally {
        this.isLoading = false
      }
    },
    async deleteProduct(id) {
      this.isLoading = true
      const auth = useAuthStore()
      try {
        const headers = auth.token ? { Authorization: `Bearer ${auth.token}` } : {}
        const res = await axios.delete(`${API_BASE}/products/${id}`, { headers })
        // update store: remove
        this.products = this.products.filter(p => String(p.id) !== String(id))
        return res.data
      } catch (err) {
        throw err
      } finally {
        this.isLoading = false
      }
    },
    async updateProduct(id, payload) {
      this.isLoading = true
      const auth = useAuthStore()
      try {
        const headers = auth.token ? { Authorization: `Bearer ${auth.token}` } : {}
        const res = await axios.put(`${API_BASE}/products/${id}`, payload, { headers })
        // sync store
        this.products = this.products.map(p => (p.id === id ? res.data : p))
        return res.data
      } catch (err) {
        throw err
      } finally {
        this.isLoading = false
      }
    }
  }
})
