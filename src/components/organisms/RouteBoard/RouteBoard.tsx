import { useCallback, useEffect, useRef, useState } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import SectionHeading from '../../atoms/SectionHeading/SectionHeading';
import RouteCard from '../../molecules/RouteCard/RouteCard';
import type { Route } from '../../../data/types';
import './RouteBoard.css';

type Props = {
  routes: Route[];
};

const declension = (count: number) => {
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 === 1 && mod100 !== 11) return 'маршрут';
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return 'маршрута';
  return 'маршрутов';
};

/** Слайдер сдвигается ровно на одну карточку, поэтому берём её ширину вместе с зазором. */
function cardStep(track: HTMLElement): number {
  const card = track.firstElementChild as HTMLElement | null;
  if (!card) return track.clientWidth;
  const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
  return card.offsetWidth + gap;
}

/**
 * Первый раздел главной: маршруты по городу.
 * До трёх карточек в ряд помещаются целиком, дальше ряд листается — на десктопе
 * стрелками, на телефоне свайпом (одна карточка на экран).
 */
export function RouteBoard({ routes }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState({ overflow: false, prev: false, next: false });

  const sync = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    // Порог в 8px гасит дробные значения ширины при масштабировании страницы.
    const max = track.scrollWidth - track.clientWidth;
    setState({ overflow: max > 8, prev: track.scrollLeft > 8, next: track.scrollLeft < max - 8 });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    sync();
    const observer = new ResizeObserver(sync);
    observer.observe(track);
    return () => observer.disconnect();
  }, [sync, routes.length]);

  const slide = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * cardStep(track), behavior: 'smooth' });
  };

  if (routes.length === 0) return null;

  return (
    <section className="route-board" id="routes">
      <SectionHeading
        icon="🧭"
        title="Маршруты по городу"
        description="Готовые прогулки: карта с точками, порядок обхода и что смотреть на каждой остановке."
        extra={
          <div className="route-board__extra">
            <span className="route-board__count">
              {routes.length} {declension(routes.length)}
            </span>
            {state.overflow && (
              <div className="route-board__nav">
                <button
                  type="button"
                  className="route-board__arrow"
                  onClick={() => slide(-1)}
                  disabled={!state.prev}
                  aria-label="Предыдущие маршруты"
                >
                  <LeftOutlined />
                </button>
                <button
                  type="button"
                  className="route-board__arrow"
                  onClick={() => slide(1)}
                  disabled={!state.next}
                  aria-label="Следующие маршруты"
                >
                  <RightOutlined />
                </button>
              </div>
            )}
          </div>
        }
      />

      <div className="route-board__track" ref={trackRef} onScroll={sync}>
        {routes.map((route) => (
          <div className="route-board__slide" key={route.slug}>
            <RouteCard route={route} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default RouteBoard;
