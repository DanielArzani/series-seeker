import VideoCard from '@/app/components/VideoCard/VideoCard';

/**
 * An un-ordered list of content that is currently popular
 */
export default function TrendingContent() {
  return (
    <section className='trending mb-6 md:mb-10'>
      <h2 className='header-large'>Trending</h2>

      <div className='flex items-center gap-10 overflow-auto'>
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
