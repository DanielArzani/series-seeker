import Logo from '@/app/components/Logo/Logo';
import SignOutButton from '@/app/components/SignOutButton/SignOutButton';
import Navbar from '../Navbar/Navbar';

/**
 * The header which holds the logo, navbar and user profile. Its placement may be changed from top to the left side
 */
export default function Header() {
  return (
    <>
      <header>
        <Logo />

        <Navbar />

        <SignOutButton />
      </header>

      <div>
        <h1>This is text loaded from the server for speed</h1>
      </div>
    </>
  );
}
