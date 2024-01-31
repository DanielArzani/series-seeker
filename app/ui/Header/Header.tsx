import Logo from '@/app/components/Logo/Logo';
import SignOutButton from '@/app/components/SignOutButton/SignOutButton';
import Navbar from '../Navbar/Navbar';

/**
 * The header which holds the logo, navbar and user profile. Its placement may be changed from top to the left side
 */
export default function Header() {
  return (
    <>
      <header className='header lg:max-h-[60rem] flex justify-between px-4 lg:px-4 lg:py-9 items-center bg-headerBg lg:left-0 lg:flex-col lg:w-auto md:rounded-[10px] '>
        <Logo />

        <Navbar />

        <SignOutButton />
      </header>
    </>
  );
}
