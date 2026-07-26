import { Link } from 'react-router-dom';
import { RightOutlined } from '@ant-design/icons';
import type { Route } from '../../../data/types';
import './RouteMentions.css';

/** Обратная ссылка: место открыто со страницы маршрута — покажем, куда вернуться. */
export function RouteMentions({ routes }: { routes: Route[] }) {
  if (routes.length === 0) return null;

  return (
    <div className="route-mentions">
      {routes.map((route) => (
        <Link key={route.slug} to={`/route/${route.slug}`} className="route-mentions__item">
          <span className="route-mentions__icon" aria-hidden="true">
            🧭
          </span>
          <span className="route-mentions__text">
            <span className="route-mentions__label">Точка маршрута</span>
            <span className="route-mentions__title">{route.title}</span>
          </span>
          <RightOutlined />
        </Link>
      ))}
    </div>
  );
}

export default RouteMentions;
