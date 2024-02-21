'use client';

import React from 'react';
import Image from 'next/image';

import searchIcon from '@/public/icon-search.svg';

type SearchBarProps = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

/**
 * Gets user search query and passes it back to its parent component
 * @param setSearchTerm - The state that stores the search term
 */
export default function SearchBar({ setSearchTerm }: SearchBarProps) {
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div role='search' className='relative w-full'>
      <label htmlFor='search' className='sr-only'>
        Search for any movies or TV series
      </label>
      <p id='error' role='alert' className='text-red-500'></p>

      <div className='flex items-center'>
        <input
          id='search'
          className='bg-inherit border-transparent pl-10 w-full'
          type='text'
          placeholder='Search for Christian Playlists'
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          required
          style={{ caretColor: 'var(--logo-red)' }}
        />
        <div className='absolute left-0 inset-y-0 flex items-center pl-3 pointer-events-none'>
          <Image src={searchIcon} alt='Search' width={20} height={20} />
        </div>
      </div>
    </div>
  );
}
