'use client';

import homeIcon from '@/public/icon-nav-home.svg';
import moviesIcon from '@/public/icon-nav-movies.svg';
import tvIcon from '@/public/icon-nav-tv-series.svg';
import bookmarkIcon from '@/public/icon-nav-bookmark.svg';
import IconLink from '@/app/components/ImageLink/IconLink';

/**
 * The navigation bar, holds the Links to the various routes on the app and persists the state of the active tab
 */
export default function Navbar() {
  return (
    <nav className=' lg:mb-auto lg:mt-20'>
      <ul className='flex gap-5 items-center lg:flex-col'>
        <li>
          <IconLink
            icon={homeIcon}
            altText='Go to home page'
            accessibleText='Home'
            iconClassName='white-filter'
            url='/'
          />
        </li>

        <li>
          <IconLink
            icon={moviesIcon}
            altText='Go to movies page'
            accessibleText='Movies'
            iconClassName='white-filter'
            url='/movies'
          />
        </li>

        <li>
          <IconLink
            icon={tvIcon}
            altText='Go to tv shows page'
            accessibleText='TV-Series'
            iconClassName='white-filter'
            url='/tv-series'
          />
        </li>

        <li>
          <IconLink
            icon={bookmarkIcon}
            altText='Go to your bookmarks'
            accessibleText='Bookmarks'
            iconClassName='white-filter'
            url='/bookmarks'
          />
        </li>
      </ul>
    </nav>
  );
}
