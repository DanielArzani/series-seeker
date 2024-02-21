'use client';

import { useState } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

import SearchBar from '@/app/components/SearchBar/SearchBar';

/**
 * The form for searching through the list of playlists. It stores the users query to the search params on submit
 */
export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState('');

  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleSubmit = (searchTerm: string) => {
    const params = new URLSearchParams(searchParams);
    if (searchTerm) {
      params.set('query', searchTerm);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <form
      className='search-form'
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(searchTerm);
      }}
    >
      <SearchBar setSearchTerm={setSearchTerm} />
    </form>
  );
}
