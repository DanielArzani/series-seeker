'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

/**
 * Finds playlists that match the users search query
 */
export default function PlaylistsPage() {
  const searchQuery = useSearchParams();

  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    async () => {};
  }, []);

  return <div className='text-white playlists'>Playlists Page</div>;
}
