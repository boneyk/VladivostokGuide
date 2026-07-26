import RichText from '../../atoms/RichText/RichText';
import './StepsList.css';

type Props = {
  items: { title: string; text: string }[];
};

/** Пронумерованные шаги маршрута или ключевые точки осмотра. */
export function StepsList({ items }: Props) {
  return (
    <ol className="steps-list">
      {items.map((item, index) => (
        <li className="steps-list__item" key={item.title}>
          <span className="steps-list__marker" aria-hidden="true">
            {index + 1}
          </span>
          <div className="steps-list__body">
            <p className="steps-list__title">{item.title}</p>
            <p className="steps-list__text">
              <RichText text={item.text} />
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default StepsList;
