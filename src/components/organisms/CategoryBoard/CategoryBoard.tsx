import { Col, Row } from 'antd';
import SectionHeading from '../../atoms/SectionHeading/SectionHeading';
import AttractionCard from '../../molecules/AttractionCard/AttractionCard';
import type { Attraction, Category } from '../../../data/types';
import './CategoryBoard.css';

type Props = {
  category: Category;
  items: Attraction[];
};

const declension = (count: number) => {
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 === 1 && mod100 !== 11) return 'место';
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return 'места';
  return 'мест';
};

/** Раздел главной: заголовок и сетка ячеек-достопримечательностей. */
export function CategoryBoard({ category, items }: Props) {
  if (items.length === 0) return null;

  return (
    <section className="category-board" id={category.id}>
      <SectionHeading
        icon={category.icon}
        title={category.title}
        description={category.description}
        extra={`${items.length} ${declension(items.length)}`}
      />
      <Row gutter={[20, 20]}>
        {items.map((item) => (
          <Col key={item.slug} xs={24} sm={12} lg={8} xxl={6}>
            <AttractionCard item={item} />
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default CategoryBoard;
