<template>
  <tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors">
    <!-- Product Image & Details Combined -->
    <td class="p-4">
      <div class="flex items-center space-x-4">
        <div class="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center">
          <img :src="product.thumbnail" :alt="product.title" class="w-full h-full object-cover" />
        </div>
        <div class="min-w-0">
          <h3 class="font-semibold text-gray-900 truncate">{{ product.title }}</h3>
          <p class="text-sm text-gray-500 truncate">{{ product.description }}</p>
        </div>
      </div>
    </td>
    
    <!-- Category -->
    <td class="p-4">
      <span class="inline-block px-3 py-1 bg-indigo-50 text-primary rounded-full text-sm font-medium">
        {{ product.category }}
      </span>
    </td>
    
    <!-- Price -->
    <td class="p-4 font-bold text-gray-900">${{ product.price }}</td>
    
    <!-- Stock Status -->
    <td class="p-4">
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
    </td>
    
    <!-- Actions -->
    <td class="p-4 text-right">
      <button @click="$emit('view', product.id)" class="text-gray-400 hover:text-gray-600 transition-colors">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
        </svg>
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  emits: ['view']
}
</script>    