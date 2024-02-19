import VideoCard from '@/app/components/VideoCard/VideoCard';
import { getAllVideos } from '@/app/lib/api/getVideos';

/**
 * The list of watched videos
 */
export default async function MainContent() {
  const videos = await getAllVideos();

  return (
    <main className='mainContent'>
      <h2 className='header-large'>Recommended for you</h2>
      <div className='main-content-grid'>
        {videos.map((video) => {
          return <VideoCard key={video?.id} video={video} />;
        })}
      </div>
    </main>
  );
}
