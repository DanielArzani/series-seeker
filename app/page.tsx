import MainContent from './ui/MainContent/MainContent';
import TrendingContent from './ui/TrendingContent/TrendingContent';

/**
 * The homepage
 * The root route (/)
 */
export default function Homepage() {
  return (
    <>
      <TrendingContent />
      <MainContent />
    </>
  );
}
