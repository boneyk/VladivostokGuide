import { Image } from 'antd';
import type { ImageItem } from '../../../data/types';
import './Gallery.css';

/** Сетка фотографий с полноэкранным просмотром по клику. */
export function Gallery({ images }: { images: ImageItem[] }) {
  const isSingle = images.length === 1;

  return (
    <Image.PreviewGroup>
      <div className={`gallery${isSingle ? ' gallery--single' : ''}`}>
        {images.map((image) => (
          <figure className="gallery__item" key={image.src}>
            <Image
              src={image.src}
              alt={image.alt}
              className="gallery__image"
              loading="lazy"
              rootClassName="gallery__image-root"
            />
            {image.caption && <figcaption className="gallery__caption">{image.caption}</figcaption>}
          </figure>
        ))}
      </div>
    </Image.PreviewGroup>
  );
}

export default Gallery;
