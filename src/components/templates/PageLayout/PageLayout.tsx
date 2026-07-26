import SiteHeader from '../../organisms/SiteHeader/SiteHeader';
import SiteFooter from '../../organisms/SiteFooter/SiteFooter';
import './PageLayout.css';

type Props = {
  children: React.ReactNode;
  /** Узкая колонка для читаемого текста страницы места. */
  narrow?: boolean;
};

/** Общий каркас страниц: шапка, ограниченная по ширине область контента, подвал. */
export function PageLayout({ children, narrow = false }: Props) {
  return (
    <div className="page-layout">
      <SiteHeader />
      <main className={`page-layout__main${narrow ? ' page-layout__main--narrow' : ''}`}>
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

export default PageLayout;
