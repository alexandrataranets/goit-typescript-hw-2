import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
import { Picture } from '../../types';

interface ImageGalleryProps {
  items: Picture[];
  onImageClick: (image: Picture) => void;
}

export default function ImageGallery({
  items,
  onImageClick,
}: ImageGalleryProps) {
  return (
    <ul className={css.list}>
      {items.map(item => (
        <li className={css.item} key={item.id}>
          <ImageCard image={item} onClick={() => onImageClick(item)} />
        </li>
      ))}
    </ul>
  );
}