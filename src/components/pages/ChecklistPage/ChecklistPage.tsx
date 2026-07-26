import { useEffect } from 'react';
import PageLayout from '../../templates/PageLayout/PageLayout';
import BackLink from '../../atoms/BackLink/BackLink';
import SectionHeading from '../../atoms/SectionHeading/SectionHeading';
import ChecklistBoard from '../../organisms/ChecklistBoard/ChecklistBoard';

/** Чек-лист сборов перед поездкой. Отметки живут только до перезагрузки страницы. */
export function ChecklistPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <PageLayout>
      <div>
        <BackLink />
      </div>
      <div>
        <SectionHeading
          icon="🧳"
          title="Чек-лист перед поездкой"
          description="Что собрать заранее, чтобы не искать аквашузы за час до отлива. Отмечайте пункты прямо здесь."
        />
        <ChecklistBoard />
      </div>
    </PageLayout>
  );
}

export default ChecklistPage;
