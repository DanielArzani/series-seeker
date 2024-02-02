import Image from 'next/image';

import thumbnailLarge from '@/public/thumbnails/beyond-earth/trending/large.jpg';
import thumbnailSmall from '@/public/thumbnails/beyond-earth/trending/small.jpg';
import bookmark from '@/public/icon-bookmark-empty.svg';
import movieIcon from '@/public/icon-category-movie.svg';
import Link from 'next/link';
import Bookmark from '../Bookmark/Bookmark';

/**
 * This is the video card for the trending content
 */
export default function TrendingCard() {
  return (
    <div className=' relative rounded-md w-[240px] md:w-[470px] shrink-0'>
      <Link href='/'>
        <Image src={thumbnailLarge} alt='' className='rounded-md' />

        <button className='bookmarkBtn flex items-center justify-center absolute right-5 top-5'>
          <Bookmark isActive={false} />

          <span className='sr-only'>Bookmark this</span>
        </button>

        <div className='flex flex-col-reverse absolute bottom-2 left-2 md:bottom-5 md:left-5'>
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
  );
}
