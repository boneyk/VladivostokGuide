import RichText from '../../atoms/RichText/RichText';
import './ProseList.css';

type Props = {
  items: string[];
  ordered?: boolean;
};

/** Маркированный или нумерованный список с inline-разметкой. */
export function ProseList({ items, ordered = false }: Props) {
  const List = ordered ? 'ol' : 'ul';

  return (
    <List className={`prose-list${ordered ? ' prose-list--ordered' : ''}`}>
      {items.map((item) => (
        <li key={item}>
          <RichText text={item} />
        </li>
      ))}
    </List>
  );
}

export default ProseList;
