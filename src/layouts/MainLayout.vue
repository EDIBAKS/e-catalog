<template>
  <q-layout view="lHh Lpr lFf">
    <!-- HEADER -->
    <q-header elevated class="glass-header">
      <q-toolbar class="header-toolbar">
        <!-- LEFT: LOGO + TITLE -->
        <div class="brand-wrapper">
          <!-- Logo -->
          <img src="../assets/images/hd-logo.png" alt="Dynapharm Brazza Logo" class="brand-logo" />

          <!-- Brand Text -->
          <div class="brand-text">
            <div class="brand-title">Dynapharm Brazza</div>

            <!-- Subtitle (single line) -->
            <div class="brand-subtitle">E-Catalog</div>

            <!-- Slogan below subtitle -->
            <div class="slogan-marquee">
              <span v-for="(text, index) in slogans" :key="index" class="slogan-text">
                {{ text }}
              </span>
            </div>
          </div>
        </div>

        <!-- SPACER -->
        <q-space />

        <!-- RIGHT: LANGUAGE -->
        <q-select
          v-model="selectedOption"
          :options="options"
          dense
          outlined
          emit-value
          map-options
          options-dense
          class="lang-select"
        />
      </q-toolbar>
    </q-header>

    <!-- MAIN CONTENT -->
    <q-page-container>
      <router-view />
    </q-page-container>
    <!-- FOOTER -->
    <q-footer class="glass-footer">
      <div class="footer-content">
        <q-icon name="copyright" size="14px" />
        <span class="footer-text">AlvinConcepts</span>
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n() // get i18n locale

const selectedOption = ref(localStorage.getItem('lang') || 'EN') // persist last choice
const options = [
  { label: 'English', value: 'EN' },
  { label: 'Français', value: 'FR' },
]

const slogans = computed(() => {
  return locale.value === 'fr'
    ? [
        'Des solutions de santé innovantes',
        'Une qualité digne de confiance',
        'Prenez le contrôle de votre santé',
      ]
    : ['Innovating Health Solutions', 'Quality You Can Trust', 'Take charge of your health']
})

// Watch selectedOption and update i18n locale
watch(
  selectedOption,
  (newVal) => {
    if (newVal === 'EN') {
      locale.value = 'en'
    } else if (newVal === 'FR') {
      locale.value = 'fr'
    }
    localStorage.setItem('lang', newVal) // persist selection
  },
  { immediate: true },
)
</script>

<style scoped>
/* ===== GLASS HEADER WITH SAFE AREA ===== */
.glass-header {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.7);
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  padding-top: env(safe-area-inset-top); /* safe area for notch/status bar */
  box-sizing: border-box;
}

/* ===== TOOLBAR ===== */
.header-toolbar {
  display: flex;
  align-items: center;
  padding: 0 1.25rem;
  min-height: calc(72px + env(safe-area-inset-top)); /* adjust height including safe area */
  box-sizing: border-box;
}

/* ===== BRAND WRAPPER ===== */
.brand-wrapper {
  display: flex;
  align-items: flex-start; /* align logo with top of text */
  gap: 0.01rem;
}

/* ===== LOGO ===== */
.brand-logo {
  height: 48px;
  width: auto;
  object-fit: contain;
  margin-top: 2px;
}

/* ===== BRAND TEXT ===== */
.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

/* ===== TITLE ===== */
.brand-title {
  font-size: clamp(1.15rem, 2.5vw, 1.45rem);
  font-weight: 700;
  color: #c62828;
  letter-spacing: 0.4px;
  margin-bottom: 2px;
  font-family: raleway, sans-serif;
}

/* ===== SUBTITLE ===== */
.brand-subtitle {
  font-size: 0.7rem;
  font-weight: bold;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #30ad1a;
  white-space: nowrap;
  margin-bottom: 4px;
  font-weight: bolder;

  font-family: raleway, sans-serif;
}

/* ===== SLOGAN MARQUEE ===== */
.slogan-marquee {
  position: relative;
  height: 1.2em;
  overflow: hidden;
  max-width: 280px;
  font-family: raleway, sans-serif;
  font-weight: bold;
}

.slogan-text {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  font-size: 0.65rem;
  color: #070101;
  white-space: nowrap;
  animation: fade-ticker 18s ease-in-out infinite;
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

@keyframes fade-ticker {
  0%,
  20% {
    opacity: 0;
  }
  25%,
  50% {
    opacity: 1;
  }
  55%,
  100% {
    opacity: 0;
  }
}

/* ===== LANGUAGE SELECT ===== */
.lang-select {
  min-width: 90px;
  margin-left: 2rem;
}

/* ===== MOBILE ADJUSTMENTS ===== */
@media (max-width: 600px) {
  .glass-header {
    padding-top: env(safe-area-inset-top);
  }
  .header-toolbar {
    min-height: calc(56px + env(safe-area-inset-top));
  }
  .brand-logo {
    height: 36px;
    margin-top: 0;
  }
  .brand-title {
    font-size: 1.1rem;
  }
  .brand-subtitle {
    font-size: 0.65rem;
  }
  .slogan-marquee {
    font-size: 0.55rem;
    max-width: 150px;
  }
}

/* ===== GLASS FOOTER ===== */
.glass-footer {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.7);
  border-top: 1px solid rgba(255, 255, 255, 0.4);
}

/* ===== FOOTER CONTENT ===== */
.footer-content {
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 0.75rem;
  color: #6b7280;
  letter-spacing: 0.04em;
}

/* ===== FOOTER TEXT ===== */
.footer-text {
  font-weight: 600;
}
</style>
