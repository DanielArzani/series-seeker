import movieIcon from '@/public/icon-category-movie.svg';
import Link from 'next/link';
import Bookmark from '../Bookmark/Bookmark';
import Image from 'next/image';
import { VideoType } from '@/app/lib/types/VideoType';

type VideoCardProps = {
  video: VideoType | null;
};

/**
 * This is a card that displays the thumbnail and related info of youtube videos as well as links to that channel
 * @param videos - A youtube video
 */
export default function VideoCard({ video }: VideoCardProps) {
  if (video === null) return null;

  const { snippet } = video;
  const { title, description, thumbnails } = snippet;
  const { url } = thumbnails.high;

  return (
    <>
      <div className='rounded-md'>
        <Link href='/'>
          <div className='relative'>
            <Image
              className='rounded-md'
              src={url}
              width={560}
              height={348}
              alt=''
            />

            <button className='bookmarkBtn flex items-center justify-center absolute right-1 top-9'>
              <Bookmark isActive={false} />

              <span className='sr-only'>Bookmark this</span>
            </button>
          </div>

          <div className='flex flex-col-reverse'>
            <h2 className='header-small'>{title}</h2>
          </div>
        </Link>
      </div>
    </>
  );
}
