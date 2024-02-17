'use client';
import MainContent from './ui/MainContent/MainContent';
import TrendingContent from './ui/TrendingContent/TrendingContent';

import ContentHolder from './ui/ContentHolder/ContentHolder';
import { ChannelProvider } from './contexts/channelContext';

/**
 * The homepage
 * The root route (/)
 */
export default function Homepage() {
  return (
    <>
      <ChannelProvider>
        <ContentHolder />
      </ChannelProvider>
      {/* <TrendingContent />
      <MainContent /> */}
    </>
  );
}
