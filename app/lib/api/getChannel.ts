type YouTubeChannelListResponse = {
  kind: 'youtube#channelListResponse';
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: YouTubeChannel[];
};

type YouTubeChannel = {
  kind: 'youtube#channel';
  etag: string;
  id: string;
  snippet: {
    title: string;
    description: string;
    customUrl: string;
    publishedAt: string;
    thumbnails: {
      default: YouTubeThumbnail;
      medium: YouTubeThumbnail;
      high: YouTubeThumbnail;
    };
    defaultLanguage?: string;
    localized: {
      title: string;
      description: string;
    };
  };
  contentDetails: {
    relatedPlaylists: {
      likes: string;
      uploads: string;
    };
  };
  statistics: {
    viewCount: string;
    subscriberCount: string;
    hiddenSubscriberCount: boolean;
    videoCount: string;
  };
};

type YouTubeThumbnail = {
  url: string;
  width: number;
  height: number;
};

const EXAMPLE_CHANNEL_ID = 'UCzpl6CJP6lo5vjsEAeIHnsg';

/**
 * Retrieves a YouTube channel's details by ID. Returns null if channel is not found or on error.
 * @param channelId - The YouTube channel's unique identifier.
 */
export async function getChannel(
  channelId: string
): Promise<YouTubeChannel | null> {
  const API_KEY = process.env.YOUTUBE_API_KEY;

  const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(
        `API Request Failed: ${response.status} ${response.statusText}`
      );
      throw new Error('Network response was not ok');
    }

    const data: YouTubeChannelListResponse = await response.json();
    if (data.items.length === 0) return null;

    // Since we are fetching details for a single channel, return the first item
    console.log(data.items[0]);
    return data.items[0];
  } catch (error) {
    console.error('Error fetching channel details:', error);
    return null;
  }
}
