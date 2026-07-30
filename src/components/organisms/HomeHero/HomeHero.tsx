import { categories } from "../../../data/categories";
import { attractions, readyCount } from "../../../data/attractions";
import { scrollToSection } from "../../../utils/scrollToSection";
import "./HomeHero.css";
import { routes } from "../../../data/routes";

/** Первый экран главной: описание гида, счётчики и быстрые переходы к разделам. */
export function HomeHero() {
  const foodAttractionsCount = attractions.filter(
    (attraction) => attraction.category === "food",
  ).length;
  const attractionsCount = attractions.filter(
    (attraction) => attraction.category !== "food",
  ).length;
  return (
    <section className="home-hero">
      <div className="home-hero__content">
        <h1 className="home-hero__title">Владивосток в одном гиде</h1>
        <p className="home-hero__text">
          Мосты, острова, маяки и скалы — всё, ради чего сюда стоит ехать.
          Выберите место, чтобы узнать маршрут, время, расходы и что взять с
          собой.
        </p>

        <dl className="home-hero__stats">
          <div className="home-hero__stat">
            <dt>Количество маршрутов</dt>
            <dd>{routes.length}</dd>
          </div>
          <div className="home-hero__stat">
            <dt>Точки питания</dt>
            <dd>{foodAttractionsCount}</dd>
          </div>
          <div className="home-hero__stat">
            <dt>Интерестных мест</dt>
            <dd>{attractionsCount}</dd>
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
