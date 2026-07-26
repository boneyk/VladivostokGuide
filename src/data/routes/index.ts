import type { Route } from '../types';
import { centrSopkiIMore } from './centr-sopki-i-more';
import { russkiyOstrovMalyy } from './russkiy-ostrov-malyy';

/** Маршруты по городу — первый раздел главной. Порядок в массиве = порядок карточек. */
export const routes: Route[] = [centrSopkiIMore, russkiyOstrovMalyy];

export const findRoute = (slug?: string): Route | undefined =>
  routes.find((route) => route.slug === slug);

/** Маршруты, в которые входит место — показываем ссылку на его странице. */
export const routesWithAttraction = (slug: string): Route[] =>
  routes.filter((route) => route.points.some((point) => point.attractionSlug === slug));
