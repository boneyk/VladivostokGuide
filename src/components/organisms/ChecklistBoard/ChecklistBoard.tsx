import { Col, Row } from 'antd';
import { checklist } from '../../../data/checklist';
import './ChecklistBoard.css';

/** Чек-лист сборов: карточки-группы с отмечаемыми пунктами. */
export function ChecklistBoard() {
  return (
    <Row gutter={[20, 20]}>
      {checklist.map((group) => (
        <Col key={group.id} xs={24} sm={12} lg={8}>
          <section className="checklist-card">
            <h2 className="checklist-card__title">
              <span aria-hidden="true">{group.icon}</span>
              {group.title}
            </h2>
            <ul className="checklist-card__list">
              {group.items.map((item) => (
                <li key={item}>
                  <label className="checklist-card__item">
                    <input type="checkbox" />
                    <span>{item}</span>
                  </label>
                </li>
              ))}
            </ul>
          </section>
        </Col>
      ))}
    </Row>
  );
}

export default ChecklistBoard;
