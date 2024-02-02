'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

import searchIcon from '@/public/icon-search.svg';

/**
 * Gets user search query and stores its value to the search params
 */
export default function SearchBar() {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
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
          placeholder='Search for movies or TV series'
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          defaultValue={searchParams.get('query')?.toString()}
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
