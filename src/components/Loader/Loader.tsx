import { InfinitySpin } from 'react-loader-spinner';
import css from './Loader.module.css';

interface LoaderProps {
  isVisible: boolean;
}

export default function Loader({ isVisible }: LoaderProps) {
  if (!isVisible) return null;

  return (
    <div className={css.loadbox}>
      <InfinitySpin width="200" color="darkblue" />
    </div>
  );
}