import VideoCard from '@/app/components/VideoCard/VideoCard';

/**
 * The main content of the app which would include a list of content or a list of found content
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
