<template>
  <div class="flex items-center justify-center p-8">
    <div class="relative">
      <!-- Outer ring -->
      <div class="animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-primary"></div>
   
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div class="w-3 h-3 bg-primary rounded-full opacity-75"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Spinner'
}
</script>