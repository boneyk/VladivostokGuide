import { Col, Row } from 'antd';
import SectionHeading from '../../atoms/SectionHeading/SectionHeading';
import AttractionCard from '../../molecules/AttractionCard/AttractionCard';
import type { Attraction } from '../../../data/types';

/** Соседние места того же раздела — чтобы не возвращаться на главную. */
export function RelatedPlaces({ items }: { items: Attraction[] }) {
  if (items.length === 0) return null;

  return (
    <section className="related-places">
      <SectionHeading icon="🧭" title="Рядом в этом же разделе" />
      <Row gutter={[20, 20]}>
        {items.map((item) => (
          <Col key={item.slug} xs={24} sm={12} lg={8}>
            <AttractionCard item={item} />
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default RelatedPlaces;
