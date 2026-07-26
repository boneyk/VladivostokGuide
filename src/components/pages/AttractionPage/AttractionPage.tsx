import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageLayout from '../../templates/PageLayout/PageLayout';
import BackLink from '../../atoms/BackLink/BackLink';
import SectionHeading from '../../atoms/SectionHeading/SectionHeading';
import QuickFacts from '../../molecules/QuickFacts/QuickFacts';
import AttractionHero from '../../organisms/AttractionHero/AttractionHero';
import ContentSection from '../../organisms/ContentSection/ContentSection';
import RelatedPlaces from '../../organisms/RelatedPlaces/RelatedPlaces';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import { attractionsByCategory, findAttraction } from '../../../data/attractions';
import './AttractionPage.css';

/** Страница одной достопримечательности. */
export function AttractionPage() {
  const { slug } = useParams<{ slug: string }>();
  const attraction = findAttraction(slug);

  // При переходе с главной браузер сохраняет позицию прокрутки — сбрасываем её.
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!attraction) {
    return <NotFoundPage message={`Место «${slug}» не найдено в гиде.`} />;
  }

  const related = attractionsByCategory(attraction.category).filter(
    (item) => item.slug !== attraction.slug,
  );

  return (
    <PageLayout narrow>
      <div>
        <BackLink />
      </div>

      <article className="attraction-page">
        <AttractionHero item={attraction} />

        {attraction.quickFacts && attraction.quickFacts.length > 0 && (
          <section className="attraction-page__facts">
            <SectionHeading icon="🧭" title="Кратко о месте" />
            <QuickFacts facts={attraction.quickFacts} />
          </section>
        )}

        {attraction.sections.map((section) => (
          <ContentSection key={section.id} section={section} />
        ))}
      </article>

      <RelatedPlaces items={related.slice(0, 3)} />
    </PageLayout>
  );
}

export default AttractionPage;
