<script setup>
const products = [
  {
    id: 1,
    name: 'Classic Matcha',
    description: 'Pure, vibrant, and the pure essence of matcha.',
    image: 'assets/matchaClassic.jpg',
  },
  {
    id: 2,
    name: 'Satori Matcha',
    description: 'Delicate, refreshing and balanced.',
    image: 'assets/matchaSatori.jpg',
  },
  {
    id: 3,
    name: 'Strawberry Cream Matcha',
    description: 'Sweet, refreshing and irresistible.',
    image: 'assets/matchaStrawberry.jpg',
  },
]
</script>
<template>
    <section class="max-w-7xl mx-auto px-10 py-32 border-t border-gray-100">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div v-for="product in products" :key="product.id" class="group">
                <div class="aspect-[3/4] overflow-hidden bg-white mb-6">
                    <img :src="product.image" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000">
                </div>
                <h4 class="font-title text-2xl">{{ product.name }}</h4>
            </div>
        </div>
    </section>
</template>