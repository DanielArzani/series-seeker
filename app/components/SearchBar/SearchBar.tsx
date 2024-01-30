'use client';

import React from 'react';
import Image from 'next/image';

import searchIcon from '@/public/icon-search.svg';

/**
 * Gets user search query
 */
export default function SearchBar() {
  return (
    <div role='search' className='relative w-full'>
      <label htmlFor='search' className='sr-only'>
        Search for any movies or TV series
      </label>
      <p id='error' role='alert' className='sr-only'></p>

      <div className='flex items-center'>
        <input
          id='search'
          className='bg-inherit border-transparent pl-10 w-full'
          type='text'
          placeholder='Search for movies or TV series'
        />
        <div className='absolute left-0 inset-y-0 flex items-center pl-3 pointer-events-none'>
          <Image src={searchIcon} alt='Search' width={20} height={20} />
        </div>
      </div>
    </div>
  );
}
