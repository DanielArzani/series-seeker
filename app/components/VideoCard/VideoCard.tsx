import Image from 'next/image';

import thumbnailLarge from '@/public/thumbnails/beyond-earth/trending/large.jpg';
import thumbnailSmall from '@/public/thumbnails/beyond-earth/trending/small.jpg';
import bookmark from '@/public/icon-bookmark-empty.svg';
import movieIcon from '@/public/icon-category-movie.svg';

/**
 * Displays the thumbnail and related information of a video in the style of a card
 */
export default function VideoCard() {
  return (
    <div className=' relative rounded-md w-[240px] md:w-[470px] shrink-0'>
      <Image src={thumbnailLarge} alt='' className='rounded-md' />

      <button className='rounded-full bg-bookmarkBtnBg p-2 flex items-center justify-center absolute right-5 top-5'>
        <Image src={bookmark} alt='' />
        <span className='sr-only'>Bookmark this</span>
      </button>

      <div className='flex flex-col-reverse absolute bottom-2 left-2 md:bottom-5 md:left-5'>
        <h2 className='header-small'>Beyond Earth</h2>

        <p className='flex gap-1 font-light text-textPrimary text-xs opacity-75'>
          <span>2019</span>

          <span className='opacity-75 h-1 w-1 bg-textPrimary rounded-full self-center'></span>

          <span className='flex gap-1'>
            <Image src={movieIcon} alt='' width={12} height={12} />
            Movie
          </span>

          <span className='opacity-75 h-1 w-1 bg-textPrimary rounded-full self-center'></span>

          <span>PG</span>
        </p>
      </div>
    </div>
  );
}