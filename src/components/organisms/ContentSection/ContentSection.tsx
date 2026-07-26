import RichText from '../../atoms/RichText/RichText';
import Callout from '../../molecules/Callout/Callout';
import Gallery from '../../molecules/Gallery/Gallery';
import ProseList from '../../molecules/ProseList/ProseList';
import StepsList from '../../molecules/StepsList/StepsList';
import type { Block, Section } from '../../../data/types';
import './ContentSection.css';

function renderBlock(block: Block, index: number) {
  switch (block.kind) {
    case 'lead':
      return (
        <p className="content-section__lead" key={index}>
          <RichText text={block.text} />
        </p>
      );
    case 'paragraph':
      return (
        <p className="content-section__paragraph" key={index}>
          <RichText text={block.text} />
        </p>
      );
    case 'list':
      return <ProseList key={index} items={block.items} ordered={block.ordered} />;
    case 'callout':
      return <Callout key={index} icon={block.icon} title={block.title} text={block.text} />;
    case 'steps':
      return <StepsList key={index} items={block.items} />;
    case 'gallery':
      return <Gallery key={index} images={block.images} />;
    default:
      return null;
  }
}

/** Одна смысловая секция страницы места: заголовок + список блоков. */
export function ContentSection({ section }: { section: Section }) {
  return (
    <section className="content-section" id={section.id}>
      <h2 className="content-section__title">
        {section.icon && (
          <span className="content-section__icon" aria-hidden="true">
            {section.icon}
          </span>
        )}
        {section.title}
      </h2>
      <div className="content-section__blocks">{section.blocks.map(renderBlock)}</div>
    </section>
  );
}

export default ContentSection;
