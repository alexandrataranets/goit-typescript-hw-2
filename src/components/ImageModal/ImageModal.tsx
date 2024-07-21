import Modal from 'react-modal';
import { Picture } from '../../types';

Modal.setAppElement('#root');

interface ImageModalProps {
  image: Picture | null;
  onClose: () => void;
}

export default function ImageModal({ image, onClose }: ImageModalProps) {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          border: 'none',
          padding: '0',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          cursor: 'zoom-out',
        },
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
      }}
    >
      <div onClick={onClose}>
        {image && <img src={image.urls.regular} alt={image.alt_description} />}
      </div>
    </Modal>
  );
}