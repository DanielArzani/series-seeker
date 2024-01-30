'use client';

import React from 'react';
import Image from 'next/image';

import searchIcon from '@/public/icon-search.svg';

/**
 * Gets user search query
 */
export default function SearchBar() {
  return (
    <div role='search'>
      <label className='search-label' htmlFor='search'>
        <span className='sr-only'>Search for any movies or TV series</span>
        <p id='error' role='alert'></p>
      </label>

      <div>
        <div className='relative'>
          <input
            id='search'
            className='bg-inherit border-transparent w-full'
            type='text'
            placeholder='Search for movies or TV series'
          />
          <Image
            src={searchIcon}
            alt=''
            width={20}
            height={20}
            className='absolute top-1/2 -left-6 -translate-y-1/2'
          />
        </div>
      </div>
    </div>
  );
}
