<template>
  <div class="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
    <!-- Mobile Header -->
    <div class="lg:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      <button @click="sidebarOpen = !sidebarOpen" class="p-2 rounded-lg hover:bg-gray-100">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
      <div class="flex items-center space-x-2">
        <div class="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
          <span class="text-white text-sm font-bold">E</span>
        </div>
        <span class="font-bold text-gray-900">E-Commerce</span>
      </div>
      <div class="w-10"></div>
    </div>

    <!-- Sidebar Overlay -->
    <div v-if="sidebarOpen" @click="sidebarOpen = false" 
         class="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"></div>

    <!-- Sidebar -->
    <aside :class="[
      'fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 flex flex-col transform transition-transform duration-300 ease-in-out lg:transform-none',
      sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
    ]">
      <!-- Logo -->
      <div class="p-6 border-b border-gray-200">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div class="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
              <span class="text-white text-xl font-bold">E</span>
            </div>
            <div>
              <h2 class="font-bold text-gray-900">E-Commerce</h2>
              <p class="text-sm text-gray-500">Admin Panel</p>
            </div>
          </div>
          <button @click="sidebarOpen = false" class="lg:hidden p-1 rounded hover:bg-gray-100">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 p-4 space-y-1 overflow-y-auto">
        <a href="#" class="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
          <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
          </svg>
          <span class="font-medium">Dashboard</span>
        </a>
        
        <a href="#" class="flex items-center space-x-3 px-4 py-3 rounded-lg bg-indigo-50 text-primary transition-colors">
          <svg class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 3h18v4H3V3zm0 6h18v12H3V9z"/>
          </svg>
          <span class="font-medium">Products</span>
        </a>

        <a href="#" class="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
          <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>
          <span class="font-medium">Orders</span>
        </a>

        <a href="#" class="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
          <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
          </svg>
          <span class="font-medium">Customers</span>
        </a>
      </nav>

      <!-- Bottom Actions -->
      <div class="p-4 border-t border-gray-200 space-y-2">
        <a href="#" class="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
          <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          <span class="font-medium">Settings</span>
        </a>
        
        <button class="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-all">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
          </svg>
          <span>Logout</span>
        </button>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 overflow-auto">
      <div class="max-w-7xl mx-auto py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 lg:mb-8 gap-4">
          <div>
            <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">Products</h1>
            <p class="text-sm sm:text-base text-gray-600">Manage your inventory and view product performance.</p>
          </div>
          <button @click="goAdd" class="flex items-center justify-center space-x-2 bg-primary text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:opacity-90 transition-all shadow-sm whitespace-nowrap">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
            </svg>
            <span>Add Product</span>
          </button>
        </div>

        <!-- Filters -->
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-6">
          <div class="relative flex-1">
            <input v-model="search" placeholder="Search by product name..."
                   class="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm sm:text-base"/>
            <div class="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>
          </div>
          
          <div class="flex gap-3 sm:gap-4">
            <div class="relative flex-1 sm:flex-none">
              <select v-model="category" class="appearance-none w-full sm:w-auto pl-3 sm:pl-4 pr-8 sm:pr-10 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm sm:text-base">
                <option value="">Category</option>
                <option v-for="c in categories" :key="c">{{ c }}</option>
              </select>
              <svg class="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </div>

            <div class="relative flex-1 sm:flex-none">
              <select v-model="stockStatus" class="appearance-none w-full sm:w-auto pl-3 sm:pl-4 pr-8 sm:pr-10 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm sm:text-base">
                <option value="">Stock Status</option>
                <option value="in-stock">In Stock</option>
                <option value="low-stock">Low Stock</option>
                <option value="out-of-stock">Out of Stock</option>
              </select>
              <svg class="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- Products Table/Cards -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <!-- Desktop Table Header -->
          <div class="hidden lg:grid grid-cols-12 gap-6 px-8 py-4 bg-gray-50 border-b border-gray-200 text-sm font-semibold text-gray-600">
            <div class="col-span-5">Product</div>
            <div class="col-span-2">Category</div>
            <div class="col-span-2">Price</div>
            <div class="col-span-2">Stock</div>
            <div class="col-span-1"></div>
          </div>

          <!-- Desktop Table Rows -->
          <div v-if="!loading" class="hidden lg:block">
            <div v-for="product in filtered" :key="product.id" 
                 class="grid grid-cols-12 gap-6 px-8 py-5 border-b border-gray-100 hover:bg-gray-50 transition-colors items-center">
              <div class="col-span-5">
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center">
                    <img :src="product.thumbnail" :alt="product.title" class="w-full h-full object-cover" />
                  </div>
                  <div class="min-w-0">
                    <h3 class="font-semibold text-gray-900 truncate">{{ product.title }}</h3>
                    <p class="text-sm text-gray-500 truncate">{{ product.description }}</p>
                  </div>
                </div>
              </div>
              <div class="col-span-2">
                <span class="inline-block px-3 py-1 bg-indigo-50 text-primary rounded-full text-sm font-medium">
                  {{ product.category }}
                </span>
              </div>
              <div class="col-span-2 font-bold text-gray-900">${{ product.price }}</div>
              <div class="col-span-2">
                <span :class="[
                  'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
                  product.stock > 20 ? 'text-green-700' :
                  product.stock > 0 ? 'text-orange-600' :
                  'text-red-700'
                ]">
                  <span :class="[
                    'w-2 h-2 rounded-full mr-2',
                    product.stock > 20 ? 'bg-green-500' :
                    product.stock > 0 ? 'bg-orange-500' :
                    'bg-red-500'
                  ]"></span>
                  {{ product.stock > 20 ? product.stock + ' In Stock' : product.stock > 0 ? product.stock + ' Low Stock' : 'Out of Stock' }}
                </span>
              </div>
              <div class="col-span-1 text-right">
                <button @click="view(product.id)" class="text-gray-400 hover:text-gray-600">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
                  </svg>
                </button>
              </div>
            </div>

            <div v-if="!filtered.length" class="px-8 py-12 text-center">
              <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/>
              </svg>
              <p class="text-gray-500 text-lg font-medium">No products found</p>
              <p class="text-gray-400 text-sm mt-1">Try adjusting your filters or search criteria</p>
            </div>
          </div>

          <!-- Mobile/Tablet Cards -->
          <div v-if="!loading" class="lg:hidden divide-y divide-gray-100">
            <div v-for="product in filtered" :key="product.id" 
                 class="p-4 hover:bg-gray-50 transition-colors"
                 @click="view(product.id)">
              <div class="flex items-start space-x-3">
                <div class="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                  <img :src="product.thumbnail" :alt="product.title" class="w-full h-full object-cover" />
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{{ product.title }}</h3>
                  <p class="text-xs sm:text-sm text-gray-500 line-clamp-2 mb-2">{{ product.description }}</p>
                  <div class="flex flex-wrap items-center gap-2 mb-2">
                    <span class="inline-block px-2 py-0.5 bg-indigo-50 text-primary rounded-full text-xs font-medium">
                      {{ product.category }}
                    </span>
                    <span :class="[
                      'inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium',
                      product.stock > 20 ? 'text-green-700' :
                      product.stock > 0 ? 'text-orange-600' :
                      'text-red-700'
                    ]">
                      <span :class="[
                        'w-1.5 h-1.5 rounded-full mr-1.5',
                        product.stock > 20 ? 'bg-green-500' :
                        product.stock > 0 ? 'bg-orange-500' :
                        'bg-red-500'
                      ]"></span>
                      {{ product.stock > 20 ? 'In Stock' : product.stock > 0 ? 'Low Stock' : 'Out of Stock' }}
                    </span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-gray-900 text-base sm:text-lg">${{ product.price }}</span>
                    <button class="text-gray-400 hover:text-gray-600 p-1">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="!filtered.length" class="px-4 py-12 text-center">
              <svg class="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/>
              </svg>
              <p class="text-gray-500 font-medium">No products found</p>
              <p class="text-gray-400 text-sm mt-1">Try adjusting your filters</p>
            </div>
          </div>

          <div v-if="loading" class="py-12">
            <Spinner />
          </div>

          <!-- Pagination -->
          <div v-if="!loading && filtered.length > 0" class="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 py-3 sm:py-4 bg-gray-50 border-t border-gray-200 gap-3">
            <p class="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
              Showing <span class="font-semibold">1</span> to <span class="font-semibold">{{ Math.min(4, filtered.length) }}</span> of <span class="font-semibold">{{ filtered.length }}</span> results
            </p>
            <div class="flex items-center space-x-2">
              <button class="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                </svg>
              </button>
              <button class="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Spinner from '../components/Spinner.vue'
