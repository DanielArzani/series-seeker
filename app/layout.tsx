import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { outfit } from './lib/fonts/fonts';

import './globals.tw.css';
import Header from './ui/Header/Header';
import SearchForm from './ui/SearchForm/SearchForm';

export const metadata: Metadata = {
  title: 'Series Seeker',
  description: 'An app for watching real Christian sermons and videos',
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
        <body
          className={`${outfit.className} prose bg-darkBlue text-pureWhite main-grid`}
        >
          <Header />
          <SearchForm />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
  {
  }
}
