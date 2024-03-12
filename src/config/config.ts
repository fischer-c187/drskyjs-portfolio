import type { ImageMetadata } from 'astro';
import profilPicture from '../assets/images/profilPicture.jpg';

type ConfigType = {
  badgeText: string;
  name: string;
  heroText: string[];
  heroImage: ImageMetadata;
};

const siteConfig: ConfigType = {
  badgeText: 'Développeur Front End React',
  name: 'De Almeida Morgan',
  heroText: [
    "Durant ma formation, au contact de mon mentor, j'ai développé de bonnes pratiques essentielles pour écrire du code réutilisable, maintenable et lisible. Cet apprentissage intensif, guidé par l'expertise et les retours d'un professionnel aguerri, a été un véritable tremplin. Il m'a permis non seulement de comprendre la valeur d'un code bien structuré mais aussi de m'engager pleinement dans la création d'applications web accessibles et inclusives.",
    "L'apprentissage continu est au cœur de ma pratique professionnelle. Le développement web évolue rapidement, et rester à jour avec les dernières technologies et méthodologies est crucial pour moi. Mon portfolio présente une sélection de projets qui illustrent mon approche du développement front-end, ma capacité à relever des défis techniques et mon engagement envers l'accessibilité et l'innovation.",
  ],
  heroImage: profilPicture,
};

export default siteConfig;
