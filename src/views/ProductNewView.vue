<template>
  <div class="min-h-screen bg-gray-100">
    <AppHeader />
    <div class="max-w-4xl mx-auto py-8 px-4">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">Add New Product</h1>
        <p class="text-gray-500">Enter the details below to add a new item to your inventory.</p>
      </div>

      <div class="bg-white rounded-2xl shadow-lg">
        <form @submit.prevent="submit" class="p-8 space-y-8">
          <!-- Product Information -->
          <section>
            <h2 class="text-lg font-semibold text-gray-900 mb-6">Product Information</h2>
            
            <div class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-gray-900 mb-2">Product Title</label>
                <input v-model="title" placeholder="Enter product title"
                  class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"/>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-900 mb-2">Product Description</label>
                <textarea v-model="description" placeholder="Provide a detailed description of the product" rows="4"
                  class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"></textarea>
              </div>
            </div>
          </section>

          <hr class="border-gray-200">

          <!-- Pricing & Inventory -->
          <section>
            <h2 class="text-lg font-semibold text-gray-900 mb-6">Pricing & Inventory</h2>
            
            <div class="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label class="block text-sm font-medium text-gray-900 mb-2">Price</label>
                <div class="relative">
                  <span class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">$</span>
                  <input v-model.number="price" type="number" step="0.01" placeholder="0.00"
                    class="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"/>
                </div>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-900 mb-2">Stock Quantity</label>
                <input v-model.number="stock" type="number" placeholder="Enter stock quantity"
                  class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"/>
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-900 mb-2">Category</label>
              <div class="relative">
                <input v-model="category" placeholder="Select a category"
                  class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none"/>
                <svg class="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </div>
            </div>
          </section>

          <hr class="border-gray-200">

          <!-- Media Upload with Drag & Drop -->
          <section>
            <h2 class="text-lg font-semibold text-gray-900 mb-6">Media</h2>
            
            <!-- Hidden file input -->
            <input 
              ref="fileInput"
              type="file" 
              @change="handleFileSelect"
              accept="image/*"
              class="hidden"
            />

            <!-- Upload Preview or Drop Zone -->
            <div v-if="imagePreview" class="relative">
              <img :src="imagePreview" alt="Preview" class="w-full h-64 object-cover rounded-xl"/>
              <button 
                type="button"
                @click="removeImage"
                class="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            <div 
              v-else
              @click="triggerFileInput"
              @dragover.prevent="isDragging = true"
              @dragleave.prevent="isDragging = false"
              @drop.prevent="handleFileDrop"
              :class="[
                'border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all',
                isDragging 
                  ? 'border-primary bg-indigo-50' 
                  : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
              ]"
            >
              <div class="max-w-sm mx-auto">
                <div class="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                  </svg>
                </div>
                <p class="text-sm text-gray-700 font-medium mb-1">
                  <span class="text-primary font-semibold">Click to upload</span> or drag and drop
                </p>
                <p class="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX: 800x400px)</p>
              </div>
            </div>

            <!-- Alternative: Thumbnail URL Input -->
            <div class="mt-4">
              <label class="block text-sm font-medium text-gray-900 mb-2">Or enter image URL</label>
              <input 
                v-model="thumbnailUrl" 
                @input="handleUrlInput"
                placeholder="https://example.com/image.jpg"
                class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
          </section>

          <!-- Actions -->
          <div class="flex items-center gap-4 pt-4">
            <button type="button" @click="back" class="px-8 py-3.5 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-all">
              Cancel
            </button>
            <button type="submit" :disabled="isUploading" class="px-8 py-3.5 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-all shadow-sm disabled:opacity-50">
              {{ isUploading ? 'Uploading...' : 'Save Product' }}
            </button>
          </div>

          <p v-if="error" class="text-red-600 text-sm bg-red-50 py-2 px-4 rounded-lg">{{ error }}</p>
          <p v-if="uploadError" class="text-red-600 text-sm bg-red-50 py-2 px-4 rounded-lg">{{ uploadError }}</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
import { ref } from 'vue'
import { useProductsStore } from '../stores/products'
import { useRouter } from 'vue-router'

export default {
  components: { AppHeader },
  setup() {
    const title = ref('')
    const description = ref('')
    const category = ref('')
    const price = ref(0)
    const stock = ref(0)
    const thumbnailUrl = ref('')
    const imagePreview = ref(null)
    const imageFile = ref(null)
    const error = ref(null)
    const uploadError = ref(null)
    const isDragging = ref(false)
    const isUploading = ref(false)
    const fileInput = ref(null)
    const router = useRouter()
    const productsStore = useProductsStore()

    // Trigger file input click
    const triggerFileInput = () => {
      fileInput.value?.click()
    }

    // Handle file selection from input
    const handleFileSelect = (event) => {
      const file = event.target.files?.[0]
      if (file) {
        processFile(file)
      }
    }

    // Handle drag and drop
    const handleFileDrop = (event) => {
      isDragging.value = false
      const file = event.dataTransfer.files?.[0]
      if (file) {
        processFile(file)
      }
    }

    // Process and validate file
    const processFile = (file) => {
      uploadError.value = null

      // Validate file type
      if (!file.type.startsWith('image/')) {
        uploadError.value = 'Please upload an image file (PNG, JPG, GIF, SVG)'
        return
      }

      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        uploadError.value = 'File size must be less than 5MB'
        return
      }

      imageFile.value = file

      // Create preview
      const reader = new FileReader()
      reader.onload = (e) => {
        imagePreview.value = e.target.result
        thumbnailUrl.value = '' // Clear URL input when file is uploaded
      }
      reader.readAsDataURL(file)
    }

    // Handle URL input
    const handleUrlInput = () => {
      if (thumbnailUrl.value) {
        imagePreview.value = thumbnailUrl.value
        imageFile.value = null // Clear file when URL is entered
      }
    }

    // Remove image
    const removeImage = () => {
      imagePreview.value = null
      imageFile.value = null
      thumbnailUrl.value = ''
      if (fileInput.value) {
        fileInput.value.value = ''
      }
    }

    // Convert image to base64 for API (DummyJSON accepts URLs or base64)
    const getImageData = async () => {
      if (thumbnailUrl.value) {
        return thumbnailUrl.value
      }
      
      if (imageFile.value) {
        // For DummyJSON, we'll use a placeholder since it doesn't actually store images
        // In a real app, you'd upload to a service like Cloudinary or AWS S3
        return imagePreview.value
      }

      return 'https://via.placeholder.com/150'
    }

    const submit = async () => {
      error.value = null
      
      if (!title.value) { 
        error.value = 'Title is required'
        return 
      }

      try {
        isUploading.value = true
        
        const thumbnail = await getImageData()
        
        const payload = { 
          title: title.value, 
          description: description.value, 
          category: category.value, 
          price: price.value, 
          stock: stock.value, 
          thumbnail: thumbnail
        }
        
        const created = await productsStore.addProduct(payload)
        router.push({ name: 'ProductView', params: { id: created.id } })
      } catch (err) {
        console.error('Submit error:', err)
        error.value = 'Failed to create product'
      } finally {
        isUploading.value = false
      }
    }

    const back = () => router.push({ name: 'Products' })

    return { 
      title, 
      description, 
      category, 
      price, 
      stock, 
      thumbnailUrl,
      imagePreview,
      imageFile,
      isDragging,
      isUploading,
      fileInput,
      error,
      uploadError,
      submit, 
      back,
      triggerFileInput,
      handleFileSelect,
      handleFileDrop,
      handleUrlInput,
      removeImage
    }
  }
}
</script>