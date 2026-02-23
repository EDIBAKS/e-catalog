import { createI18n } from 'vue-i18n'
import fr from './fr'
import en from './en'

export default createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') === 'EN' ? 'en' : 'fr', // ✅ default FR
  fallbackLocale: 'fr',
  messages: {
    fr,
    en,
  },
})
