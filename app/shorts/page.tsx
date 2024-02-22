import Image from 'next/image';
import { getVideo } from '../lib/api/getVideos';
import VideoCard from '../components/VideoCard/VideoCard';

/**
 * Shows a daily recommended youtube short
 */
export default async function ShortsPage() {
  const video = await getVideo('eFcnsacJuzU');
  if (video === null) return;

  return (
    <div className='text-white shorts grid content-center'>
      <VideoCard video={video} vWidth={'315px'} vHeight={'560px'} />
    </div>
  );
}
