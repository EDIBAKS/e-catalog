<template>
  <div class="product-card" @click="$emit('select', product)">
    <div class="image-box">
      <img :src="product.image" alt="" />
    </div>

    <div class="info-overlay">
      <div class="product-name">{{ product.name[lang] }}</div>
      <!--  
       <div class="product-benefits">
        <span v-for="(b, i) in product.benefits[lang]" :key="i">{{ b }}</span>
      </div>
      -->

      <div class="product-usage">{{ product.usage[lang] }}</div>
      <div class="product-price">{{ product.price }}</div>
      <!--<div class="product-description">{{ product.description[lang] }}</div>  -->
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: Object,
  lang: String,
})
</script>

<style scoped>
/* CARD SIZE — SAME FOR ALL */
.product-card {
  position: relative;
  width: 100%;
  height: 320px; /* uniform card size */
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.25s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  background: #ffffff; /* ✅ WHITE CARD BACKGROUND */
}

.product-card:hover {
  transform: scale(1.03);
}

/* Image container */
.image-box {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Image centered, no stretch */
.image-box img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  display: block;
}

/* IMAGE ITSELF */
.image-box img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; /* no cropping */
  display: block;
}

/* OVERLAY */
.info-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.4);
  padding: 8px;
  transform: translateY(100%);
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
  opacity: 0;
  font-size: 12px;
}

.product-card:hover .info-overlay {
  transform: translateY(0);
  opacity: 1;
}

.product-name {
  font-weight: bold;
  color: red;
}

.product-benefits span {
  display: block;
}

.product-price {
  font-weight: bold;
  color: #007aff;
}
</style>
