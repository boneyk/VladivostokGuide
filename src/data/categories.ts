import type { Category } from './types';

/** Разделы главной страницы. Порядок в массиве = порядок секций на главной. */
export const categories: Category[] = [
  {
    id: 'viewpoints',
    title: 'Смотровые и сопки',
    navLabel: 'Смотровые',
    icon: '🌆',
    description: 'Панорамы города с высоты: сопки, видовые площадки и парки на склонах.',
  },
  {
    id: 'sea',
    title: 'Море, мосты и набережные',
    navLabel: 'Море и мосты',
    icon: '🌉',
    description: 'Вода и инженерия города: вантовые мосты, причалы и маяк.',
  },
  {
    id: 'history',
    title: 'История и культура',
    navLabel: 'История',
    icon: '🏛️',
    description: 'Старый город, храмы и объекты Владивостокской крепости.',
  },
  {
    id: 'science',
    title: 'Наука и современность',
    navLabel: 'Наука',
    icon: '🔬',
    description: 'Современный Владивосток: океанариум, университетский кампус и сад-институт.',
  },
  {
    id: 'nature',
    title: 'Острова, мысы и дикая природа',
    navLabel: 'Острова и мысы',
    icon: '🏝️',
    description: 'Скалы, косы и треккинг — здесь город заканчивается морем.',
  },
  {
    id: 'leisure',
    title: 'Пляжи и активности',
    navLabel: 'Пляжи',
    icon: '🏖️',
    description: 'Куда ехать купаться, на закат и за впечатлениями на воде.',
  },
  {
    id: 'food',
    title: 'Еда и гастрономия',
    navLabel: 'Еда',
    icon: '🦀',
    description:
      'Где поесть во Владивостоке: морепродукты и краб, паназия, кофейни и джаз-бары — от завтрака до позднего вечера.',
  },
];

export const categoryById = Object.fromEntries(
  categories.map((category) => [category.id, category]),
) as Record<Category['id'], Category>;
