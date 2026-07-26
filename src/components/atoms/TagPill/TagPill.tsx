import './TagPill.css';

/** Короткая метка карточки: время, стоимость, сложность. */
export function TagPill({ children }: { children: React.ReactNode }) {
  return <span className="tag-pill">{children}</span>;
}

export default TagPill;
