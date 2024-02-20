import {
  YouTubeChannel,
  YouTubeChannelListResponse,
} from '../types/ChannelType';

enum AllowedChannels {
  wretchedRadio = 'UCdlxWNzGGPKzQLMXkkyZkUQ',
  sermonIndex = 'UCrcrDXK620kopfSffPxrdTA',
  "i'll-be-honest" = 'UCzpl6CJP6lo5vjsEAeIHnsg',
  'impact-video-ministries' = 'UCTsRTfwxwj4_ep_MNM17lqg',
  'grace-to-you' = 'UCneKpMu9SFGlt2usTdAI75A',
  'toronto-church-on-the-rock' = 'UCLCi0Vpg6Lv5zOx4wHcEY2g',
}

/**
 * Retrieves a YouTube channel's details by ID. Returns null if channel is not found or on error. This is a list of curated choices, meaning you must pick one of the allowed channels.
 * @param channelName - The YouTube channel's name
 */
export async function getChannel(
  channelName: keyof typeof AllowedChannels
): Promise<YouTubeChannel | null> {
  const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const channelId = AllowedChannels[channelName];

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
    // console.log(data.items[0]);
    return data.items[0];
  } catch (error) {
    console.error('Error fetching channel details:', error);
    return null;
  }
}

/**
 * Gets all allowed channels from the youtube API
 * @returns An array of YouTube channels
 */
export async function getAllChannels(): Promise<(YouTubeChannel | null)[]> {
  const channelNames = Object.keys(AllowedChannels) as Array<
    keyof typeof AllowedChannels
  >;
  const channelPromises = channelNames.map(async (channelName) => {
    try {
      return await getChannel(channelName);
    } catch (error) {
      console.error(`Error fetching channel ${channelName}:`, error);
      return null;
    }
  });
  return await Promise.all(channelPromises);
}
