import type { Metadata } from 'next';
import StyledComponentsRegistry from './lib/registry';
import { ClerkProvider } from '@clerk/nextjs';
import { outfit } from './lib/fonts/fonts';

import './globals.css';

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
        <body className={outfit.className}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </html>
    </ClerkProvider>
  );
  {
  }
}
