---
name: md-to-card-ts
description: Use when turning an ALREADY-WRITTEN guide card — a finished .md (e.g. in src/data/raw-tmp/), authored per the vladivostok-guide-card skill — into a TypeScript data file in src/data (an Attraction / место / точка, or a Route / маршрут) and registering it in the matching index.ts. This is the mechanical text→data step, NOT writing the card's prose. If the .md is only raw facts/notes, write the card with vladivostok-guide-card first. Triggers — "переведи готовую .md-карточку в .ts", "положи карточку в src/data", "convert finished md card to ts".
---

# MD → TS card (VladivostokGuide)

Проектный скилл: превращает написанную вручную карточку в формате `.md`
(обычно из `src/data/raw-tmp/`) в типизированный файл данных в `src/data/`.

Содержание карточки уже написано по правилам скилла **vladivostok-guide-card** —
эта задача **чисто механическая**: разложить текст по модели из
[`src/data/types.ts`](../../../src/data/types.ts) и зарегистрировать в индексе.
**Не переписывай и не выдумывай факты**, только переноси и структурируй.

## Attraction или Route?

Определи тип по содержимому `.md`:

| Признак в `.md` | Тип | Каталог / индекс |
|---|---|---|
| Одно место, одна достопримечательность, одна точка | `Attraction` | `src/data/attractions/` → `index.ts` |
| Последовательность точек, «прогулка / маршрут» по нескольким местам | `Route` | `src/data/routes/` → `index.ts` |

`Route` дополнительно требует `points[]` (список точек с `attractionSlug`, если
у точки есть своя карточка) и по возможности `mapEmbedUrl` (Яндекс-конструктор) —
если ссылки на карту в исходнике нет, поле оставь пустым, не выдумывай.

**Когда это НЕ твоя задача:** если на вход дан не готовый `.md`, а **список мест
маршрута + iframe карты** — используй скилл **vladivostok-route-card** (он собирает
`Route` напрямую из точек и `mapEmbedUrl`). Эта задача — только про перекладку
готового `.md` в `.ts`.

## Шаги

1. **Прочитай** `.md` и `src/data/types.ts`. Открой соседний готовый файл как образец
   (`attractions/orlinoe-gnezdo.ts` для места, `routes/centr-sopki-i-more.ts` для маршрута).
2. **Придумай slug** — kebab-case, транслит названия (`Сопки Владивостока` → `sopki-vladivostoka`).
   Имя файла = `slug.ts`, имя экспорта = camelCase от slug (`sopkiVladivostoka`).
3. **Проверь уникальность emoji** среди уже существующих карточек — не дублируй
   (`⛰️` уже у Почтовой сопки, `🦅` у Орлиного гнезда и т.п.).
4. **Заполни поля** (см. таблицы ниже), **создай файл**.
5. **Зарегистрируй в `index.ts`**: добавь `import` и вставь в массив (`attractions` / `routes`).
   Место в массиве = порядок на главной.
6. **Проверь типы**: `npx tsc --noEmit` (должно пройти без ошибок).
7. **Не удаляй исходный `.md`** сам — спроси пользователя, оставить его или убрать.

## Маппинг блока «Кратко о месте» → `quickFacts`

Каждый пункт `- **📍 Где:** …` становится объектом `{ icon, label, value }`.
`icon` — эмодзи пункта, `label` — короткое слово («Где», «Время», «Вход»),
`value` — текст. `value` поддерживает inline-разметку: `**жирный**` и `[текст](url)`.
Держи `value` кратким; если пунктов много, объединяй смысл, а не копируй абзацами.

## Маппинг разделов → `sections[]`

Каждый `### 🔎 Заголовок` в `.md` → `Section { id, icon, title, blocks[] }`.
`id` — короткий латинский slug (`intro`, `details`, `history`, `city`, `photo`),
`icon` — эмодзи из заголовка, `title` — текст заголовка без эмодзи.

Абзацы внутри раздела → `blocks[]` по видам из `Block`:

| Что в `.md` | `kind` |
|---|---|
| Первый, вводный абзац раздела «Зачем/Что увидите» | `lead` |
| Обычный абзац | `paragraph` |
| Маркированный список | `list` (`items[]`, `ordered?`) |
| Выделенная деталь «на что обратить внимание» (жирный подзаголовок + пояснение) | `callout` (`icon?`, `title?`, `text`) |
| Пошаговое описание точек маршрута | `steps` (`items: {title, text}[]`) |
| Фотографии | `gallery` (`images: {src, alt, caption?}[]`) |

## Ссылки-источники → `links[]`

В тексте источники часто идут inline: `([Визит-Приморье](https://…?utm_source=chatgpt.com))`.
**Убери их из тела** блоков и собери в поле `links: { label, url }[]`.
**Обрежь `utm_*` и прочие трекинг-параметры** из URL. Дедуплицируй одинаковые ссылки.

## Остальные поля

- `category` (только Attraction): `city` | `islands` | `beaches` | `tours` — см. `src/data/categories.ts`.
- `status`: `ready` (карточка готова), иначе `draft` / `planned`.
- `summary`: одна живая строка для карточки на главной.
- `tags`: 3–4 короткие метки (`'1–2 часа'`, `'Бесплатно'`, `'Смотровая'`).

## Частые ошибки

- Забыл добавить в `index.ts` — карточка не появится на сайте.
- Оставил `utm`-хвосты в ссылках.
- Придумал `mapEmbedUrl`, цену или расстояние, которых нет в исходнике — **нельзя**.
- `kind` блока не из списка `Block` в `types.ts` — не пройдёт `tsc`.
- Дублирующий slug или emoji.
