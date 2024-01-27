'use client';

import Image from 'next/image';

import homeIcon from '@/public/icon-nav-home.svg';
import moviesIcon from '@/public/icon-nav-movies.svg';
import tvIcon from '@/public/icon-nav-tv-series.svg';
import bookmarkIcon from '@/public/icon-nav-bookmark.svg';

/**
 * The navigation bar, holds the Links to the various routes on the app
 */
export default function Navbar() {
  return (
    <nav className='flex gap-5 items-center lg:flex-col lg:mb-auto lg:mt-20'>
      <button>
        <Image className='white-filter' src={homeIcon} alt='Go to home page' />
      </button>

      <button>
        <Image
          className='white-filter'
          src={moviesIcon}
          alt='Go to movies page'
        />
      </button>

      <button>
        <Image
          className='white-filter'
          src={tvIcon}
          alt='Go to tv shows page'
        />
      </button>

      <button>
        <Image
          className='white-filter'
          src={bookmarkIcon}
          alt='Go to your bookmarks'
        />
      </button>
    </nav>
  );
}
