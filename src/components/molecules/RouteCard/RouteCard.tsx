import { Link } from 'react-router-dom';
import { RightOutlined } from '@ant-design/icons';
import TagPill from '../../atoms/TagPill/TagPill';
import StatusBadge from '../../atoms/StatusBadge/StatusBadge';
import RouteMap from '../RouteMap/RouteMap';
import type { Route } from '../../../data/types';
import './RouteCard.css';

const pointsDeclension = (count: number) => {
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 === 1 && mod100 !== 11) return 'точка';
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return 'точки';
  return 'точек';
};

/** Ячейка раздела «Маршруты по городу»: карта с метками, затем описание. */
export function RouteCard({ route }: { route: Route }) {
  const chain = route.points.map((point) => point.title);
  const visible = chain.slice(0, 3);
  const rest = chain.length - visible.length;

  return (
    <Link
      to={`/route/${route.slug}`}
      className={`route-card route-card--${route.status}`}
      aria-label={`Маршрут «${route.title}»: ${route.summary}`}
    >
      <div className="route-card__map">
        <RouteMap route={route} variant="card" />
        {route.points.length > 0 && (
          <span className="route-card__count">
            {route.points.length} {pointsDeclension(route.points.length)}
          </span>
        )}
      </div>

      <div className="route-card__body">
        <div className="route-card__top">
          <span className="route-card__emoji" aria-hidden="true">
            {route.emoji}
          </span>
          <StatusBadge status={route.status} />
        </div>

        <h3 className="route-card__title">{route.title}</h3>
        <p className="route-card__summary">{route.summary}</p>

        {visible.length > 0 && (
          <p className="route-card__chain">
            {visible.join(' → ')}
            {rest > 0 && ` → ещё ${rest}`}
          </p>
        )}

        <div className="route-card__tags">
          {route.tags.map((tag) => (
            <TagPill key={tag}>{tag}</TagPill>
          ))}
        </div>

        <span className="route-card__cta">
          Смотреть маршрут
          <RightOutlined />
        </span>
      </div>
    </Link>
  );
}

export default RouteCard;