import { ref, computed, onMounted } from 'vue'
import { useProductsStore } from '../stores/products'
import { useRouter } from 'vue-router'

export default {
  components: { Spinner },
  setup() {
    const productsStore = useProductsStore()
    const router = useRouter()
    const search = ref('')
    const category = ref('')
    const stockStatus = ref('')
    const sidebarOpen = ref(false)
    const loading = computed(() => productsStore.isLoading)

    const categories = computed(() => {
      const cats = new Set(productsStore.products.map(p => p.category))
      return Array.from(cats)
    })

    onMounted(async () => {
      await productsStore.fetchProducts()
    })

    const filtered = computed(() => {
      let list = productsStore.products.slice()
      if (search.value) {
        list = list.filter(p => p.title.toLowerCase().includes(search.value.toLowerCase()))
      }
      if (category.value) {
        list = list.filter(p => p.category === category.value)
      }
      if (stockStatus.value) {
        if (stockStatus.value === 'in-stock') {
          list = list.filter(p => p.stock > 20)
        } else if (stockStatus.value === 'low-stock') {
          list = list.filter(p => p.stock > 0 && p.stock <= 20)
        } else if (stockStatus.value === 'out-of-stock') {
          list = list.filter(p => p.stock === 0)
        }
      }
      return list
    })

    const view = (id) => {
      sidebarOpen.value = false
      router.push({ name: 'ProductView', params: { id } })
    }
    
    const goAdd = () => {
      sidebarOpen.value = false
      router.push({ name: 'ProductNew' })
    }

    return { search, category, stockStatus, categories, filtered, view, goAdd, loading, sidebarOpen }
  }
}
</script>