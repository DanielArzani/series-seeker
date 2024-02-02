import VideoCard from '@/app/components/VideoCard/VideoCard';

/**
 * An un-ordered list of content that is currently popular
 */
export default function TrendingContent() {
  return (
    <section className='trending'>
      <h2 className='header-large'>Trending</h2>

      <div className='flex gap-10 items-center overflow-auto'>
        <VideoCard isTrending={true} />
        <VideoCard isTrending={true} />
        <VideoCard isTrending={true} />
        <VideoCard isTrending={true} />
        <VideoCard isTrending={true} />
        <VideoCard isTrending={true} />
      </div>
    </section>
  );
}
