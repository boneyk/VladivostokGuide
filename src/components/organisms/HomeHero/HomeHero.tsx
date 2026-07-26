import { categories } from '../../../data/categories';
import { attractions, readyCount } from '../../../data/attractions';
import { scrollToSection } from '../../../utils/scrollToSection';
import './HomeHero.css';

/** Первый экран главной: описание гида, счётчики и быстрые переходы к разделам. */
export function HomeHero() {
  return (
    <section className="home-hero">
      <div className="home-hero__content">
        <p className="home-hero__eyebrow">Личный путеводитель</p>
        <h1 className="home-hero__title">Владивосток в одном гиде</h1>
        <p className="home-hero__text">
          Мосты, острова, маяки и скалы — всё, ради чего сюда стоит ехать. Выберите место, чтобы
          узнать маршрут, время, расходы и что взять с собой.
        </p>

        <dl className="home-hero__stats">
          <div className="home-hero__stat">
            <dt>Мест в маршруте</dt>
            <dd>{attractions.length}</dd>
          </div>
          <div className="home-hero__stat">
            <dt>Описано подробно</dt>
            <dd>{readyCount}</dd>
          </div>
          <div className="home-hero__stat">
            <dt>Разделов</dt>
            <dd>{categories.length}</dd>
          </div>
        </dl>

        <div className="home-hero__chips">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              className="home-hero__chip"
              onClick={() => scrollToSection(category.id)}
            >
              <span aria-hidden="true">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
