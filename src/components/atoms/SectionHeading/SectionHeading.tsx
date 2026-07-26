import './SectionHeading.css';

type Props = {
  icon?: string;
  title: string;
  description?: string;
  /** Правый слот — например счётчик мест в разделе. */
  extra?: React.ReactNode;
};

export function SectionHeading({ icon, title, description, extra }: Props) {
  return (
    <div className="section-heading">
      <div className="section-heading__main">
        <h2 className="section-heading__title">
          {icon && (
            <span className="section-heading__icon" aria-hidden="true">
              {icon}
            </span>
          )}
          {title}
        </h2>
        {description && <p className="section-heading__description">{description}</p>}
      </div>
      {extra && <div className="section-heading__extra">{extra}</div>}
    </div>
  );
}

export default SectionHeading;
