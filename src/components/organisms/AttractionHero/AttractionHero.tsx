import TagPill from '../../atoms/TagPill/TagPill';
import StatusBadge from '../../atoms/StatusBadge/StatusBadge';
import LinkList from '../../molecules/LinkList/LinkList';
import { categoryById } from '../../../data/categories';
import type { Attraction } from '../../../data/types';
import './AttractionHero.css';

/** Шапка страницы места: категория, название, теги, обложка и ссылки. */
export function AttractionHero({ item }: { item: Attraction }) {
  const category = categoryById[item.category];

  return (
    <header className="attraction-hero">
      <div className="attraction-hero__meta">
        <span className="attraction-hero__category">
          <span aria-hidden="true">{category.icon}</span>
          {category.title}
        </span>
        <StatusBadge status={item.status} />
      </div>

      <h1 className="attraction-hero__title">
        <span className="attraction-hero__emoji" aria-hidden="true">
          {item.emoji}
        </span>
        {item.title}
      </h1>

      <p className="attraction-hero__summary">{item.summary}</p>

      {item.tags.length > 0 && (
        <div className="attraction-hero__tags">
          {item.tags.map((tag) => (
            <TagPill key={tag}>{tag}</TagPill>
          ))}
        </div>
      )}

      {item.cover && (
        <figure className="attraction-hero__cover">
          <img src={item.cover.src} alt={item.cover.alt} loading="lazy" />
          {item.cover.caption && <figcaption>{item.cover.caption}</figcaption>}
        </figure>
      )}

      {item.links && item.links.length > 0 && <LinkList links={item.links} />}
    </header>
  );
}

export default AttractionHero;
