import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageLayout from '../../templates/PageLayout/PageLayout';
import BackLink from '../../atoms/BackLink/BackLink';
import SectionHeading from '../../atoms/SectionHeading/SectionHeading';
import QuickFacts from '../../molecules/QuickFacts/QuickFacts';
import RoutePoints from '../../molecules/RoutePoints/RoutePoints';
import RouteHero from '../../organisms/RouteHero/RouteHero';
import ContentSection from '../../organisms/ContentSection/ContentSection';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import { findRoute } from '../../../data/routes';
import './RoutePage.css';

/** Страница одного маршрута: карта с точками, краткая справка и описание по секциям. */
export function RoutePage() {
  const { slug } = useParams<{ slug: string }>();
  const route = findRoute(slug);

  // При переходе с главной браузер сохраняет позицию прокрутки — сбрасываем её.
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!route) {
    return <NotFoundPage message={`Маршрут «${slug}» не найден в гиде.`} />;
  }

  return (
    <PageLayout narrow>
      <div>
        <BackLink>Ко всем маршрутам</BackLink>
      </div>

      <article className="route-page">
        <RouteHero route={route} />

        {route.points.length > 0 && (
          <section className="route-page__points">
            <SectionHeading icon="📍" title="Точки маршрута" />
            <RoutePoints points={route.points} />
          </section>
        )}

        {route.quickFacts && route.quickFacts.length > 0 && (
          <section className="route-page__facts">
            <SectionHeading icon="🧭" title="Кратко о маршруте" />
            <QuickFacts facts={route.quickFacts} />
          </section>
        )}

        {route.sections.map((section) => (
          <ContentSection key={section.id} section={section} />
        ))}
      </article>
    </PageLayout>
  );
}

export default RoutePage;
