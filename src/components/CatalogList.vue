<template>
  <div class="catalog-wrapper">
    <q-expansion-item
      v-for="category in filteredCatalog"
      :key="category.id"
      expand-separator
      dense
      switch-toggle-side
      group="categories"
      class="category-expansion"
      v-model="expandedCategories[category.id]"
      @hide="onCategoryHide"
    >
      <template #header>
        <div class="row items-center full-width">
          <div class="text-weight-bold text-subtitle1">
            {{ category.title[currentLang] }}
          </div>

          <q-space />

          <q-badge color="primary" outline>
            {{ category.products.length }}
          </q-badge>
        </div>
      </template>

      <div class="row q-col-gutter-sm">
        <div v-for="product in category.products" :key="product.id" class="col-6 col-sm-4 col-md-3">
          <ProductCard :product="product" :lang="currentLang" @select="selectProduct" />
        </div>
      </div>
    </q-expansion-item>
  </div>
</template>

<script setup>
import { reactive, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import ProductCard from './ProductCard.vue'
import { catalog } from '../stores/catalog.js'
import { i18n } from '../boot/i18n.js'

const router = useRouter()
const expandedCategories = reactive({})

const currentLang = computed(() => i18n.global.locale.value)

function selectProduct(product) {
  router.push({ name: 'ProductDetail', params: { id: product.id } })
}
function onCategoryHide() {
  // do nothing if searching
  if (props.search.trim().length > 0) return

  // check if any category is still expanded
  const anyOpen = Object.values(expandedCategories).some(Boolean)

  if (!anyOpen && filteredCatalog.value.length > 0) {
    // restore default: first category expanded
    expandedCategories[filteredCatalog.value[0].id] = true
  }
}

// Filter logic
const props = defineProps({ search: { type: String, default: '' } })

const filteredCatalog = computed(() => {
  const term = props.search.toLowerCase().trim()

  return catalog
    .map((category) => {
      const products = category.products.filter((product) => {
        const name = (product.name[currentLang.value] || '').toLowerCase()
        const benefits = (product.benefits[currentLang.value] || []).join(' ').toLowerCase()

        return name.includes(term) || benefits.includes(term)
      })

      return { ...category, products }
    })
    .filter((category) => category.products.length > 0)
})
// Auto-expand categories on search
watch(
  () => props.search,
  (val) => {
    const searching = val.trim().length > 0
    filteredCatalog.value.forEach((category) => {
      expandedCategories[category.id] = searching
    })
  },
  { immediate: true },
)

/**
 * SINGLE SOURCE OF TRUTH FOR EXPANSION STATE
 */
watch(
  [filteredCatalog, () => props.search],
  ([categories, search]) => {
    if (!Array.isArray(categories) || categories.length === 0) return

    // reset state
    Object.keys(expandedCategories).forEach((key) => {
      delete expandedCategories[key]
    })

    const searching = search.trim().length > 0

    if (searching) {
      // expand all matching categories while searching
      categories.forEach((cat) => {
        expandedCategories[cat.id] = true
      })
    } else {
      // default state: first category expanded
      expandedCategories[categories[0].id] = true
    }
  },
  { immediate: true },
)
</script>
<style scoped>
/* Make the page transparent */
:deep(.q-page) {
  background: transparent !important;
}

/* Remove background from expansion items */
:deep(.q-expansion-item),
:deep(.q-expansion-item__container),
:deep(.q-expansion-item__content) {
  background: transparent !important;
}
.catalog-wrapper {
  position: relative;
  min-height: 100vh;
}

/* Watermark logo */
.watermark {
  position: fixed;
  inset: 0;
  margin: auto;
  width: 320px;
  height: 320px;
  background: url('../assets/images/logo.png') no-repeat center;
  background-size: contain;
  opacity: 0.12;
  pointer-events: none;
  z-index: 0;
}
/* Keep catalog content above watermark */
.category-expansion {
  position: relative;
  z-index: 1;
  margin-bottom: 1rem;
}
</style>
