'use client';

import Image from 'next/image';

import homeIcon from '@/public/icon-nav-home.svg';
import moviesIcon from '@/public/icon-nav-movies.svg';
import tvIcon from '@/public/icon-nav-tv-series.svg';
import bookmarkIcon from '@/public/icon-nav-bookmark.svg';

export default function Navbar() {
  return (
    <nav>
      <Image src={homeIcon} alt='Go to home page' />
      <Image src={moviesIcon} alt='Go to movies page' />
      <Image src={tvIcon} alt='Go to tv shows page' />
      <Image src={bookmarkIcon} alt='Go to your bookmarks' />
    </nav>
  );
}
