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
import { podvodnayaLodkaS56 } from './podvodnaya-lodka-s56';
import { muzeyVladivostokskayaKrepost } from './muzey-vladivostokskaya-krepost';
import { korabelnayaNaberezhnaya } from './korabelnaya-naberezhnaya';
import { sportivnayaNaberezhnaya } from './sportivnaya-naberezhnaya';
import { naberezhnayaCesarevicha } from './naberezhnaya-cesarevicha';
import { ploshchadBorcovRevolyucii } from './ploshchad-borcov-revolyucii';
import { lyuteranskayaCerkov } from './lyuteranskaya-cerkov';
import { muzeyArseneva } from './muzey-arseneva';
import { kravcovskieVodopady } from './kravcovskie-vodopady';
import { zemlyaLeoparda } from './zemlya-leoparda';
import { poluostrovGamova } from './poluostrov-gamova';
import { staryyDvorikGuma } from './staryy-dvorik-guma';
import { morskoyVokzal } from './morskoy-vokzal';
import { ahlestysheva } from './ahlestysheva';
import { livadiya } from './livadiya';
import { botanicheskiySad } from './botanicheskiy-sad';
import { supVl } from './sup-vl';
import { fortyNaRusskom } from './forty-na-russkom';
import { safariPark } from './safari-park';
import { ostrovPutyatina } from './ostrov-putyatina';
import { tropaOsminoga } from './tropa-osminoga';
import { zuma } from './zuma';
import { hogo } from './hogo';
import { neRydai } from './ne-rydai';
import { prokofiy } from './prokofiy';
import { supra } from './supra';
import { tokio } from './tokio';
import { kaizen } from './kaizen';
import { sinkopa } from './sinkopa';
import { zhuklevich } from './zhuklevich';
import { kontrabanda } from './kontrabanda';
import { kolodecDrakona } from './kolodec-drakona';
import { serpIMolot } from './serp-i-molot';
import { edaITochka } from './eda-i-tochka';
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
  podvodnayaLodkaS56,
  muzeyVladivostokskayaKrepost,
  korabelnayaNaberezhnaya,
  sportivnayaNaberezhnaya,
  naberezhnayaCesarevicha,
  ploshchadBorcovRevolyucii,
  lyuteranskayaCerkov,
  muzeyArseneva,
  kravcovskieVodopady,
  zemlyaLeoparda,
  poluostrovGamova,
  staryyDvorikGuma,
  morskoyVokzal,
  mayakTokarevskogo,
  mysTobizina,
  ostrovShkota,
  ahlestysheva,
  livadiya,
  botanicheskiySad,
  supVl,
  fortyNaRusskom,
  safariPark,
  ostrovPutyatina,
  tropaOsminoga,
  zuma,
  hogo,
  neRydai,
  prokofiy,
  supra,
  tokio,
  kaizen,
  sinkopa,
  zhuklevich,
  kontrabanda,
  kolodecDrakona,
  serpIMolot,
  edaITochka,
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
