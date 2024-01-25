'use client';

import { redirect } from 'next/navigation';

import styles from './page.module.css';

/**
 * The homepage
 * The root route (/)
 */
export default function Homepage() {
  if (true) {
    return <div>home page</div>;
  } else {
    redirect('/auth');
  }
}
