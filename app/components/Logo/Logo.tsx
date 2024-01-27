import Image from 'next/image';

import logo from '@/public/logo.svg';

/**
 * App Logo
 */
export default function Logo() {
  return (
    <h1>
      <Image src={logo} alt='Series Seeker' />
      <span className='sr-only'>Series Seeker</span>
    </h1>
  );
}
