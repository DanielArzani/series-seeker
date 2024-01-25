import Image from 'next/image';
import styles from './page.module.css';

import logo from '@/public/logo.svg';
import homeIcon from '@/public/icon-nav-home.svg';
import moviesIcon from '@/public/icon-nav-movies.svg';
import tvIcon from '@/public/icon-nav-tv-series.svg';
import bookmarkIcon from '@/public/icon-nav-bookmark.svg';
import { UserButton } from '@clerk/nextjs';

/**
 * The homepage
 * The root route (/)
 */
export default function Homepage() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logoWrapper}>
          <Image src={logo} alt='Series Seeker' />
        </div>

        <nav className={styles.navbar}>
          <Image src={homeIcon} alt='Go to home page' />
          <Image src={moviesIcon} alt='Go to movies page' />
          <Image src={tvIcon} alt='Go to tv shows page' />
          <Image src={bookmarkIcon} alt='Go to your bookmarks' />
        </nav>

        <div className={styles.profile}>
          <UserButton afterSignOutUrl='/login' />
        </div>
      </header>

      {/* these are my guesses at how this be structured and whether they are client or server 
      components */}
      {/* <header id="server--0">
        <div id='server--1' className='logo'></div>

        <nav id='client--1'></nav>

        <div id='server--2(clerk)' className='userProfileImage'>
            <UserButton afterSignOutUrl='/login' />
        </div>
      </header>

      <div id='client--2' className='searchBar'></div>

      <div id='server--3' className='trending movies'></div>

      <div id='server--4' className='listOfMovies'></div> */}
    </>
  );
}
