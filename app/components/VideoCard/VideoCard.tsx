'use client';

import YouTube, { YouTubeProps } from 'react-youtube';

import Bookmark from '../Bookmark/Bookmark';
import { VideoType } from '@/app/lib/types/VideoType';

type VideoCardProps = {
  video: VideoType | null;
  vHeight?: string | number;
  vWidth?: string | number;
};

/**
 * Initializes a YouTube player iframe for a given video.
 * @param videos - A youtube video
 */
export default function VideoCard({
  video,
  vWidth = '100%',
  vHeight = '100%',
}: VideoCardProps) {
  if (video === null) return null;

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps['opts'] = {
    // change the width and height in the main-content-grid class to change the size of the video player
    height: vHeight,
    width: vWidth,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
    },
  };
  return <YouTube videoId={video.id} opts={opts} onReady={onPlayerReady} />;
}
