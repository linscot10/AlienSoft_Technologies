<template>
  <header class="py-4 border-b border-gray-200 bg-white shadow-sm">
    <div class="max-w-7xl mx-auto px-8 flex items-center justify-between">
    
      <!-- Logo -->
      <div class="flex items-center space-x-3">
        <div class="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
          <div class="w-6 h-4 border-2 border-white rounded-sm"></div>
        </div>
        <h1 class="text-xl font-bold text-primary">Product Management</h1>
      </div>
      
      <!-- Right Side Actions -->
      <div class="flex items-center space-x-6">
        <!-- Search -->
        <div class="relative">
          <input 
            type="text" 
            placeholder="Search"
            class="w-64 pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
          <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </div>

        <!-- Add Product Button -->
        <button class="flex items-center space-x-2 bg-primary text-white px-5 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-all shadow-sm">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
          </svg>
          <span>Add Product</span>
        </button>

        <!-- Notification Bell -->
        <button class="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
          </svg>
          <span class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <!-- User Profile -->
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
            <img src="https://ui-avatars.com/api/?name=Admin&background=6366f1&color=fff" alt="Admin" class="w-full h-full object-cover"/>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>