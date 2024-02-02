import MainContentCard from './MainContentCard';
import TrendingCard from './TrendingCard';

type VideoCardProps = {
  isTrending?: boolean;
};

/**
 * Displays the thumbnail and related information of a video in the style of a card. There are 2 types of video cards, trending and non-trending
 * @param isTrending - A boolean that determines whether the type of card is a trending card or not
 */
export default function VideoCard({ isTrending = false }: VideoCardProps) {
  if (isTrending) {
    return <TrendingCard />;
  }

  return <MainContentCard />;
}
