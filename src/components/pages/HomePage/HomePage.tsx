import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageLayout from '../../templates/PageLayout/PageLayout';
import HomeHero from '../../organisms/HomeHero/HomeHero';
import CategoryBoard from '../../organisms/CategoryBoard/CategoryBoard';
import RouteBoard from '../../organisms/RouteBoard/RouteBoard';
import { categories } from '../../../data/categories';
import { attractionsByCategory } from '../../../data/attractions';
import { routes } from '../../../data/routes';
import { scrollToSection } from '../../../utils/scrollToSection';

/** Главная: обложка гида и разделы с ячейками достопримечательностей. */
export function HomePage() {
  const location = useLocation();
  const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo;

  // Переход «шапка → раздел» с внутренней страницы: сначала роутер, потом прокрутка.
  useEffect(() => {
    if (scrollTo) scrollToSection(scrollTo);
  }, [scrollTo]);

  return (
    <PageLayout>
      <HomeHero />
      <RouteBoard routes={routes} />
      {categories.map((category) => (
        <CategoryBoard
          key={category.id}
          category={category}
          items={attractionsByCategory(category.id)}
        />
      ))}
    </PageLayout>
  );
}

export default HomePage;
