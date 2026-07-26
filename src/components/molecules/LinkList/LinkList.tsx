import { LinkOutlined } from '@ant-design/icons';
import type { ExternalLink } from '../../../data/types';
import './LinkList.css';

/** Полезные внешние ссылки: карты, расписания, официальные сайты. */
export function LinkList({ links }: { links: ExternalLink[] }) {
  return (
    <div className="link-list">
      {links.map((link) => (
        <a
          key={link.url}
          href={link.url}
          className="link-list__item"
          target="_blank"
          rel="noreferrer noopener"
        >
          <LinkOutlined />
          <span>{link.label}</span>
        </a>
      ))}
    </div>
  );
}

export default LinkList;
