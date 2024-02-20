'use client';

import YouTube, { YouTubeProps } from 'react-youtube';

import Bookmark from '../Bookmark/Bookmark';
import { VideoType } from '@/app/lib/types/VideoType';

type VideoCardProps = {
  video: VideoType | null;
};

/**
 * Initializes a YouTube player iframe for a given video.
 * @param videos - A youtube video
 */
export default function VideoCard({ video }: VideoCardProps) {
  if (video === null) return null;

  const { snippet } = video;
  const { title, description, thumbnails } = snippet;
  const { url } = thumbnails.high;

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps['opts'] = {
    // change the width and height in the main-content-grid class to change the size of the video player
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
    },
  };
  return (
    <>
      <YouTube videoId={video.id} opts={opts} onReady={onPlayerReady} />
    </>
  );
}
