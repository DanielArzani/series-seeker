import MainContent from './ui/MainContent/MainContent';
import TrustedChannels from './ui/TrustedChannels/TrustedChannels';

/**
 * The homepage
 * The root route (/)
 */
export default function Homepage() {
  return (
    <>
      <TrustedChannels />
      <MainContent />
    </>
  );
}
