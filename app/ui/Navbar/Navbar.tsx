'use client';

import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import homeIcon from '@/public/icon-nav-home.svg';
import moviesIcon from '@/public/icon-nav-movies.svg';
import tvIcon from '@/public/icon-nav-tv-series.svg';
import bookmarkIcon from '@/public/icon-nav-bookmark.svg';
import { usePathname } from 'next/navigation';

/**
 * The navigation bar, holds the Links to the various routes on the app and persists the state of the active tab
 */
export default function Navbar() {
  const pathname = usePathname();

  // Function to determine if the route is selected
  const isSelected = (route: string) => pathname === route;

  return (
    <nav className='flex gap-5 items-center lg:flex-col lg:mb-auto lg:mt-20'>
      <button>
        <Link href='/'>
          <Image
            className={clsx('white-filter', {
              selected: isSelected('/'),
            })}
            src={homeIcon}
            alt='Go to home page'
          />
        </Link>
      </button>

      <button>
        <Link href='/movies'>
          <Image
            className={clsx('white-filter', {
              selected: isSelected('/movies'),
            })}
            src={moviesIcon}
            alt='Go to movies page'
          />
        </Link>
      </button>

      <button>
        <Link href='/tv-series'>
          <Image
            className={clsx('white-filter', {
              selected: isSelected('/tv-series'),
            })}
            src={tvIcon}
            alt='Go to tv shows page'
          />
        </Link>
      </button>

      <button>
        <Link href='/bookmarks'>
          <Image
            className={clsx('white-filter', {
              selected: isSelected('/bookmarks'),
            })}
            src={bookmarkIcon}
            alt='Go to your bookmarks'
          />
        </Link>
      </button>
    </nav>
  );
}
