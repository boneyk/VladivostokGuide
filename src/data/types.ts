/**
 * Модель контента гида.
 *
 * Каждая достопримечательность — это набор секций, а секция — набор блоков.
 * Блоки рендерит организм `ContentSection`, поэтому чтобы добавить новое место,
 * достаточно создать файл в `src/data/attractions` и не трогать компоненты.
 */

export type CategoryId = 'city' | 'islands' | 'beaches' | 'tours';

export type Category = {
  id: CategoryId;
  title: string;
  icon: string;
  description: string;
};

/** Готова ли страница места: влияет на бейдж в карточке. */
export type AttractionStatus = 'ready' | 'draft' | 'planned';

/** Строка блока «Кратко о месте». */
export type QuickFact = {
  icon: string;
  label: string;
  /** Поддерживает inline-разметку: **жирный** и [ссылка](url). */
  value: string;
};

export type ImageItem = {
  src: string;
  alt: string;
  caption?: string;
};

export type Block =
  | { kind: 'paragraph'; text: string }
  | { kind: 'lead'; text: string }
  | { kind: 'list'; items: string[]; ordered?: boolean }
  | { kind: 'callout'; icon?: string; title?: string; text: string }
  | { kind: 'steps'; items: { title: string; text: string }[] }
  | { kind: 'gallery'; images: ImageItem[] };

export type Section = {
  id: string;
  icon?: string;
  title: string;
  blocks: Block[];
};

export type ExternalLink = {
  label: string;
  url: string;
};

export type Attraction = {
  slug: string;
  title: string;
  category: CategoryId;
  status: AttractionStatus;
  /** Одна строка для карточки на главной. */
  summary: string;
  /** Короткие метки для карточки: время, сложность и т.п. */
  tags: string[];
  emoji: string;
  cover?: ImageItem;
  quickFacts?: QuickFact[];
  links?: ExternalLink[];
  sections: Section[];
};
