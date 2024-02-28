import spanish from './es.json';
import english from './en.json';

const LANGUAGES = {
    SPANISH: 'es',
    ENGLISH: 'en'
}

export const getI18n = ({ currentLocale }: { currentLocale: string }) => {
    if (currentLocale === LANGUAGES.SPANISH) return spanish
    if (currentLocale === LANGUAGES.ENGLISH) return english
    return spanish
}

export const defaultLang = 'es';

export const showDefaultLang = false;

export const languages = {
    en: 'English',
    es: 'Español',
};


export const ui = {
    en: {
      'nav.exp': 'Experience',
      'nav.projects': 'Projects',
      'nav.designs': 'Designs',
    },
    es: {
      'nav.exp': 'Experiencia',
      'nav.projects': 'Proyectos',
      'nav.designs': 'Diseños',
    }
} as const;