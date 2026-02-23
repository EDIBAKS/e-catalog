<template>
  <q-page class="q-pa-md">
    <q-card flat bordered class="q-pa-md">
      <q-img
        :src="product.image"
        class="q-mb-md"
        style="height: auto; width: 45%"
        img-class="fit-contain"
      />

      <div class="text-h6">{{ currentProduct.name }}</div>
      <div class="text-subtitle2 q-mb-sm">{{ currentProduct.description }}</div>

      <div class="q-mb-sm">
        <strong>Benefits:</strong>
        <ul>
          <li v-for="(b, i) in currentProduct.benefits" :key="i">{{ b }}</li>
        </ul>
      </div>

      <div><strong>Usage:</strong> {{ currentProduct.usage }}</div>
      <div class="q-mt-md text-h6"><strong>Price:</strong> {{ currentProduct.price }}</div>
    </q-card>

    <q-page-sticky position="bottom-right" :offset="[16, 16]">
      <q-btn round color="red" glossy icon="home" @click="goHome">
        <q-tooltip>Back to Home</q-tooltip>
      </q-btn>
    </q-page-sticky>
  </q-page>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { catalog } from '../stores/catalog.js'
import { i18n } from '../boot/i18n.js'

const route = useRoute()
const router = useRouter()

// Find the product in the catalog
const category = computed(() =>
  catalog.find((c) => c.products.some((p) => p.id == Number(route.params.id))),
)
const product = computed(
  () => category.value?.products.find((p) => p.id == Number(route.params.id)) || {},
)

// Current language
const lang = computed(() => i18n.global.locale.value)

// Reactive product info according to selected language
const currentProduct = computed(() => ({
  name: product.value.name?.[lang.value] || '',
  description: product.value.description?.[lang.value] || '',
  benefits: product.value.benefits?.[lang.value] || [],
  usage: product.value.usage?.[lang.value] || '',
  price: product.value.price || '',
  image: product.value.image || '',
}))

// Go back home
const goHome = () => router.push('/')
</script>
