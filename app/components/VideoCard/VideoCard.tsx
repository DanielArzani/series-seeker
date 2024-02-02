import MainContentCard from './MainContentCard';
import TrendingCard from './TrendingCard';

/**
 * Displays the thumbnail and related information of a video in the style of a card. There are 2 types of video cards, trending and non-trending
 */
export default function VideoCard() {
  return (
    <>
      <TrendingCard />
      {/* <MainContentCard /> */}
    </>
  );
}
