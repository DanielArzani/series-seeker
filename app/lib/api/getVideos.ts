import { VideoType } from '../types/VideoType';

type YouTubeVideoResponse = {
  items: VideoType[];
};

/**
 * Retrieves a YouTube video's details by ID. Returns null if video is not found or on error.
 * @param videoId - The YouTube video's ID
 */
export async function getVideo(videoId: string): Promise<VideoType | null> {
  const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

  const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.error(
        `API Request Failed: ${response.status} ${response.statusText}`
      );
      throw new Error('Network response was not ok');
    }

    const data: YouTubeVideoResponse = await response.json();
    if (data.items.length === 0) return null;

    // Since we are fetching details for a single video, return the first item
    return data.items[0];
  } catch (error) {
    console.error('Error fetching video details:', error);
    return null;
  }
}

const videoList = [
  'Ire7zOJiqHM',
  'RKXV12XzoU8',
  'oEbmYCED830',
  'EPwCHbn9TMA',
  'GWgT8E6e4i8',
  'mK1bLedXEbU',
  'U4UdgJaZoqI',
];

/**
 * Returns a list of youtube videos, if nothing is passed in then the default recommended ones are used
 * @param videoIds - The array of YouTube video IDs
 */
export async function getAllVideos(
  videoIds: string[] = videoList
): Promise<(VideoType | null)[]> {
  try {
    const videoPromises = videoIds.map(getVideo);
    const videos = await Promise.all(videoPromises);

    return videos.filter((video) => video !== null);
  } catch (error) {
    console.error('Error getting videos:', error);
    return [];
  }
}
