import { VideoType } from '../types/VideoType';

type YouTubeApiResponseItem = {
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      high: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
  };
};

/**
 * An untested base function for fetching videos (currently from youtube)
 * @param channelId - The ID of the YouTube channel to fetch videos from
 */
export async function fetchVideos(channelId: string): Promise<VideoType[]> {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?channelId=${channelId}&part=snippet&type=video&key=YOUR_API_KEY`
  );
  const data = await response.json();

  return data.items.map((item: YouTubeApiResponseItem) => {
    return {
      title: item.snippet.title,
      thumbnail: {
        trending: {
          small: item.snippet.thumbnails.default.url, // Example
          large: item.snippet.thumbnails.high.url,
        },
        regular: {
          small: item.snippet.thumbnails.default.url,
          medium: item.snippet.thumbnails.medium.url,
          large: item.snippet.thumbnails.high.url,
        },
      },
      year: new Date(item.snippet.publishedAt).getFullYear(),
      category: 'Your Custom Category', // You need to define this
      isBookmarked: false, // Your logic to determine this
      isTrending: false, // Your logic to determine this
      linkToYoutubeVideo: `https://www.youtube.com/watch?v=${item.id.videoId}`,
    };
  });
}
