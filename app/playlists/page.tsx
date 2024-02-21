'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getPlaylists } from '../lib/api/getPlaylists';
import { PlaylistType } from '../lib/types/PlaylistType';
import Image from 'next/image';

/**
 * Finds playlists that match the users search query
 */
export default function PlaylistPage() {
  {
    const searchQuery = useSearchParams();
    const [playlists, setPlaylists] = useState<PlaylistType[] | null>(null);

    // useEffect(() => {
    //   const query = searchQuery.get('query');

    //   if (query === null) return;

    //   (async () => {
    //     const data = await getPlaylists(query);
    //     setPlaylists(data);
    //   })();
    // }, [searchQuery]);

    //! This attempt at using route handlers to fetch data was unsuccessful
    // useEffect(() => {
    //   const query = searchQuery.get('query');
    //   if (!query) return;

    //   const fetchData = async () => {
    //     const response = await fetch(`/api/playlists`);
    //     if (response.ok) {
    //       const data = await response.json();
    //       setPlaylists(data);
    //     } else {
    //       // Handle errors or set an error state as needed
    //       console.error('Failed to fetch playlists');
    //     }
    //   };

    //   fetchData();
    // }, [searchQuery]);

    if (playlists === null) return <div className='text-white playlists'></div>;

    if (playlists.length === 0)
      return <div className='text-white'>No playlists found</div>;

    //PLAYLIST URL EXAMPLE: https://www.youtube.com/playlist?list=PLUH8bFeIEPCHzVYaD_W3CY0cyMJUZ_Js0

    // Direct URL to the image
    const imageUrl = 'https://i.ytimg.com/vi/oRdbvGgPPiw/hqdefault.jpg';
    return (
      <>
        {/* place holder so that I can style without making more api requests */}
        {/* <div className='text-white playlists'>
          <p>Chill Beach - Surf Music</p>

          <p>Violeta Bocage</p>

          <Image src={imageUrl} alt='' width={480} height={360} />
        </div> */}

        <div className='text-white playlists'>
          {playlists.map((playlist, index) => (
            <div key={index}>
              <p>{playlist.snippet.title}</p>
              <p>{playlist.snippet.description}</p>
              <p>{playlist.snippet.channelTitle}</p>
              <Image
                src={playlist.snippet.thumbnails.high.url}
                width={playlist.snippet.thumbnails.high.width}
                height={playlist.snippet.thumbnails.high.height}
                alt={playlist.snippet.title}
              />
            </div>
          ))}
        </div>
      </>
    );
  }
}
