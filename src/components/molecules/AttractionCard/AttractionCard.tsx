import { Link } from 'react-router-dom';
import { RightOutlined } from '@ant-design/icons';
import TagPill from '../../atoms/TagPill/TagPill';
import StatusBadge from '../../atoms/StatusBadge/StatusBadge';
import type { Attraction } from '../../../data/types';
import './AttractionCard.css';

/** Ячейка сетки на главной: ведёт на страницу достопримечательности. */
export function AttractionCard({ item }: { item: Attraction }) {
  return (
    <Link
      to={`/place/${item.slug}`}
      className={`attraction-card attraction-card--${item.status}`}
      aria-label={`${item.title}: ${item.summary}`}
    >
      <div className="attraction-card__top">
        <span className="attraction-card__emoji" aria-hidden="true">
          {item.emoji}
        </span>
        <StatusBadge status={item.status} />
      </div>

      <h3 className="attraction-card__title">{item.title}</h3>
      <p className="attraction-card__summary">{item.summary}</p>

      <div className="attraction-card__tags">
        {item.tags.map((tag) => (
          <TagPill key={tag}>{tag}</TagPill>
        ))}
      </div>

      <span className="attraction-card__cta">
        Открыть
        <RightOutlined />
      </span>
    </Link>
  );
}

export default AttractionCard;
