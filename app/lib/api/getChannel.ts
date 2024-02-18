import {
  YouTubeChannel,
  YouTubeChannelListResponse,
} from '../types/ChannelType';

const EXAMPLE_CHANNEL_ID = 'UCzpl6CJP6lo5vjsEAeIHnsg';

// TODO: Use a proper cache library, this is only for saving on api requests during development
let cache: { [key: string]: YouTubeChannel | null } = {};

/**
 * Retrieves a YouTube channel's details by ID. Returns null if channel is not found or on error.
 * @param channelId - The YouTube channel's unique identifier.
 */
export async function getChannel(
  channelId: string,
  bypassCache: boolean = false
): Promise<YouTubeChannel | null> {
  // If the channel is in the cache and bypassCache is not true, return it
  if (!bypassCache && cache[channelId]) {
    console.log(`Serving ${channelId} from cache`);
    return cache[channelId];
  }

  const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

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

    // Store the channel in the cache
    cache[channelId] = data.items[0];
    console.log(`Storing ${channelId} in cache`);

    // Since we are fetching details for a single channel, return the first item
    // console.log(data.items[0]);
    return data.items[0];
  } catch (error) {
    console.error('Error fetching channel details:', error);
    return null;
  }
}
