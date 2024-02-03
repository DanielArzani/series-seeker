import IconLink from '@/app/components/ImageLink/IconLink';

/**
 * The navigation bar, holds the Links to the various routes on the app and persists the state of the active tab
 */
export default function Navbar() {
  return (
    <nav className=' lg:mb-auto lg:mt-20'>
      <ul className='flex gap-5 lg:gap-10 items-center lg:flex-col'>
        <li>
          <IconLink url='/' />
        </li>

        <li>
          <IconLink url='/movies' />
        </li>

        <li>
          <IconLink url='/tv-series' />
        </li>

        <li>
          <IconLink url='/bookmarks' />
        </li>
      </ul>
    </nav>
  );
}
