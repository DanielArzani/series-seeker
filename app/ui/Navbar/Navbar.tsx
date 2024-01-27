'use client';

import Image from 'next/image';

import homeIcon from '@/public/icon-nav-home.svg';
import moviesIcon from '@/public/icon-nav-movies.svg';
import tvIcon from '@/public/icon-nav-tv-series.svg';
import bookmarkIcon from '@/public/icon-nav-bookmark.svg';
import Link from 'next/link';

/**
 * The navigation bar, holds the Links to the various routes on the app
 */
export default function Navbar() {
  return (
    <nav className='flex gap-5 items-center lg:flex-col lg:mb-auto lg:mt-20'>
      <button>
        <Link href='/'>
          <Image
            className='white-filter'
            src={homeIcon}
            alt='Go to home page'
          />
        </Link>
      </button>

      <button>
        <Link href='/movies'>
          <Image
            className='white-filter'
            src={moviesIcon}
            alt='Go to movies page'
          />
        </Link>
      </button>

      <button>
        <Link href='/tv-series'>
          <Image
            className='white-filter'
            src={tvIcon}
            alt='Go to tv shows page'
          />
        </Link>
      </button>

      <button>
        <Link href='/:id/bookmarks'>
          <Image
            className='white-filter'
            src={bookmarkIcon}
            alt='Go to your bookmarks'
          />
        </Link>
      </button>
    </nav>
  );
}
