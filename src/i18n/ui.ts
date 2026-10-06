export const languages = {
  en: 'English',
  fr: 'Français',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const localeStorageKey = 'video-deck-locale';

const en = {
  entryTypes: {
    intention: 'Intention',
    'design-note': 'Design note',
  },
  perspectives: {
    experience: 'Experience',
    implementation: 'Implementation',
  },
  meta: {
    title: 'DIY Video Deck — An analog state of mind',
    description:
      'An independent restomod video deck project. Old-school tactility, digital playback, and a new life for analog television.',
  },
  layout: {
    skip: 'Skip to content',
    homeAria: 'DIY Video Deck home',
    navAria: 'Main navigation',
    object: 'The object',
    signal: 'Signal path',
    origin: 'Origin',
    journal: 'Build log',
    about: 'About',
    edition: 'EDITION 01 / 2026',
    tagline: 'An independent project. A work in progress.',
    backToTop: 'Back to top ↑',
    backToProject: '← BACK TO THE PROJECT',
    language: 'Language',
  },
  journal: {
    back: '← BACK TO THE PROJECT',
    filterAria: 'Filter by category',
    searchLabel: 'Search project notes',
    searchPlaceholder: 'Search the notebook…',
    countOne: 'NOTE',
    countMany: 'NOTES',
    emptyTitle: 'No matching notes.',
    emptyText: 'Try another word or explore a different category.',
    clearFilters: 'Clear filters ↗',
    categories: [
      { id: 'All', label: 'All' },
      { id: 'Design', label: 'Design' },
      { id: 'Hardware', label: 'Hardware' },
      { id: 'Software', label: 'Software' },
    ],
  },
  article: {
    back: '← ALL PROJECT NOTES',
    created: 'NOTE CREATED',
    fig: {
      scale: 'GRAPHIC STUDY · NOT A CALIBRATED SCALE',
      display: 'VISUAL STUDY · NOT A PHOTOGRAPH OF THE SCREEN',
      signal: 'SEQUENCE SKETCH · NOT A MEASURED STARTUP',
    },
    end: 'END OF NOTE',
    backCta: 'Back to the notebook',
    noteLabel: 'NOTE',
  },
  visual: {
    channel: 'CHANNEL',
    video: 'VIDEO',
    signal: 'SIGNAL',
    displayStudy: 'DISPLAY STUDY / 01',
    sequence: 'SYSTEM SEQUENCE',
    power: 'POWER',
    source: 'SOURCE',
    picture: 'PICTURE',
  },
  category: {
    Design: 'Design',
    Hardware: 'Hardware',
    Software: 'Software',
  },
};

const fr = {
  entryTypes: {
    intention: 'Intention',
    'design-note': 'Note de conception',
  },
  perspectives: {
    experience: 'Expérience',
    implementation: 'Réalisation',
  },
  meta: {
    title: "DIY Video Deck — Un état d'esprit analogique",
    description:
      "Un projet indépendant de video deck restomod. Le toucher de l'ancien, la lecture numérique, et une nouvelle vie pour la télévision analogique.",
  },
  layout: {
    skip: 'Aller au contenu',
    homeAria: 'Accueil DIY Video Deck',
    navAria: 'Navigation principale',
    object: "L'objet",
    signal: 'Chemin du signal',
    origin: 'Genèse',
    journal: 'Journal de bord',
    about: 'À propos',
    edition: 'ÉDITION 01 / 2026',
    tagline: 'Un projet indépendant. Un travail en cours.',
    backToTop: 'Retour en haut ↑',
    backToProject: '← RETOUR AU PROJET',
    language: 'Langue',
  },
  journal: {
    back: '← RETOUR AU PROJET',
    filterAria: 'Filtrer par catégorie',
    searchLabel: 'Rechercher dans les notes de projet',
    searchPlaceholder: 'Chercher dans le carnet…',
    countOne: 'NOTE',
    countMany: 'NOTES',
    emptyTitle: 'Aucune note correspondante.',
    emptyText: 'Essayez un autre mot ou une autre catégorie.',
    clearFilters: 'Effacer les filtres ↗',
    categories: [
      { id: 'All', label: 'Tous' },
      { id: 'Design', label: 'Design' },
      { id: 'Hardware', label: 'Matériel' },
      { id: 'Software', label: 'Logiciel' },
    ],
  },
  article: {
    back: '← TOUTES LES NOTES DE PROJET',
    created: 'NOTE CRÉÉE',
    fig: {
      scale: 'ÉTUDE GRAPHIQUE · PAS UNE ÉCHELLE CALIBRÉE',
      display: 'ÉTUDE VISUELLE · PAS UNE PHOTO DE L’ÉCRAN',
      signal: 'SCHÉMA DE PRINCIPE · PAS UN DÉMARRAGE MESURÉ',
    },
    end: 'FIN DE NOTE',
    backCta: 'Retour au carnet',
    noteLabel: 'NOTE',
  },
  visual: {
    channel: 'CANAL',
    video: 'VIDÉO',
    signal: 'SIGNAL',
    displayStudy: 'ÉTUDE D’AFFICHAGE / 01',
    sequence: 'SÉQUENCE SYSTÈME',
    power: 'MARCHE',
    source: 'SOURCE',
    picture: 'IMAGE',
  },
  category: {
    Design: 'Design',
    Hardware: 'Matériel',
    Software: 'Logiciel',
  },
};

export const ui = { en, fr };

export type Copy = typeof en;
