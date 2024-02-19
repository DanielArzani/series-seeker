import VideoCard from '@/app/components/VideoCard/VideoCard';

/**
 * The list of watched videos
 */
export default function MainContent() {
  return (
    <main className='mainContent'>
      <h2 className='header-large'>Recommended for you</h2>
      <div className='main-content-grid'>
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </main>
  );
}
