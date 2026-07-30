import type { Route } from "../../../data/types";
import "./RouteMap.css";

type Props = {
  route: Route;
  /**
   * `card` — превью в ячейке: карта не перехватывает клики, чтобы работала ссылка карточки.
   * `page` — карта на странице маршрута, с ней можно взаимодействовать.
   */
  variant?: "card" | "page";
};

/**
 * Карта маршрута — виджет Яндекс.Карт из конструктора.
 * Грузится лениво: карточки за пределами экрана карту не запрашивают.
 */
export function RouteMap({ route, variant = "card" }: Props) {
  const interactive = variant === "page";

  if (!route.mapEmbedUrl) {
    return (
      <div className={`route-map route-map--${variant} route-map--empty`}>
        <span aria-hidden="true">🗺️</span>
        <p>Карта появится, когда маршрут соберут в Яндекс.Конструкторе.</p>
      </div>
    );
  }
  if (!interactive) {
    return (
      <div
        className={`route-map route-map--${variant}`}
        aria-hidden={interactive ? undefined : "true"}
      >
        <img
          src={route.mapImgUrl}
          title={`Карта маршрута «${route.title}»`}
          tabIndex={interactive ? undefined : -1}
        />
      </div>
    );
  }

  return (
    <div
      className={`route-map route-map--${variant}`}
      aria-hidden={interactive ? undefined : "true"}
    >
      <iframe
        src={route.mapEmbedUrl}
        title={`Карта маршрута «${route.title}»`}
        loading="lazy"
        allowFullScreen
        tabIndex={interactive ? undefined : -1}
      />
    </div>
  );
}

export default RouteMap;
