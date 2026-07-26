---
name: vladivostok-route-card
description: Use when building a Vladivostok guide ROUTE card (маршрут / прогулка по нескольким местам, the Route model) from an ordered list of stops plus a map iframe. Assembles the .ts route card directly — points[], mapEmbedUrl and route-level sections — and registers it in src/data/routes/index.ts. NOT for a single place (use vladivostok-guide-card + md-to-card-ts for that). Triggers — "создай маршрут", "карточка маршрута", "route card from places", "собери прогулку из точек".
---

# Vladivostok route card (Route)

Собирает карточку-**маршрут** (`Route` из [`src/data/types.ts`](../../../src/data/types.ts))
из **упорядоченного списка мест** и **iframe с картой маршрута**. Эталон —
[`src/data/routes/centr-sopki-i-more.ts`](../../../src/data/routes/centr-sopki-i-more.ts):
открой его перед началом.

**Почему прямо в `.ts`, а не через `.md`:** у маршрута есть `points[]` и
`mapEmbedUrl`, которые не выражаются прозой. Поэтому здесь **нет** связки
писатель→конвертер, как у точек — карточка собирается сразу в `.ts`. При этом
действуют правила достоверности и стиля из **vladivostok-guide-card**, а виды
блоков берём из **md-to-card-ts**.

## Вход

1. **Упорядоченный список мест** — в том порядке, как их проходят.
2. **iframe** карты (Яндекс-конструктор). Из него нужен только атрибут `src`.

## Шаги

1. **`mapEmbedUrl`** — скопируй **значение `src`** из тега `<iframe …>`. Больше из iframe ничего не бери.
2. **Свяжи места с карточками.** Для каждого места найди готовую карточку в
   `src/data/attractions` (по названию → её `slug`). Нашёл — это `attractionSlug`
   точки, и факты для неё (адрес, время, суть) бери **из её карточки**, не выдумывай.
   Не нашёл — точку оставь без `attractionSlug` (ссылка «Подробнее» просто не покажется).
3. **`points[]`** — по одному объекту `{ title, note?, attractionSlug? }` на место, **в порядке маршрута**.
   `note` — короткая подпись (адрес + суть), в стиле эталона.
4. **`quickFacts[]`** — агрегируй по маршруту: общее время, дистанция, расходы,
   трудозатраты, снаряжение, еда. **Дистанцию/время бери только из iframe-маршрута
   или из карточек мест; не подбирай красивое число.** Всё бесплатно → так и напиши.
5. **`sections[]`** — напиши прозу уровня маршрута (виды блоков — см. таблицу):
   вводный `lead` «О маршруте», затем «Что вы увидите» как `steps` (по шагу на место,
   сжато из карточки места), при необходимости «На что обратить внимание», «История»,
   «Место в городе», «Что стоит рассмотреть».
6. **Мета:** `slug` (kebab-транслит), файл `slug.ts`, экспорт camelCase; `status`
   (`ready`/`draft`); уникальный `emoji`; живой `summary`; 3–4 `tags`.
7. **Зарегистрируй** в [`src/data/routes/index.ts`](../../../src/data/routes/index.ts): `import` + в массив `routes`.
8. **Проверь типы:** `npx tsc --noEmit`.
9. **Не удаляй** входные данные сам.

## Поля `Route`

| Поле | Что кладём |
|---|---|
| `points[]` | `{ title, note?, attractionSlug? }` — стопы в порядке прохождения |
| `mapEmbedUrl` | значение `src` из `<iframe>` |
| `quickFacts[]` | `{ icon, label, value }` — агрегат по маршруту (`value` поддерживает `**жирный**` и `[ссылку](url)`) |
| `sections[]` | `{ id, icon?, title, blocks[] }` |
| `summary`/`tags`/`emoji`/`status`/`slug`/`title` | как у точек |

Виды `blocks` — те же, что в **md-to-card-ts**: `lead`, `paragraph`, `list`,
`callout`, `steps`, `gallery`.

## Частые ошибки

- Забыл `mapEmbedUrl` (карта не отрисуется) или взял из iframe что-то кроме `src`.
- Придумал дистанцию/время в пути, которых нет во входных данных.
- Опечатка в `attractionSlug` — ссылка «Подробнее» молча не покажется. Сверяй со слагами в `src/data/attractions`.
- Забыл добавить в `routes/index.ts`.
- Дублирующий `slug`/`emoji`.
- Переписываешь содержимое карточек мест заново вместо сжатой выжимки из них.
