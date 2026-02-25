<template>
  <q-layout view="lHh Lpr lFf">
    <!-- ===== HEADER ===== -->

    <q-header class="modern-header">
      <q-toolbar class="modern-toolbar">
        <!-- LEFT: Icon-Based Logo + Text -->
        <div class="brand-wrapper">
          <!-- ICON LOGO -->
          <div class="logo-icon">
            <img src="../assets/images/logo3.png" alt="Dynapharm" />
          </div>

          <!-- TEXT -->
          <div class="brand-text">
            <div class="brand-title">Dynapharm Brazza</div>
            <div class="slogan-ticker">
              <transition-group name="fade" tag="div">
                <span v-for="(text, index) in slogans" :key="index" class="slogan-text">
                  {{ text }}
                </span>
              </transition-group>
            </div>
            <div class="brand-subtitle">E-Catalog</div>
          </div>
        </div>

        <q-space />

        <!-- RIGHT: Language Selector -->
        <q-select
          v-model="selectedOption"
          :options="options"
          dense
          outlined
          emit-value
          map-options
          options-dense
          class="lang-select"
          dropdown-icon="language"
        />
      </q-toolbar>
    </q-header>

    <!-- ===== MAIN CONTENT ===== -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- ===== FOOTER ===== -->
    <q-footer class="modern-footer">
      <div class="footer-content">
        <div class="footer-left">
          <q-icon name="spa" color="red" size="15px" />
          <span>Powered by <strong>AlvinConcepts</strong></span>
        </div>

        <div class="footer-right">
          <q-icon name="copyright" size="14px" />
          <span>2026 Dynapharm Brazza</span>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const selectedOption = ref(localStorage.getItem('lang') || 'EN')
const options = [
  { label: 'English', value: 'EN' },
  { label: 'Français', value: 'FR' },
]

const slogans = computed(() =>
  locale.value === 'fr'
    ? [
        'Des solutions de santé innovantes',
        'Une qualité digne de confiance',
        'Prenez le contrôle de votre santé',
      ]
    : ['Innovating Health Solutions', 'Quality You Can Trust', 'Take Charge of Your Health'],
)

watch(
  selectedOption,
  (newVal) => {
    locale.value = newVal === 'EN' ? 'en' : 'fr'
    localStorage.setItem('lang', newVal)
  },
  { immediate: true },
)
</script>

<style scoped>
/* ===========================================================
   MODERN GLASS HEADER
=========================================================== */
.modern-header {
  backdrop-filter: blur(14px);
  background: rgba(255, 255, 255, 0.35);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.08);
  color: #fff;
  --font-brand: 'Playfair Display', serif;
  --font-script: 'Great Vibes', cursive;
}

.modern-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 1rem 10px; /* extra bottom padding */
  min-height: 64px;
}

.logo-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  border: 1px solid red; /* Thin red border */
  border-radius: 8px; /* Rounded corners */
  padding: 4px;
  box-sizing: border-box;
}

/* Logo Image Styling */
.logo-icon img {
  height: 48px; /* desktop size */
  width: auto;
  object-fit: contain;
  border-radius: 6px; /* optional: soften edges */
  transition: all 0.3s ease; /* smooth hover or scaling */
}
/* Hover effect for desktop */
.logo-icon img:hover {
  transform: scale(1.05);
}

/* Responsive: Tablet/Mobile Adjustments */
@media (max-width: 1024px) {
  .logo-icon img {
    height: 40px;
  }
}
@media (max-width: 600px) {
  .logo-icon {
    width: 40px;
    height: 40px;
    border: 3px solid #c62828; /* 🔑 bold but clean */
    border-radius: 14px;
    padding: 6px; /* keeps logo breathing */
    box-sizing: border-box;
  }

  .logo-icon img {
    height: 32px;
  }
}
/* ===========================================================
   BRAND TEXT
=========================================================== */
.brand-wrapper {
  display: flex;
  align-items: center; /* 🔑 vertical centering */
  gap: 10px;
  min-width: 0;
}

.brand-text {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  white-space: nowrap;
  min-width: 0;
  line-height: 1.15;
  padding-bottom: 6px; /* creates space below slogan */
}

.brand-title {
  font-weight: bold;
  font-family: var(--font-brand);
  font-size: 1.8rem; /* increase title size */
  letter-spacing: 0.04em;
  color: #ae0b0b;
}

.brand-subtitle {
  font-size: 0.75rem;
  font-family: var(--font-brand);
  color: #2c2c2c;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.15em;
}

/* ===========================================================
   SLOGAN TICKER
=========================================================== */
.slogan-ticker {
  position: relative;
  height: 1em;
  overflow: hidden;
  max-width: 260px;
}

.slogan-text {
  position: absolute;
  font-family: var(--font-brand);
  left: 0;
  top: 0;
  font-size: 0.65rem;
  font-weight: 500;
  color: #000f04;
  opacity: 0;
  animation: sloganfade 18s ease-in-out infinite;
}

.slogan-text:nth-child(1) {
  animation-delay: 0s;
}
.slogan-text:nth-child(2) {
  animation-delay: 6s;
}
.slogan-text:nth-child(3) {
  animation-delay: 12s;
}

@keyframes sloganfade {
  0%,
  20% {
    opacity: 0;
    transform: translateY(5px);
  }
  25%,
  50% {
    opacity: 1;
    transform: translateY(0);
  }
  55%,
  100% {
    opacity: 0;
    transform: translateY(-5px);
  }
}

/* ===========================================================
   LANGUAGE SELECTOR
=========================================================== */
.lang-select {
  min-width: 100px;
  color: #000;
}

/* ===========================================================
   RESPONSIVE ADJUSTMENTS
=========================================================== */
@media (max-width: 700px) {
  .brand-title {
    font-size: 1rem;
  }
  .brand-subtitle {
    font-size: 0.68rem;
  }
  .slogan-ticker {
    font-size: 0.6rem;
    max-width: 160px;
  }
  .logo-icon {
    height: 40px;
    width: 40px;
    border-radius: 10px;
  }
  /* Keep layout horizontal, just scale down */
  .modern-toolbar {
    gap: 6px;
  }
  .lang-select {
    font-size: 0.8rem;
    min-width: 80px;
  }
}
/* =========================================================
   FOOTER
========================================================= */
.modern-footer {
  backdrop-filter: blur(15px);
  background: rgba(255, 255, 255, 0.65);
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  padding: 0.5rem 1rem;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
}
.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 0.8rem;
  color: #4b5563;
}
.footer-left,
.footer-right {
  display: flex;
  align-items: center;
  gap: 6px;
}
/* FOOTER MOBILE */
@media (max-width: 600px) {
  .footer-content {
    flex-direction: column;
    gap: 6px;
    text-align: center;
  }
}

.logo {
  height: 38px; /* ideal header size */
  width: auto;

  /* Make red pop & edges crisp */
  image-rendering: auto;

  /* Floating / pinned effect */
  filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.45)) drop-shadow(0 6px 12px rgba(0, 0, 0, 0.3));

  /* Slight lift */
  transform: translateY(1px);

  /* Prevent blur on mobile */
  backface-visibility: hidden;
  transform-style: preserve-3d;
}
</style>
