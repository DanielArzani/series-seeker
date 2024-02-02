import Image from 'next/image';

import logo from '@/public/logo.svg';

/**
 * App Logo
 */
export default function Logo() {
  return (
    <div>
      <Image src={logo} alt='Series Seeker' />
      <span className='sr-only'>Series Seeker</span>
    </div>
  );
}
