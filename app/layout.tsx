import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { outfit } from './lib/fonts/fonts';

import './globals.tw.css';

export const metadata: Metadata = {
  title: 'Series Seeker',
  description: 'A web for finding new movies and TV shows',
};

/**
 * The root layout shared by all the pages in the application
 * @param props.children
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en' dir='ltr'>
        <body className={`${outfit.className} prose bg-bodyBg p-8`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
  {
  }
}
