import type { Attraction, CategoryId } from '../types';
import { mayakTokarevskogo } from './mayak-tokarevskogo';
import { kampusDvfu } from './kampus-dvfu';
import { okeanarium } from './okeanarium';
import { mysTobizina } from './mys-tobizina';
import { ostrovShkota } from './ostrov-shkota';
import { zolotoyMost, russkiyMost } from './mosty';
import { orlinoeGnezdo } from './orlinoe-gnezdo';
import { pochtovayaSopka } from './pochtovaya-sopka';
import { nagornyyPark } from './nagornyy-park';
import { pokrovskiyPark } from './pokrovskiy-park';
import { novosiltsevskayaBatareya } from './novosiltsevskaya-batareya';
import { mysZhitkova } from './mys-zhitkova';
import { korabelnayaNaberezhnaya } from './korabelnaya-naberezhnaya';
import { sportivnayaNaberezhnaya } from './sportivnaya-naberezhnaya';
import { naberezhnayaCesarevicha } from './naberezhnaya-cesarevicha';
import { staryyDvorikGuma } from './staryy-dvorik-guma';
import { morskoyVokzal } from './morskoy-vokzal';
import { plannedAttractions } from './planned';

export const attractions: Attraction[] = [
  zolotoyMost,
  russkiyMost,
  okeanarium,
  kampusDvfu,
  orlinoeGnezdo,
  pochtovayaSopka,
  nagornyyPark,
  pokrovskiyPark,
  novosiltsevskayaBatareya,
  mysZhitkova,
  korabelnayaNaberezhnaya,
  sportivnayaNaberezhnaya,
  naberezhnayaCesarevicha,
  staryyDvorikGuma,
  morskoyVokzal,
  mayakTokarevskogo,
  mysTobizina,
  ostrovShkota,
  ...plannedAttractions,
];

export const findAttraction = (slug?: string): Attraction | undefined =>
  attractions.find((attraction) => attraction.slug === slug);

export const attractionsByCategory = (categoryId: CategoryId): Attraction[] =>
  attractions.filter((attraction) => attraction.category === categoryId);

/** Сколько мест уже описано подробно — показываем в шапке главной. */
export const readyCount = attractions.filter(
  (attraction) => attraction.status === 'ready',
).length;
