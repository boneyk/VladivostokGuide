import RichText from '../../atoms/RichText/RichText';
import type { QuickFact } from '../../../data/types';
import './QuickFacts.css';

/** Блок «Кратко о месте» — таблица «иконка + метка + значение». */
export function QuickFacts({ facts }: { facts: QuickFact[] }) {
  return (
    <dl className="quick-facts">
      {facts.map((fact) => (
        <div className="quick-facts__row" key={fact.label}>
          <dt className="quick-facts__term">
            <span className="quick-facts__icon" aria-hidden="true">
              {fact.icon}
            </span>
            {fact.label}
          </dt>
          <dd className="quick-facts__value">
            <RichText text={fact.value} />
          </dd>
        </div>
      ))}
    </dl>
  );
}

export default QuickFacts;
