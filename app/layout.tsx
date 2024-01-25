import type { Metadata } from 'next';
// import { Outfit } from 'next/font/google';
import StyledComponentsRegistry from './lib/registry';

import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';

// export const outfit = Outfit({
//   subsets: ['latin', 'latin-ext'],
//   display: 'swap',
// });

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
      <html lang='en'>
        {/* <body className={outfit.className}> */}
        <body>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </html>
    </ClerkProvider>
  );
  {
  }
}
