import MainContent from './ui/MainContent/MainContent';
import TrendingContent from './ui/TrendingContent/TrendingContent';
import { getChannel } from './lib/api/getChannel';

/**
 * The homepage
 * The root route (/)
 */
export default function Homepage() {
  // const results = getChannel('UCzpl6CJP6lo5vjsEAeIHnsg');

  return (
    <>
      <TrendingContent />
      <MainContent />
    </>
  );
}
