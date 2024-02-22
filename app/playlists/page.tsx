'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getPlaylists } from '../lib/api/getPlaylists';
import { PlaylistType } from '../lib/types/PlaylistType';
import Image from 'next/image';
import Link from 'next/link';
import { formatDateForUser } from '../lib/utils/date';
import SearchForm from '../ui/SearchForm/SearchForm';

/**
 * Finds playlists that match the users search query
 */
export default function PlaylistPage() {
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

  if (playlists === null) {
    return (
      <>
        <SearchForm />
        <div className='text-white playlists'></div>
      </>
    );
  }

  if (playlists.length === 0)
    return <div className='text-white'>No playlists found</div>;

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

  // if (playlists === null) return <div className='text-white playlists'></div>;

  // if (playlists.length === 0)
  //   return <div className='text-white'>No playlists found</div>;

  return (
    <>
      <SearchForm />
      <ul className='text-white playlists cards'>
        {playlists.map((playlist, index) => {
          return (
            <li key={index}>
              <Link
                href={`https://www.youtube.com/playlist?list=${playlist.id.playlistId}`}
                className='card'
                target='_blank'
              >
                <Image
                  src={playlist.snippet.thumbnails.high.url}
                  width={playlist.snippet.thumbnails.high.width}
                  height={playlist.snippet.thumbnails.high.height}
                  alt={playlist.snippet.title}
                />
                <div className='card__overlay'>
                  <div className='card__header'>
                    <svg
                      className='card__arc'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path />
                    </svg>
                    <div className='card__header-text'>
                      <h3 className='card__title'>{playlist.snippet.title}</h3>
                      <span className='card__status'>
                        Published At:{' '}
                        {formatDateForUser(playlist.snippet.publishedAt)}
                      </span>
                    </div>
                  </div>
                  <p className='card__description'>
                    {playlist.snippet.description}
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
