import Image from 'next/image';

import thumbnailLarge from '@/public/thumbnails/earths-untouched/regular/large.jpg';
import thumbnailSmall from '@/public/thumbnails/beyond-earth/trending/small.jpg';
import bookmark from '@/public/icon-bookmark-empty.svg';
import movieIcon from '@/public/icon-category-movie.svg';
import Link from 'next/link';
import Bookmark from '../Bookmark/Bookmark';
/**
 * This is the video card for the non-trending content
 */
export default function MainContentCard() {
  return (
    <div
      className={`relative rounded-md w-[164px] md:w-[280px] shrink-0 overflow-hidden`}
    >
      <Link href='/'>
        {/* Image wrapper should likely expand to parent's width and height */}

        <Image
          src={thumbnailLarge}
          alt=''
          objectFit='cover'
          className='rounded-md'
        />
      </Link>

      {/* Bookmark button */}
      <button className='absolute right-2 top-2'>
        <Bookmark isActive={false} />
      </button>

      {/* Text content */}
      <div className='absolute bottom-0 left-0 p-2 text-white'>
        <p className='text-[11px] leading-none'>
          <span>41994</span>
          <span> • </span>{' '}
          {/* Circle divider (use an actual dot or image as needed) */}
          <Image src={movieIcon} alt='' width={12} height={12} />
          <span> Action</span>
          <span> • </span> {/* Circle divider */}
          <span>PG</span>
        </p>
        <h2 className='text-[14px] leading-none font-medium'>
          Earths Untouched
        </h2>
      </div>
    </div>
  );
}
