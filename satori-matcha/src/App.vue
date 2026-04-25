<script setup>
import TheHeader from './components/TheHeader.vue'
import TheHero from './components/TheHero.vue'
import ProductGrid from './components/ProductGrid.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-off-white selection:bg-matcha-vibrant selection:text-white">
    <TheHeader />
    <main>
      <TheHero />
      <ProductGrid />
    </main>
  <TheFooter />
  </div>
</template>