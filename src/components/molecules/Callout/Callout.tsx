import RichText from '../../atoms/RichText/RichText';
import './Callout.css';

type Props = {
  icon?: string;
  title?: string;
  text: string;
};

/** Выделенная заметка внутри текста: совет, предупреждение, вердикт. */
export function Callout({ icon, title, text }: Props) {
  return (
    <aside className="callout">
      {icon && (
        <span className="callout__icon" aria-hidden="true">
          {icon}
        </span>
      )}
      <div className="callout__body">
        {title && <p className="callout__title">{title}</p>}
        <p className="callout__text">
          <RichText text={text} />
        </p>
      </div>
    </aside>
  );
}

export default Callout;
