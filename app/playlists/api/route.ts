// app/api/playlists.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchQuery = request.nextUrl.searchParams.get('query');
  if (!searchQuery) {
    return NextResponse.json({ error: 'Query is required' }, { status: 400 });
  }

  const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=playlist&q=${encodeURIComponent(
    searchQuery
  )}&maxResults=50&key=${API_KEY}`;

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch playlists');
    }
    const data = await response.json();
    return NextResponse.json(data.items);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
