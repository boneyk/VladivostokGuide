import { EnvironmentOutlined } from '@ant-design/icons';
import TagPill from '../../atoms/TagPill/TagPill';
import StatusBadge from '../../atoms/StatusBadge/StatusBadge';
import LinkList from '../../molecules/LinkList/LinkList';
import RouteMap from '../../molecules/RouteMap/RouteMap';
import type { Route } from '../../../data/types';
import { routeMapExternalUrl } from '../../../utils/routeMap';
import './RouteHero.css';

/** Шапка страницы маршрута: название, теги и карта со всеми точками. */
export function RouteHero({ route }: { route: Route }) {
  const externalUrl = routeMapExternalUrl(route.mapEmbedUrl);

  return (
    <header className="route-hero">
      <div className="route-hero__meta">
        <span className="route-hero__kind">
          <span aria-hidden="true">🧭</span>
          Маршрут по городу
        </span>
        <StatusBadge status={route.status} />
      </div>

      <h1 className="route-hero__title">
        <span className="route-hero__emoji" aria-hidden="true">
          {route.emoji}
        </span>
        {route.title}
      </h1>

      <p className="route-hero__summary">{route.summary}</p>

      {route.tags.length > 0 && (
        <div className="route-hero__tags">
          {route.tags.map((tag) => (
            <TagPill key={tag}>{tag}</TagPill>
          ))}
        </div>
      )}

      <div className="route-hero__map">
        <RouteMap route={route} variant="page" />
        {externalUrl && (
          <a
            className="route-hero__map-link"
            href={externalUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            <EnvironmentOutlined />
            Открыть карту в Яндекс.Картах
          </a>
        )}
      </div>

      {route.links && route.links.length > 0 && <LinkList links={route.links} />}
    </header>
  );
}

export default RouteHero;
