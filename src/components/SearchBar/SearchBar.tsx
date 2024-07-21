import { useState, FormEvent, ChangeEvent } from 'react';
import { toast } from 'react-hot-toast';
import css from './SearchBar.module.css';
import { BsSearch } from 'react-icons/bs';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const [query, setQuery] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Please enter a search term', {
        duration: 2000,
        style: {
          backgroundColor: 'whitesmoke',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        },
      });
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button className={css.btn} type="submit">
          <BsSearch />
        </button>
        <input
          className={css.input}
          type="text"
          value={query}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
          autoFocus
          autoComplete="off"
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}