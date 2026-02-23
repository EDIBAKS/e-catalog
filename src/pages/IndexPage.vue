<template>
  <q-page class="q-pa-md">
    <div class="search-container q-mb-md">
      <q-input
        dense
        outlined
        rounded
        v-model="search"
        placeholder="Search by product or benefit..."
        class="search-bar"
      >
        <template #prepend>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>

    <CatalogList :search="search" @select="onSelectProduct" />
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

import CatalogList from '../components/CatalogList.vue'

const search = ref('')

function onSelectProduct(product) {
  alert(`You selected: ${product.name || product.nameKey}`)
}
</script>
