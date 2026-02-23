// src/stores/catalog.js
import luzerne from '../assets/images/luzerne.jpg'
import noni from '../assets/images/noni-cereale.jpg'
import noniTea from '../assets/images/noni-tea.jpg'
import noniJuice from '../assets/images/noni-juice.jpg'
import dynaS from '../assets/images/dyna-s.jpg'
import highFiber from '../assets/images/high-fibre.jpg'
import mangoosten from '../assets/images/mangoosten-juice.jpg'
import ganochocolat from '../assets/images/gano-chocolat.jpg'
import ganocafe from '../assets/images/ganoderma-cafe.jpg'
import yeegarlic from '../assets/images/yeegarlic2.png'
import yeegano from '../assets/images/yeegano.jpg'
//import cappucino from '../assets/images/cappucino.jpg'
//import teavert from '../assets/images/tea-vert.jpg'
import ganotongkat from '../assets/images/gano-tongkat2.png'
//import president from '../assets/images/cafe-president.jpg'
//import Macca from '../assets/images/tongkat_maca.jpg'
import gingko from '../assets/images/cafe-gingko.jpg'
//import fatimah from '../assets/images/fatimah-cafe.jpg'
//import wheatgrass from '../assets/images/wheatgrass.jpg'
import caferouge from '../assets/images/cafe-rouge.jpg'
//import mangoost from '../assets/images/cafe-mangoosten.jpg'
//import goatMilk from '../assets/images/goats-milk.png'
//import spiruline from '../assets/images/spirulina.png'
//import spiruline2 from '../assets/images/comp-spiruline.png'
//import soja from '../assets/images/soya-bean.jpg'
//import prolsb from '../assets/images/proLSB.jpg'
//import ginseng from '../assets/images/ginseng-honey.jpg'
//import herba from '../assets/images/maharani.jpg'
//import dynatonic from '../assets/images/dynatonic.jpg'
//import vitaminC from '../assets/images/vitaminc-250.jpg'
//import vitaminC100 from '../assets/images/vitaminc100.jpg'
//import yeeYangYen from '../assets/images/yeeyangyen.jpg'
//import prolink from '../assets/images/prolink.jpg'
//import teavertCaps from '../assets/images/teavert-caps.jpg'
//import seaCucumber from '../assets/images/sea-cucumber.jpg'
//import DynaSerenoa from '../assets/images/serenoa.png'
//import panaxGinseng from '../assets/images/panax-ginseng.jpg'
//import yeegingko from '../assets/images/yeegingko-90s.jpg'
//import ginali from '../assets/images/GINALI.png'
//import tongkatcaps from '../assets/images/tongkatcaps.png'

