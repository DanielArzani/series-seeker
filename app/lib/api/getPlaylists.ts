import { PlaylistType } from '../types/PlaylistType';

/**
 * Will return a list of playlists that match the users search query
 */
export async function getPlaylists(
  searchQuery: string
): Promise<PlaylistType[]> {
  const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=playlist&q=${searchQuery}&maxResults=50&key=${API_KEY}`;

  try {
    const response = await fetch(url);
    console.log('Fetching Playlists');

    if (!response.ok) {
      const responseBody = await response.text();
      throw new Error(
        `HTTP error! status: ${response.status}, status text: ${response.statusText}, response body: ${responseBody}`
      );
    }

    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error('Error fetching playlists:', error);
    // Rethrow the error so it can be caught and handled by the calling code
    throw error;
  }
}
