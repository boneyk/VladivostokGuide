import { useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { categories } from '../../../data/categories';
import { scrollToSection } from '../../../utils/scrollToSection';
import './SiteHeader.css';

type NavItem =
  | { kind: 'route'; to: string; label: string }
  | { kind: 'section'; id: string; label: string };

const NAV_ITEMS: NavItem[] = [
  { kind: 'route', to: '/', label: 'Все места' },
  ...categories.map(
    (category): NavItem => ({ kind: 'section', id: category.id, label: category.title }),
  ),
  { kind: 'route', to: '/checklist', label: 'Чек-лист' },
];

/** Шапка сайта: на широких экранах — строка ссылок, на телефоне — бургер и Drawer. */
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const closeDrawer = () => setOpen(false);

  /** Разделы живут на главной, поэтому с внутренней страницы сначала уходим на «/». */
  const goToSection = (id: string) => {
    closeDrawer();
    if (location.pathname === '/') {
      scrollToSection(id);
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
  };

  const renderItem = (item: NavItem) =>
    item.kind === 'section' ? (
      <button
        key={item.id}
        type="button"
        className="site-header__link"
        onClick={() => goToSection(item.id)}
      >
        {item.label}
      </button>
    ) : (
      <NavLink
        key={item.to}
        to={item.to}
        end
        onClick={closeDrawer}
        className={({ isActive }) =>
          `site-header__link${isActive ? ' site-header__link--active' : ''}`
        }
      >
        {item.label}
      </NavLink>
    );

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="site-header__brand" onClick={closeDrawer}>
          <span className="site-header__mark" aria-hidden="true">
            🌊
          </span>
          <span className="site-header__brand-text">
            <span className="site-header__title">Гид по Владивостоку</span>
            <span className="site-header__subtitle">Маршруты, места и советы</span>
          </span>
        </Link>

        <nav className="site-header__nav" aria-label="Основная навигация">
          {NAV_ITEMS.map(renderItem)}
        </nav>

        <button
          type="button"
          className="site-header__burger"
          aria-label="Открыть меню"
          onClick={() => setOpen(true)}
        >
          <MenuOutlined />
        </button>
      </div>

      <Drawer title="Навигация" placement="right" open={open} onClose={closeDrawer} width={272}>
        <nav className="site-header__drawer-nav" aria-label="Мобильная навигация">
          {NAV_ITEMS.map(renderItem)}
        </nav>
      </Drawer>
    </header>
  );
}

export default SiteHeader;