export const catalog = [
  {
    id: 'purificateur',
    title: { en: 'PURIFICATION/DETOXIFICATION', fr: 'PURIFICATION/DÉTOXIFICATION' },
    products: [
      {
        id: 8,
        name: { en: 'LUWERNE MIXTURE WITH GUARANA', fr: 'LUZERNE PLUS GUARANA' },
        description: {
          en: 'It contains Guarana and Alfalfa which is rich in chlorophyll. Since the chemical structure of chlorophyll and red blood cells are very similar, long-term consumption will improve the production of blood. Its rich natural pigment is the best antioxidant for the human body. It is effective for purifying toxins and  controlling the growth of bacteria in the human body.',
          fr: 'Riche en guarana et luzerne, ce produit favorise la production de sang grâce à sa chlorophylle. Son puissant pigment naturel agit comme un antioxydant, aide à éliminer les toxines et limite la croissance des bactéries dans l’organisme.',
        },
        benefits: {
          en: [
            'Helps in eliminating toxic substances from the body',
            'Supports weight management – Helps increase metabolism and fat oxidation',
            'Rich in antioxidants – Contains compounds like catechins and tannins that fight free radicals and oxidative stress.',
            'Supports heart health – Improves circulation and reduce platelet aggregation.',
            'Anti-inflammatory effects –helps reduce inflammation in the body.',
            'Supports heart health – May improve circulation and reduce platelet aggregation.',
            'Helps relieve bloating and improve digestion',
          ],
          fr: [
            'Aide à éliminer les substances toxiques de l’organisme',
            'Soutient la gestion du poids – Aide à augmenter le métabolisme et l’oxydation des graisses',
            'Riche en antioxydants – Contient des composés tels que les catéchines et les tanins qui combattent les radicaux libres et le stress oxydatif.',
            'Soutient la santé cardiaque – Améliore la circulation et réduit l’agrégation plaquettaire.',
            'Effets anti-inflammatoires – aide à réduire l’inflammation dans le corps.',
            'Soutient la santé cardiaque – Peut améliorer la circulation et réduire l’agrégation plaquettaire.',
            'Aide à soulager les ballonnements et à améliorer la digestion',
          ],
        },
        usage: {
          en: 'Mix one tablespoon of Alfalfa into 200-250ml of water (room temperature) and consume once daily',
          fr: 'Mélangez une cuillère à soupe de luzerne dans 200 à 250 ml d’eau (à température ambiante) et consommez une fois par jour',
        },
        image: luzerne,
        price: '15600 FCFA',
      },
      {
        id: 9,
        name: { en: 'GANODERMA CHOCOLATE', fr: 'GANO CHOCOLAT' },
        description: {
          en: 'rich, velvety taste of chocolate while nourishing your body with the health-enhancing properties of mushrooms',
          fr: 'Goût riche et velouté du chocolat tout en nourrissant votre corps avec les bienfaits santé des champignons.',
        },
        benefits: {
          en: [
            'Adaptogenic: Helps the body resist stress and strain.',
            'Anti-tumor: Proves effective in combating different types of cancer.',
            'Immunomodulating: Modulates the immune system, ensuring it operates at optimal levels.',
            'Immunotherapeutic: Can help in treating autoimmune diseases and other immune-related issues.',
            'Anti-inflammatory: Reduces inflammation, aiding in conditions like arthritis and other inflammatory diseases.',
            'Antiviral: Provides a natural defense against viral infections.',
            'Anti-parasitic and Anti-fungal: Promotes a healthy body free from harmful parasites and fungal infections.',
            'Anti-diabetic: Helps to regulate blood sugar levels.',
            'Anti-hypotensive: Effective in regulating blood pressure, preventing sudden falls.',
            'Hepatoprotective: Protects the liver from damages caused by toxins and enhances its function.',
            'Combating Insomnia: Induces better sleep patterns and combats insomnia.',
            'Inhibit Platelet Aggregation: Prevents blood clots, reducing the risk of cardiovascular diseases.',
            'Lower High Blood Pressure: Manages hypertension naturally.',
            'Lower Cholesterol: Reduces bad cholesterol, promoting heart health.',
            'Lower Blood Sugar: Keeps blood sugar levels in check.',
            'Antioxidant: Fights free radicals, preventing cellular damage and aging.',
            'Analgesic: Mitigates pain naturally.',
            'Appetite Loss: Stimulates appetite in those who suffer from a lack of hunger.',
            'Kidney Tonic & Nerve Tonic: Supports overall kidney function and boosts nervous system health.',
          ],
          fr: [
            'Adaptogène : Aide le corps à résister au stress et aux tensions.',
            'Anti-tumoral : Efficace pour combattre différents types de cancer.',
            'Immunomodulateur : Modifie le système immunitaire pour qu’il fonctionne de manière optimale.',
            'Immunothérapeutique : Peut aider à traiter les maladies auto-immunes et d’autres problèmes liés au système immunitaire.',
            'Anti-inflammatoire : Réduit l’inflammation, utile pour des affections comme l’arthrite et autres maladies inflammatoires.',
            'Antiviral : Fournit une défense naturelle contre les infections virales.',
            'Anti-parasitaire et antifongique : Favorise un corps sain, exempt de parasites et infections fongiques nuisibles.',
            'Antidiabétique : Aide à réguler le taux de sucre dans le sang.',
            'Anti-hypotensif : Efficace pour réguler la tension artérielle et prévenir les chutes soudaines.',
            'Hépatoprotecteur : Protège le foie contre les dommages causés par les toxines et améliore son fonctionnement.',
            'Combat l’insomnie : Favorise un meilleur sommeil et lutte contre l’insomnie.',
            'Inhibe l’agrégation plaquettaire : Prévient la formation de caillots sanguins, réduisant le risque de maladies cardiovasculaires.',
            'Abaisse l’hypertension : Gère l’hypertension de manière naturelle.',
            'Réduit le cholestérol : Diminue le mauvais cholestérol, favorisant la santé cardiaque.',
            'Réduit la glycémie : Maintient le taux de sucre dans le sang sous contrôle.',
            'Antioxydant : Combat les radicaux libres, prévenant les dommages cellulaires et le vieillissement.',
            'Analgesique : Soulage naturellement la douleur.',
            'Stimule l’appétit : Encourage l’appétit chez les personnes souffrant d’un manque de faim.',
            'Tonique pour les reins et le système nerveux : Soutient la fonction rénale globale et renforce la santé du système nerveux.',
          ],
        },
        usage: {
          en: 'Dissolve one sachet of instant Chocolate Mixture with powder into a cup of hot water. Drink as needed',
          fr: 'Dissoudre un sachet de mélange instantané de chocolat en poudre dans une tasse d’eau chaude. Boire selon les besoins.',
        },
        image: ganochocolat,
        price: '15000 FCFA',
      },
      {
        id: 10,
        name: { en: 'GANODERMA CAFE', fr: 'GANODERMA CAFE' },
        description: {
          en: 'This special 4 in 1 formulation is rich in aroma and flavour. Essence of ganoderma restores vigor and blood enrichment, thus providing and invigorating effect for those who stay up late,Contains high-quality Ganoderma and coffee 4 in 1, Sugar, non-dairy creamer (contains milk protein) coffee, and Ganoderma extract, it is a delicious and healthy coffee that can be enjoyed anytime.',
          fr: "Cette formule spéciale 4 en 1 est riche en arôme et en saveur. L'essence de ganoderma restaure la vigueur et enrichit le sang, procurant ainsi un effet stimulant aux personnes qui veillent tard. Elle contient du ganoderma de haute qualité, du café 4 en 1, du sucre, de la crème non laitière (contenant des protéines de lait), du café et de l'extrait de ganoderma. C'est un café délicieux et sain à savourer à tout moment.",
        },
        benefits: {
          en: [
            'Prevents allergy due to lanostan, the main ingredient capable of blocking histamine. Gano stimulates adrenal function.',
            'Organic Germanium stimulates the bone marrow to produce new blood cells.',
            'Adenonucleotides prevent the formation of blood clots in the arteries',
            'Gano compounds reduce blood sugar',
            'Prevents virus infection',
            'Strengthens the digestive systems and heart muscle',
            'Help reduce uric acid',
            'Molecules of polysaccharides stimulate the thymus gland secretion for the prevention of viral infection and ultimately hepatitis.',
            'Stimulates the body to produce antibodies that reduce Streptococcus bacteria, thus preventing protein secretion and alleviating kidney problem',
            'Improve skin condition',
          ],
          fr: [
            'Prévient les allergies grâce au lanostane, l’ingrédient principal capable de bloquer l’histamine. Le Gano stimule la fonction surrénalienne.',
            'Le germanium organique stimule la moelle osseuse afin de produire de nouvelles cellules sanguines.',
            'Les adénonucléotides empêchent la formation de caillots sanguins dans les artères.',
            'Les composés du Gano réduisent le taux de sucre dans le sang.',
            'Prévient les infections virales.',
            'Renforce le système digestif et le muscle cardiaque.',
            'Aide à réduire l’acide urique.',
            'Les molécules de polysaccharides stimulent la sécrétion de la glande thymus pour prévenir les infections virales et, à terme, l’hépatite.',
            'Stimule l’organisme à produire des anticorps qui réduisent les bactéries Streptococcus, empêchant ainsi la sécrétion de protéines et soulageant les problèmes rénaux.',
            'Améliore l’état de la peau.',
          ],
        },
        usage: {
          en: 'Dissolve 1 sachet of the instant coffee mixture with Ganoderma Powder into a cup of hot water (200ml). Drink as needed',
          fr: 'Dissoudre 1 sachet du mélange de café instantané avec poudre de Ganoderma dans une tasse d’eau chaude (200 ml). Boire selon les besoins.',
        },
        image: ganocafe,
        price: '10000 FCFA',
      },
      {
        id: 11,
        name: { en: 'YEEGARLIC CAPSULES', fr: 'YEEGARLIC CAPSULES' },
        description: {
          en: 'Garlic extracts very effective in lower cholesterol levels, as well as prevent and control diabetes.Contains over 20 different compounds such as selenium, germanium, allicin, 17 amino acids, 33 organosulphur compounds, vitamin B1, B2, B3, C and others. Garlic is a natural antibiotic and has been used for centuries to treat various ailments. It is known for its ability to boost the immune system, improve cardiovascular health, and provide anti-inflammatory benefits. The combination of these compounds makes garlic a powerful supplement for overall health and wellness.',
          fr: 'Les extraits d’ail sont très efficaces pour réduire le taux de cholestérol, ainsi que pour prévenir et contrôler le diabète. Ils contiennent plus de 20 composés différents tels que le sélénium, le germanium, l’allicine, 17 acides aminés, 33 composés organosulfurés, ainsi que les vitamines B1, B2, B3, C et d’autres encore,L’ail est un antibiotique naturel utilisé depuis des siècles pour traiter diverses affections. Il est reconnu pour sa capacité à renforcer le système immunitaire, à améliorer la santé cardiovasculaire et à offrir des bienfaits anti-inflammatoires. La combinaison de ces composés fait de l’ail un complément puissant pour la santé et le bien-être général.',
        },
        benefits: {
          en: [
            'Antioxidant',
            'Regulate blood pressure.',
            'Improves blood circulation.',
            'Regulate blood sugar level.',
            'Anti-cancer.',
            'Boost immune system',
            'Detoxifying body systems',
          ],
          fr: [
            'Antioxydant',
            'Régule la pression artérielle.',
            'Améliore la circulation sanguine.',
            'Régule le taux de sucre dans le sang.',
            'Anti-cancer.',
            'Renforce le système immunitaire',
            'Détoxifie les systèmes de l’organisme',
          ],
        },
        usage: {
          en: 'Take 2 times daily, 1-2 tablets each time 15 minutes before meals translate to french',
          fr: 'À prendre 2 fois par jour, 1 à 2 comprimés chaque fois, 15 minutes avant les repas.',
        },
        image: yeegarlic,
        price: '17400 FCFA',
      },
      {
        id: 12,
        name: { en: 'YEEGANO CAPSULE', fr: 'CAPSULE DE YEEGANO' },
        description: {
          en: 'Polysaccharides: Increase antibody count to strengthen the immune system. Help in clearing viruses and toxins in the body.Organic Germanium: Increases oxygen in the body to enhance metabolism and improve cell generation.Triterpenoids (bitter compound): Reduce cholesterol/lipid and blood sugar levels.- Normalize cholesterol level.Adenosine: Prevent fragmentation of platelets which cause blood clots. Balances Basal Metabolic Rate (BMR).',
          fr: 'Polysaccharides : Augmentent le nombre d’anticorps afin de renforcer le système immunitaire. Aident à éliminer les virus et les toxines dans l’organisme.Germanium organique : Augmente le niveau d’oxygène dans l’organisme pour stimuler le métabolisme et améliorer la régénération cellulaire.Triterpénoïdes (composé amer) : Réduisent les niveaux de cholestérol/lipides et de sucre dans le sang. Normalisent le taux de cholestérol.Adénosine : Prévient l’agrégation des plaquettes responsable de la formation de caillots sanguins. Équilibre le métabolisme basal (BMR).',
        },
        benefits: {
          en: [
            'Helps internal organs to function normally.',
            'Improves blood circulation.',
            'Improves a weak body constitution.',
            'Enhances the immune system',
            'Improves cell quality.',
          ],
          fr: [
            'Contribue au bon fonctionnement des organes internes.',
            'Améliore la circulation sanguine.',
            'Améliore une constitution physique affaiblie.',
            'Renforce le système immunitaire',
            'Améliore la qualité des cellules.',
          ],
        },
        usage: {
          en: 'Take 2 times daily, 1-2 tablets each time 15 minutes before meals translate to french',
          fr: 'À prendre 2 fois par jour, 1 à 2 comprimés chaque fois, 15 minutes avant les repas.',
        },
        image: yeegano,
        price: '17400 FCFA',
      },
    ],
  },
  {
    id: 'poids',
    title: { en: 'WEIGHT MANAGEMENT', fr: 'GESTION DU REGIME ALIMENTAIRE DU POIDS' },
    products: [
      {
        id: 1,
        name: { en: 'INSTANT NONI CEREAL 15S', fr: 'INSTANTANE NONI CEREALE 15s' },
        description: {
          en: 'Dynapharm INSTANT CEREAL with Spirulina, Soybean, and Noni beverage is a delicious and nutritious drink.',
          fr: 'Dynapharm INSTANT CEREAL avec Spiruline, Soja et Noni est une boisson délicieuse et nutritive.',
        },
        benefits: {
          en: [
            'It helps reduce your high appetite and endless craving for junk food that is failing your weight management program',
            'Contains natural plant fiber that helps to cleanse your colon and prevent colon cancer',
            'Lowers cholesterol levels and promotes heart health',
            'Boosts energy levels and supports overall vitality',
            'Rich in antioxidants that help fight free radicals and reduce inflammation',
            'Supports healthy digestion and promotes regular bowel movements',
          ],
          fr: [
            'Il aide à réduire votre appétit élevé et vos envies incessantes de malbouffe.',
            'Contient des fibres végétales naturelles qui aident à nettoyer votre côlon et à prévenir le cancer du côlon',
            'Réduit le taux de cholestérol et favorise la santé cardiaque',
            'Augmente les niveaux d énergie et soutient la vitalité générale',
            'Riche en antioxydants qui aident à combattre les radicaux libres et à réduire l’inflammation',
            'Favorise une digestion saine et encourage un transit intestinal régulier',
          ],
        },
        usage: {
          en: 'Two sachets, twice per day in 200ml of hot water',
          fr: 'Deux sachets, deux fois par jour dans 200ml d’eau chaude',
        },
        image: noni,
        price: '15600 FCFA',
      },
      {
        id: 2,
        name: { en: 'NONI PLUS TEA', fr: 'NONI PLUS THE' },
        description: {
          en: 'Made from noni fruit and tea, it contains carotenoids and plant fibers, to emulsify fat and help in body detoxification.',
          fr: 'Fabriqué à partir du fruit de noni et du thé, il contient des caroténoïdes et des fibres végétales, pour émulsifier les graisses et aider à la détoxification de l’organisme.',
        },
        benefits: {
          en: [
            'Helps in eliminating toxic substances from the body',
            'Removes excess fats from the body',
            'Helps in easing constipation and bloating',
            'Boosts energy levels and supports overall vitality',
            'Possesses slimming properties',
          ],
          fr: [
            'Il aide à réduire votre appétit élevé et vos envies incessantes de malbouffe.',
            'Contient des fibres végétales naturelles qui aident à nettoyer votre côlon et à prévenir le cancer du côlon',
            'Réduit le taux de cholestérol et favorise la santé cardiaque',
            'Augmente les niveaux d énergie et soutient la vitalité générale',
            'Riche en antioxydants qui aident à combattre les radicaux libres et à réduire l’inflammation',
            'Favorise une digestion saine et encourage un transit intestinal régulier',
          ],
        },
        usage: {
          en: 'Two sachets, twice per day in 200ml of hot water',
          fr: 'Deux sachets, deux fois par jour dans 200ml d’eau chaude',
        },
        image: noniTea,
        price: '15600 FCFA',
      },
      {
        id: 3,
        name: { en: 'DYNA S TABLETS', fr: 'COMPRIMES DYNA S' },
        description: {
          en: 'Dyna S slimming tablets are made from 11 natural herbs that help you maintain your desired waistline and weight. They help burn fat, increase metabolism, fight cholesterol, reduce the absorption of carbohydrates and calories, and eliminate toxins from your body.',
          fr: 'Dyna S sont fabriqués à partir de 11 herbes naturelles qui vous aident à maintenir la taille et le poids désirés. Ils aident à brûler les graisses, à augmenter le métabolisme, à combattre le cholestérol, à réduire l’absorption des hydrates de carbone et des calories et à éliminer les toxines de votre corps.',
        },
        benefits: {
          en: [
            'Boosts metabolism – burn energy like a 20-year-old',
            'Strengthens immunity – stay safe from flu & stress',
            'Fills nutrition gaps – no more weak body',
            '120 tablets – full 4-month supply! ',
            'Easy to swallow – just 1 daily',
          ],
          fr: [
            'Renforce l’immunité – restez protégé contre la grippe et le stress',
            'Comble les carences nutritionnelles – fini le corps affaibli',
            '120 comprimés – réserve complète de 4 mois !',
            'Facile à avaler – seulement 1 par jour',
          ],
        },
        usage: {
          en: 'Take 1 tablet every morning = Feel strong. Stay sharp. Live better.',
          fr: 'Prenez 1 comprimé chaque matin = Sentez-vous fort. Restez vif.',
        },
        image: dynaS,
        price: '15600 FCFA',
      },
      {
        id: 4,
        name: { en: 'NONI JUICE', fr: 'JUS DE NONI' },
        description: {
          en: 'Noni juice is an extract from morinda citrifolia fruits (Noni) that has been known for it’s strong medicinal properties since ancient times. It’s rich in phtyochemical compounds and nutrients. Additionally Noni is a rich source of proxeronine which is a precursor of the enzyme Xeronine. Xeronine assists in enlarging pores of cell walls allowing better absorption of nurients and medicine. Noni Juice has a low glycemic index hence suitable for diabetic people.',
          fr: 'Le jus de noni est un extrait des fruits de Morinda citrifolia (noni), connu depuis l’Antiquité pour ses puissantes propriétés médicinales. Il est riche en composés phytochimiques et en nutriments.De plus, le noni est une source importante de proxéronine, qui est un précurseur de l’enzyme xéronine. La xéronine aide à élargir les pores des parois cellulaires, permettant une meilleure absorption des nutriments et des médicaments.Le jus de noni possède un faible indice glycémique, il est donc adapté aux personnes diabétiques..',
        },
        benefits: {
          en: [
            'Prevent and treat gout',
            'Regulate sugar in the blood',
            'Improve sleep quality',
            'Reduce higher Cholesterol levels',
            'Boost immune system',
            'Increase blood production in the body',
          ],
          fr: [
            'Prévenir et traiter la goutte',
            'Régule le taux de sucre dans le sang',
            'Améliore la qualité du sommeil',
            'Réduit les niveaux élevés de cholestérol',
            'Renforce le système immunitaire',
            'Augmente la production de sang dans l’organisme',
          ],
        },
        usage: {
          en: 'Take one tablespoon, twice per day',
          fr: 'Prendre une cuillère à soupe deux fois par jour',
        },
        image: noniJuice,
        price: '19200 FCFA',
      },
      {
        id: 5,
        name: { en: 'HIGH FIBER', fr: 'ALIMENTATION FIBRE RICHE' },
        description: {
          en: 'Made from noni fruit and tea, it contains carotenoids and plant fibers, to emulsify fat and help in body detoxification.',
          fr: 'Fabriqué à partir du fruit de noni et du thé, il contient des caroténoïdes et des fibres végétales, pour émulsifier les graisses et aider à la détoxification de l’organisme.',
        },
        benefits: {
          en: [],
          fr: [],
        },
        usage: {
          en: 'Two sachets, twice per day in 200ml of hot water',
          fr: 'Deux sachets, deux fois par jour dans 200ml d’eau chaude',
        },
        image: highFiber,
        price: '15600 FCFA',
      },
      {
        id: 13,
        name: { en: 'MANGOOSTEN JUICE', fr: 'JUS DE MANGOOSTEN' },
        description: {
          en: 'Mangosteen Plus is made from 28 types of natural fruit extracts with powerful antioxidant effects that provide extraordinary beauty and health-enhancing benefits.',
          fr: 'Mangosteen Plus est fabriqué à partir de *28 types dextraits de fruits naturels,avec de puissants effets antioxydants qui procurent des effets extraordinaires de beauté et damélioration de la santé.me.',
        },
        benefits: {
          en: [],
          fr: [],
        },
        usage: {
          en: 'Take one tablespoon, twice per day',
          fr: 'Prendre une cuillère à soupe deux fois par jour',
        },
        image: mangoosten,
        price: '27000 FCFA',
      },

      // ... add other products here in the same structure
    ],
  },
  {
    id: 'cosmetique',
    title: { en: 'COSMETICS/PERSONAL CARE', fr: 'COSMETIQUES/SOINS PERSONNELS' },
    products: [
      {
        id: 7,
        name: { en: 'COSMETIC 1', fr: 'COSMETIC 1' },
        description: {
          en: 'Dynapharm INSTANT CEREAL with Spirulina, Soybean, and Noni beverage is a delicious and nutritious drink.',
          fr: 'Dynapharm INSTANT CEREAL avec Spiruline, Soja et Noni est une boisson délicieuse et nutritive.',
        },
        benefits: {
          en: [],
          fr: [],
        },
        usage: {
          en: 'Two sachets, twice per day in 200ml of hot water',
          fr: 'Deux sachets, deux fois par jour dans 200ml d’eau chaude',
        },
        image: noni,
        price: '15600 FCFA',
      },
    ],
  },
  {
    id: 'cafes',
    title: { en: 'DYNAPHARM CAFES', fr: 'CAFÉS DYNAPHARM' },
    products: [
      {
        id: 15,
        name: { en: 'GINGKO GINSENG CAFE', fr: 'CAFE GINGKO GINSENG' },
        description: {
          en: 'Instant Coffee mixture with Ginkgo and Ginseng Powder is specially formulated by using high quality Ginkgo leaves powder, Ginseng root powder and Coffee. It is a delicious and healthy coffee that can be enjoyed anytime.',
          fr: 'Le mélange de café instantané avec poudre de ginkgo et de ginseng est spécialement formulé à partir de poudre de feuilles de ginkgo de haute qualité, de poudre de racine de ginseng et de café. C’est un café délicieux et sain qui peut être dégusté à tout moment.',
        },
        benefits: {
          en: [
            'Improve memory',
            'Blood circulation',
            'Improve eyesight',
            'Reduce cholesterol level',
            'Prevents arteriosclerosis',
            'Antioxidant',
            'Prevents senile dementia',
            'Prevents Alzheimer’s',
            'Prevents impotence/ erectile dysfunction',
            'Prevent Edema',
            'Treat Hemorrhoids',
            'Prevent Inflammation',
            'Treat Migraine',
            'Anti Allergies',
            'Anti Asthma',
            'Anti-stress',
            'Resist infection',
            'Anti-oxidant',
            'Anti-aging',
            'Lower blood cholesterol',
            'Radiation protection',
          ],
          fr: [
            'Améliore la mémoire',
            'Améliore la circulation sanguine',
            'Améliore la vue',
            'Réduit le taux de cholestérol',
            'Prévient l’artériosclérose',
            'Antioxydant',
            'Prévient la démence sénile',
            'Prévient la maladie d’Alzheimer',
            'Prévient l’impuissance / la dysfonction érectile',
            'Prévient l’œdème',
            'Traite les hémorroïdes',
            'Prévient l’inflammation',
            'Traite la migraine',
            'Anti-allergies',
            'Anti-asthme',
            'Anti-stress',
            'Renforce la résistance aux infections',
            'Antioxydant',
            'Anti-âge',
            'Diminue le cholestérol sanguin',
            'Protection contre les radiations',
          ],
        },
        usage: {
          en: 'Two sachets, twice per day in 200ml of hot water',
          fr: 'Deux sachets, deux fois par jour dans 200ml d’eau chaude',
        },
        image: gingko,
        price: '9600 FCFA',
      },
      {
        id: 16,
        name: { en: 'RED CAFE', fr: 'CAFE ROUGE' },
        description: {
          en: 'Red ginseng coffee is a delicious blend of decaffeinated coffee, ginseng, red beetroot, and green tea. It is a delicious and healthy coffee that can be enjoyed at any time.Coffee.',
          fr: 'Le café rouge au ginseng est un délicieux mélange de café décaféiné, de ginseng, de betterave rouge et de thé vert. café délicieux et sain qui peut être dégusté à tout moment.',
        },
        benefits: {
          en: [
            'Good antioxidant and anti-aging properties',
            'Prevents infection, anti-allergic',
            'Energy drink',
            'Relieves menopause',
            'Inhibits tumor growth',
            'Helps liver and spleen function by purifying toxic waste',
            'Helps treat psoriasis and jaundice',
            'Helps with digestive problems',
            'Promotes wound healing',
            'Purifies the blood and kidneys, reduces inflammation, and removes toxic waste to support liver and spleen function, promotes the formation of healthy blood cells',
          ],
          fr: [
            'Bonnes propriétés anti-oxydantes et antivieillissement',
            'Prévient l’infection, antiallergique',
            'Boisson énergisante',
            'Soulage la ménopause ',
            'Inhibe la croissance de la tumeur',
            'Aide dans la fonction du foi et de la rate en purifiant les déchets toxiques',
            'contribue à guérir le psoriasis et la jaunisse ',
            'Aide en cas de problèmes de digestion',
            'favorise la cicatrisation des plaies',
            'Purifie le Sang et les Reins, diminue l’inflammation, et purifie les déchets toxiques pour aider la fonction du foie et de la rate, favorise la formation des cellules sanguines saines',
          ],
        },
        usage: {
          en: 'Two sachets, twice per day in 200ml of hot water',
          fr: 'Deux sachets, deux fois par jour dans 200ml d’eau chaude',
        },
        image: caferouge,
        price: '10800 FCFA',
      },
      {
        id: 17,
        name: {
          en: 'BLACK COFFEE WITH TONGKAT AND GANODERMA',
          fr: 'CAFE NOIR AVEC TONGKAT ET GANODERMA',
        },
        description: {
          en: 'Specially formulated with premium-quality decaffeinated coffee powder blended with Ganoderma and Tongkat Ali. It is rich in powerful antioxidants, providing a revitalizing beverage with added health benefits.',
          fr: 'Spécialement formulé à base d’une poudre de café décaféiné de qualité supérieure mélangée avec Ganoderma et Tongkat Ali. Il est riche en antioxydants puissants pour procurer une boisson revigorante doublée d’avantages pour la santé.',
        },
        benefits: {
          en: [
            'Rejuvenate',
            'Prevent exhaustion',
            'Boost energy',
            'Sexual weakness',
            'Erectile dysfunction',
            'Menopause symptoms',
            'General exhaustion',
            'Stamina',
            'Endurance',
            'Athletic performance',
            'Fertility',
            'Aphrodisiac',
            'Mental clarity to support liver and spleen function, promotes the formation of healthy blood cells',
          ],
          fr: [
            'Revigorer',
            'Prévenir l’épuisement',
            'Stimuler l’énergie',
            'Faiblesse sexuelle',
            'Dysfonctionnement Érectile',
            'Symptôme de Ménopause',
            'Épuisement Générale',
            'Résistance',
            'Endurance',
            'Performance Athlétique',
            'Fertilité',
            'Aphrodisiaque',
            'Clarté Mentalepour aider la fonction du foie et de la rate, favorise la formation des cellules sanguines saines',
          ],
        },
        usage: {
          en: 'Two sachets, twice per day in 200ml of hot water',
          fr: 'Deux sachets, deux fois par jour dans 200ml d’eau chaude',
        },
        image: ganotongkat,
        price: '11400 FCFA',
      },
    ],
  },
]
