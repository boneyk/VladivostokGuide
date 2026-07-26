import { Link } from 'react-router-dom';
import './SiteFooter.css';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__text">
          Гид по Владивостоку — личный маршрут по городу, острову Русскому и окрестностям.
        </p>
        <nav className="site-footer__links" aria-label="Дополнительная навигация">
          <Link to="/">Все места</Link>
          <Link to="/checklist">Чек-лист сборов</Link>
        </nav>
      </div>
    </footer>
  );
}

export default SiteFooter;
