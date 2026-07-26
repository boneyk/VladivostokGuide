/**
 * Плавно прокручивает к разделу главной страницы.
 * Ссылки-якоря не используем: под HashRouter «#» уже занят роутером.
 */
export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (!element) return;

  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
