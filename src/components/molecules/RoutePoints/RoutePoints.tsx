import { Link } from 'react-router-dom';
import { RightOutlined } from '@ant-design/icons';
import RichText from '../../atoms/RichText/RichText';
import { findAttraction } from '../../../data/attractions';
import type { RoutePoint } from '../../../data/types';
import './RoutePoints.css';

/** Содержимое строки одинаково для ссылки и для точки без своей страницы. */
function Body({ point, index }: { point: RoutePoint; index: number }) {
  return (
    <>
      <span className="route-points__marker" aria-hidden="true">
        {index + 1}
      </span>
      <div className="route-points__text">
        <p className="route-points__title">{point.title}</p>
        {point.note && (
          <p className="route-points__note">
            <RichText text={point.note} />
          </p>
        )}
      </div>
    </>
  );
}

/**
 * Легенда карты: номера совпадают с метками на карте.
 * Точка, у которой есть своя карточка-описание, ведёт на её страницу.
 */
export function RoutePoints({ points }: { points: RoutePoint[] }) {
  return (
    <ol className="route-points">
      {points.map((point, index) => {
        // Ссылку показываем, только если место действительно есть в гиде.
        const attraction = point.attractionSlug ? findAttraction(point.attractionSlug) : undefined;

        return (
          <li key={point.title}>
            {attraction ? (
              <Link
                to={`/place/${attraction.slug}`}
                className="route-points__row route-points__row--link"
                aria-label={`Точка ${index + 1}: ${point.title} — подробнее`}
              >
                <Body point={point} index={index} />
                <span className="route-points__more">
                  Подробнее
                  <RightOutlined />
                </span>
              </Link>
            ) : (
              <div className="route-points__row">
                <Body point={point} index={index} />
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );
}

export default RoutePoints;
