// src/boot/i18n.js
import { boot } from 'quasar/wrappers'
import { createI18n } from 'vue-i18n'
import noni from '../assets/images/noni-cereale.jpg'
import noniTea from '../assets/images/noni-tea.jpg'
import dynaS from '../assets/images/dyna-s.jpg'
import noniJuice from '../assets/images/noni-juice.jpg'
import highFiber from '../assets/images/high-fibre.jpg'
import mangoosten from '../assets/images/mangoosten-juice.jpg'

const messages = {
  en: {
    id: 'poids',
    titleKey: 'WEIGHT MANAGEMENT',
    products: [
      {
        id: 1,
        nameKey: 'INSTANT NONI CEREAL 15S',
        description:
          'Dynapharm INSTANT CEREAL with Spirulina, Soybean, and Noni beverage is a delicious and nutritious drink that provides a convenient way to enjoy the benefits of these powerful ingredients. This instant cereal is designed to support weight management and overall health.',
        benefits: [
          'It helps reduce your high appetite and endless craving for junk food that is failing your weight management program',
          'contains natural plant fiber that helps to cleanse your colon and prevent colon cancer.',
          'Lowers cholesterol levels and promotes heart health.',
          'Boosts energy levels and supports overall vitality.',
          'Rich in antioxidants that help fight free radicals and reduce inflammation.',
          'Supports healthy digestion and promotes regular bowel movements.',
        ],
        usage: 'Two sachets, twice per day in 200ml of hot water',
        image: noni,
        price: '15600 FCFA',
      },
      {
        id: 2,
        nameKey: 'Noni Plus Tea',
        description: 'Nous décrirons précisément le produit ici',
        benefits: ['Contrôle l’appétit', 'Améliore le métabolisme'],
        usage: 'Mode de consommation du produit',
        image: noniTea,
        price: '15600 FCFA',
      },
      {
        id: 3,
        nameKey: 'comprime Dyna S',
        description: 'Nous décrirons précisément le produit ici',
        benefits: ['Contrôle l’appétit', 'Améliore le métabolisme'],
        usage: 'Mode de consommation du produit',
        image: dynaS,
        price: '15600 FCFA',
      },
      {
        id: 4,
        nameKey: 'Jus de Noni',
        description: 'Nous décrirons précisément le produit ici',
        benefits: ['Contrôle l’appétit', 'Améliore le métabolisme'],
        usage: 'Mode de consommation du produit',
        image: noniJuice,
        price: '15600 FCFA',
      },
      {
        id: 5,
        nameKey: 'Aliment riche en fibres',
        description: 'Nous décrirons précisément le produit ici',
        benefits: ['Contrôle l’appétit', 'Améliore le métabolisme'],
        usage: 'Mode de consommation du produit',
        image: highFiber,
        price: '15600 FCFA',
      },
      {
        id: 6,
        name: 'Jus de Mangosteen',
        description: 'Nous décrirons précisément le produit ici',
        benefits: ['Contrôle l’appétit', 'Améliore le métabolisme'],
        usage: 'Mode de consommation du produit',
        image: mangoosten,
        price: '15600 FCFA',
      },
    ],
  },
  fr: {
    id: 'poids',
    titleKey: 'GESTION DU REGIME ALIMENTAIRE DU POIDS',
    products: [
      {
        id: 1,
        nameKey: 'Instantanee Noni Cereal 15s',
        description:
          'Dynapharm INSTANT CEREAL with Spirulina, Soybean, and Noni beverage is a delicious and nutritious drink that provides a convenient way to enjoy the benefits of these powerful ingredients. This instant cereal is designed to support weight management and overall health.',
        benefits: [
          'Il aide à réduire votre appétit élevé et vos envies incessantes de malbouffe qui compromettent votre programme de gestion du poids.',
          'Contient des fibres végétales naturelles qui aident à nettoyer votre côlon et à prévenir le cancer du côlon',
          'Réduit le taux de cholestérol et favorise la santé cardiaque.',
          'Augmente les niveaux d énergie et soutient la vitalité générale.',
          'Riche en antioxydants qui aident à combattre les radicaux libres et à réduire l’inflammation.',
          'Favorise une digestion saine et encourage un transit intestinal régulier',
        ],
        usage: 'Two sachets, twice per day in 200ml of hot water',
        image: noni,
        price: '15600 FCFA',
      },
      {
        id: 2,
        nameKey: 'Noni Plus Tea',
        description: 'Nous décrirons précisément le produit ici',
        benefits: ['Contrôle l’appétit', 'Améliore le métabolisme'],
        usage: 'Mode de consommation du produit',
        image: noniTea,
        price: '15600 FCFA',
      },
      {
        id: 3,
        nameKey: 'comprime Dyna S',
        description: 'Nous décrirons précisément le produit ici',
        benefits: ['Contrôle l’appétit', 'Améliore le métabolisme'],
        usage: 'Mode de consommation du produit',
        image: dynaS,
        price: '15600 FCFA',
      },
      {
        id: 4,
        nameKey: 'Jus de Noni',
        description: 'Nous décrirons précisément le produit ici',
        benefits: ['Contrôle l’appétit', 'Améliore le métabolisme'],
        usage: 'Mode de consommation du produit',
        image: noniJuice,
        price: '15600 FCFA',
      },
      {
        id: 5,
        nameKey: 'Aliment riche en fibres',
        description: 'Nous décrirons précisément le produit ici',
        benefits: ['Contrôle l’appétit', 'Améliore le métabolisme'],
        usage: 'Mode de consommation du produit',
        image: highFiber,
        price: '15600 FCFA',
      },
      {
        id: 6,
        name: 'Jus de Mangosteen',
        description: 'Nous décrirons précisément le produit ici',
        benefits: ['Contrôle l’appétit', 'Améliore le métabolisme'],
        usage: 'Mode de consommation du produit',
        image: mangoosten,
        price: '15600 FCFA',
      },
    ],
  },
}

const defaultLocale = localStorage.getItem('lang') || 'fr'

const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: 'fr',
  messages,
})

export default boot(({ app }) => {
  if (!app) console.error('🚨 app is undefined!') // debug
  app.use(i18n)
})

export { i18n }
