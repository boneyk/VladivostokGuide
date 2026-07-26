import type { Category } from './types';

/** Разделы главной страницы — повторяют структуру Notion-гида. */
export const categories: Category[] = [
  {
    id: 'city',
    title: 'Городская черта',
    icon: '🌆',
    description: 'Мосты, набережные и места, до которых легко добраться за день.',
  },
  {
    id: 'islands',
    title: 'Острова и мысы',
    icon: '🏝️',
    description: 'Скалы, косы и треккинг — здесь город заканчивается морем.',
  },
  {
    id: 'beaches',
    title: 'Пляжи',
    icon: '🏖️',
    description: 'Куда ехать купаться и смотреть на закат.',
  },
  {
    id: 'tours',
    title: 'Экскурсии и иные приколы',
    icon: '🎒',
    description: 'Активности, которые не укладываются в формат «просто посмотреть».',
  },
];

export const categoryById = Object.fromEntries(
  categories.map((category) => [category.id, category]),
) as Record<Category['id'], Category>;
