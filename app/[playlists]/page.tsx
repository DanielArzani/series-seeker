import Image from 'next/image';
import Link from 'next/link';
import SearchForm from '../ui/SearchForm/SearchForm';
import { formatDateForUser } from '../lib/utils/date';
import { getPlaylists } from '../lib/api/getPlaylists';

type PlaylistPageProps = {
  params: { playlists: string };
  searchParams: { query: string };
};

/**
 * Finds playlists that match the users search query
 */
export default async function PlaylistPage({
  searchParams,
}: PlaylistPageProps) {
  const playlists = await getPlaylists(searchParams.query);

  if (playlists === null) {
    return (
      <>
        <SearchForm />
        <div className='text-white playlists'></div>
      </>
    );
  }

  if (playlists.length === 0)
    return (
      <>
        <SearchForm />
        <div className='text-white'>No playlists found</div>
      </>
    );

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
