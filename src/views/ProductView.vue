<template>
  <div class="min-h-screen bg-gray-100">
    <AppHeader />
    <div class="max-w-7xl mx-auto py-8 px-4">
      <!-- Breadcrumb -->
      <div class="mb-6">
        <nav class="flex text-sm text-gray-600">
          <button @click="back" class="hover:text-gray-900 transition-colors">Products</button>
          <span class="mx-2">/</span>
          <span class="text-gray-900 font-medium">{{ product?.title || 'Loading...' }}</span>
        </nav>
      </div>

      <div v-if="loading" class="bg-white rounded-2xl shadow-lg p-12 text-center">
        <Spinner/>
      </div>

      <div v-else-if="product" class="space-y-8">
        <!-- Product Details Card -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            <!-- Product Image -->
            <div class="bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center aspect-square">
              <img v-if="product.thumbnail" :src="product.thumbnail" :alt="product.title" class="w-full h-full object-cover"/>
              <div v-else class="text-gray-400">
                <svg class="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </div>
            </div>

            <!-- Product Info -->
            <div class="flex flex-col">
              <div class="flex-1">
                <h1 class="text-3xl font-bold text-gray-900 mb-3">{{ product.title }}</h1>
                <p class="text-gray-600 text-lg mb-6">{{ product.description }}</p>

                <button class="inline-flex items-center space-x-2 px-5 py-2.5 bg-indigo-50 text-primary hover:bg-indigo-100 rounded-lg font-medium transition-all mb-8">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                  </svg>
                  <span>Edit Product</span>
                </button>

                <!-- Product Details Grid -->
                <div class="space-y-6">
                  <div>
                    <h3 class="text-sm font-medium text-gray-600 mb-2">Price</h3>
                    <p class="text-3xl font-bold text-gray-900">${{ product.price }}</p>
                  </div>

                  <div>
                    <h3 class="text-sm font-medium text-gray-600 mb-2">Category</h3>
                    <span class="inline-block px-4 py-1.5 bg-indigo-50 text-primary rounded-full text-sm font-medium">
                      {{ product.category }}
                    </span>
                  </div>

                  <div>
                    <h3 class="text-sm font-medium text-gray-600 mb-2">Stock</h3>
                    <div class="flex items-center space-x-2">
                      <span class="inline-flex items-center px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                        <span class="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                        In Stock
                      </span>
                      <span class="text-gray-600">{{ product.stock }} units</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Description Section -->
          <div class="border-t border-gray-200 p-8">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Description</h3>
            <p class="text-gray-600 leading-relaxed">{{ product.description }}</p>
          </div>
        </div>

        <!-- Customer Reviews Card -->
        <div class="bg-white rounded-2xl shadow-lg p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-8">Customer Reviews</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Rating Summary -->
            <div class="text-center p-6 bg-gray-50 rounded-xl">
              <div class="text-5xl font-bold text-gray-900 mb-2">{{ product.rating || '4.5' }}</div>
              <div class="flex items-center justify-center mb-2">
                <span class="text-yellow-400 text-2xl">★★★★<span class="text-gray-300">★</span></span>
              </div>
              <div class="text-sm text-gray-600">Based on 120 reviews</div>
            </div>
            
            <!-- Rating Distribution -->
            <div class="md:col-span-2 space-y-3">
              <div v-for="i in 5" :key="i" class="flex items-center gap-4">
                <span class="w-3 text-sm font-medium text-gray-700">{{ 6 - i }}</span>
                <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <div class="flex-1 bg-gray-200 rounded-full h-2.5">
                  <div class="bg-yellow-400 h-2.5 rounded-full transition-all" :style="{ width: [75, 15, 5, 3, 2][i-1] + '%' }"></div>
                </div>
                <span class="w-12 text-sm text-gray-600 text-right">{{ [75, 15, 5, 3, 2][i-1] }}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="bg-white rounded-2xl shadow-lg p-12 text-center">
        <p class="text-gray-600 text-lg">Product not found.</p>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
import Spinner from '../components/Spinner.vue'
import { useProductsStore } from '../stores/products'
import { onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default {
  components: { AppHeader, Spinner },
  setup() {
    const productsStore = useProductsStore()
    const router = useRouter()
    const route = useRoute()
    const loading = ref(false)
    const product = ref(null)

    onMounted(async () => {
      loading.value = true
      try {
        const existing = productsStore.products.find(p => String(p.id) === route.params.id)
        if (existing) {
          product.value = existing
        } else {
          product.value = await productsStore.fetchProductById(route.params.id)
        }
      } catch (err) {
        console.error(err)
      } finally {
        loading.value = false
      }
    })

    const back = () => router.push({ name: 'Products' })

    return { product, loading, back }
  }
}
</script>