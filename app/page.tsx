import MainContent from './ui/MainContent/MainContent';
import TrustedChannels from './ui/TrustedChannels/TrustedChannels';

/**
 * The homepage
 * The root route (/). Displays my recommendations for both youtube channels and videos
 */
export default function Homepage() {
  return (
    <>
      <TrustedChannels />
      <MainContent />
    </>
  );
}
