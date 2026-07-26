# Гид по Владивостоку

Сайт-путеводитель: главная со списком мест по разделам, отдельная страница на каждую
достопримечательность и чек-лист сборов. Контент перенесён из Notion-гида.

Стек: **React 18 + TypeScript + Vite + Ant Design + React Router** (HashRouter — чтобы работал
GitHub Pages без серверных редиректов).

## Запуск

```bash
npm install
npm run dev      # локальная разработка, http://localhost:5173
npm run build    # сборка в dist/
npm run preview  # посмотреть собранную версию
```

## Публикация на GitHub Pages

Проект собирается с `base: './'`, поэтому работает и в корне домена, и в подпапке
`https://<username>.github.io/<repo>/`.

```bash
npm run deploy   # соберёт проект и запушит dist/ в ветку gh-pages
```

Затем в настройках репозитория: **Settings → Pages → Source: Deploy from a branch → gh-pages / (root)**.

Альтернатива — автодеплой через Actions: workflow уже лежит в
[.github/workflows/deploy.yml](.github/workflows/deploy.yml), для него в **Settings → Pages**
нужно выбрать **Source: GitHub Actions**.

## Структура проекта (atomic design)

```
src/
├── assets/photos/        — фотографии мест (сжатые, до 1600px)
├── components/
│   ├── atoms/            — RichText, TagPill, StatusBadge, SectionHeading, BackLink
│   ├── molecules/        — AttractionCard, QuickFacts, Callout, StepsList, Gallery, ProseList, LinkList
│   ├── organisms/        — SiteHeader, SiteFooter, HomeHero, CategoryBoard, AttractionHero,
│   │                       ContentSection, RelatedPlaces, ChecklistBoard
│   ├── templates/        — PageLayout (шапка + контент + подвал)
│   └── pages/            — HomePage, AttractionPage, ChecklistPage, NotFoundPage
├── data/                 — весь контент гида
│   ├── attractions/      — по файлу на место
│   ├── categories.ts     — разделы главной
│   ├── checklist.ts      — чек-лист сборов
│   └── types.ts          — модель контента
├── router/AppRoutes.tsx  — маршруты
├── styles/               — tokens.css (палитра) и global.css
├── theme/antdTheme.ts    — токены Ant Design
└── utils/
```

## Как добавить новое место

1. Создайте `src/data/attractions/<slug>.ts` и экспортируйте объект типа `Attraction`.
2. Добавьте его в массив в `src/data/attractions/index.ts`.
3. Карточка появится на главной в своём разделе автоматически, страница — по адресу `#/place/<slug>`.

Текст хранится строками и поддерживает inline-разметку: `**жирный**` и `[подпись](ссылка)`.
Доступные блоки описаны в `src/data/types.ts`: `lead`, `paragraph`, `list`, `callout`, `steps`,
`gallery`.

Фотографии кладите в `src/assets/photos/<slug>/` и импортируйте в файле места — Vite сам
проставит правильные пути при сборке.

## Маршруты

| Путь              | Страница                        |
| ----------------- | ------------------------------- |
| `#/`              | Главная со всеми разделами      |
| `#/place/:slug`   | Страница достопримечательности  |
| `#/checklist`     | Чек-лист перед поездкой         |
