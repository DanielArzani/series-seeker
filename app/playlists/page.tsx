'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getPlaylists } from '../lib/api/getPlaylists';
import { PlaylistType } from '../lib/types/PlaylistType';
import Image from 'next/image';

/**
 * Finds playlists that match the users search query
 */
export default function PlaylistsPage() {
  const searchQuery = useSearchParams();
  const [playlists, setPlaylists] = useState<PlaylistType[] | null>(null);

  useEffect(() => {
    const query = searchQuery.get('query');

    if (query === null) return;

    (async () => {
      const data = await getPlaylists(query);
      setPlaylists(data);
    })();
  }, [searchQuery]);

  if (playlists === null) return <div className='text-white playlists'></div>;

  if (playlists.length === 0)
    return <div className='text-white'>No playlists found</div>;

  return (
    <div className='text-white playlists'>
      <p>{playlists[0].snippet.title}</p>
      <p>{playlists[0].snippet.description}</p>
      <p>{playlists[0].snippet.channelTitle}</p>
      <Image
        src={playlists[0].snippet.thumbnails.high.url}
        width={playlists[0].snippet.thumbnails.high.width}
        height={playlists[0].snippet.thumbnails.high.height}
        alt=''
      />
    </div>
  );
}
