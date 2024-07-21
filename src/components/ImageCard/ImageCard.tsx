import css from './ImageCard.module.css';
import { Picture } from '../../types';

interface ImageCardProps {
  image: Picture;
  onClick: () => void;
}

export default function ImageCard({ image, onClick }: ImageCardProps) {
  return (
    <div className={css.container} onClick={onClick}>
      <img
        className={css.image}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
}