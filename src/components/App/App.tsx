import { useEffect, useState } from 'react';
import { getPictures } from '../../pictures-api';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import { Toaster } from 'react-hot-toast';
import { Picture } from '../../types';

export default function App() {
  const [pictures, setPictures] = useState<Picture[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [modalImage, setModalImage] = useState<Picture | null>(null);
  const [perPage] = useState<number>(12);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      return;
    }
    async function fetchPictures() {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await getPictures(searchQuery, page, perPage);
        setPictures(prevState => [...prevState, ...data]);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPictures();
  }, [page, searchQuery, perPage]);

  const handleSearch = (topic: string) => {
    setSearchQuery(topic);
    setPage(1);
    setPictures([]);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <Toaster />
      {isError && (
        <ErrorMessage message="Oops! There was an error! Try again!" />
      )}
      <ImageGallery items={pictures} onImageClick={setModalImage} />
      <Loader isVisible={isLoading} />
      {pictures.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {modalImage && (
        <ImageModal image={modalImage} onClose={() => setModalImage(null)} />
      )}
    </div>
  );
}