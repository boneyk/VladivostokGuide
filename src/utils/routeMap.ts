/**
 * Карта маршрута — готовый виджет из Яндекс.Конструктора (yandex.ru/map-constructor):
 * маршрут рисуется мышкой, оттуда копируется ссылка из тега <iframe> в поле `mapEmbedUrl`.
 * API-ключ и подключение JS API для этого не нужны.
 */

/** Та же карта, но во внешней вкладке: «открыть в Яндекс.Картах». */
export function routeMapExternalUrl(embedUrl?: string): string | undefined {
  return embedUrl?.replace('yandex.ru/map-widget/v1/', 'yandex.ru/maps/');
}
