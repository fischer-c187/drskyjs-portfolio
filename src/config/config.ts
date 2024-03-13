import type { ImageMetadata } from 'astro';
import profilPicture from '../assets/images/profilPicture.jpg';

type ConfigType = {
  badgeText: string;
  name: string;
  heroText: string[];
  heroImage: ImageMetadata;
  skills: {
    [key: string]: string[];
  };
};

const siteConfig: ConfigType = {
  badgeText: 'Développeur Front End React',
  name: 'De Almeida Morgan',
  heroText: [
    "Durant ma formation, au contact de mon mentor, j'ai développé de bonnes pratiques essentielles pour écrire du code réutilisable, maintenable et lisible. Cet apprentissage intensif, guidé par l'expertise et les retours d'un professionnel aguerri, a été un véritable tremplin. Il m'a permis non seulement de comprendre la valeur d'un code bien structuré mais aussi de m'engager pleinement dans la création d'applications web accessibles et inclusives.",
  ],
  heroImage: profilPicture,
  skills: {
    Frontend: ['Typescript', 'Javascript', 'ReactJS', 'HMLT/CSS', 'Tailwind css'],
    Backend: ['NodeJS', 'Express', 'MongoDB', 'MySQL'],
    Tools: ['Docker', 'Git', 'Github actions', 'Vitest', 'Playwright', 'Figma'],
  },
};

export default siteConfig;
