import VideoCard from '@/app/components/VideoCard/VideoCard';

/**
 * An un-ordered list of content that is currently popular
 */
export default function TrendingContent() {
  return (
    <div className='trending'>
      <h2 className='secondary-header'>Trending</h2>

      <VideoCard />
    </div>
  );
}
