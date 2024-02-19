import thumbnailLarge from '@/public/thumbnails/earths-untouched/regular/large.jpg';
import movieIcon from '@/public/icon-category-movie.svg';
import Link from 'next/link';
import Bookmark from '../Bookmark/Bookmark';
import Image from 'next/image';

type VideoCardProps = {};

/**
 * This is a card that displays the thumbnail and related info of youtube videos as well as links to that channel
 */
export default function VideoCard({}: VideoCardProps) {
  return (
    <>
      <div className='rounded-md'>
        <Link href='/'>
          <div className='relative'>
            <Image
              className='rounded-md'
              src={thumbnailLarge}
              width={560}
              height={348}
              alt=''
            />

            <button className='bookmarkBtn flex items-center justify-center absolute right-5 top-5'>
              <Bookmark isActive={false} />

              <span className='sr-only'>Bookmark this</span>
            </button>
          </div>

          <div className='flex flex-col-reverse'>
            <h2 className='header-small'>Beyond Earth</h2>

            <p className='flex gap-1 font-light text-pureWhite text-xs opacity-75'>
              <span>2019</span>

              <span className='opacity-75 h-1 w-1 bg-pureWhite rounded-full self-center'></span>

              <span className='flex gap-1'>
                <Image src={movieIcon} alt='' width={12} height={12} />
                Movie
              </span>

              <span className='opacity-75 h-1 w-1 bg-pureWhite rounded-full self-center'></span>

              <span>PG</span>
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}
