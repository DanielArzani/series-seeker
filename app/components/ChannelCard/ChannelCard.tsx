import Image from 'next/image';
import Link from 'next/link';

import movieIcon from '@/public/icon-category-movie.svg';
import Bookmark from '../Bookmark/Bookmark';
import { YouTubeChannel } from '@/app/lib/types/ChannelType';

type ChannelCardProps = {
  channel: YouTubeChannel | null;
};

/**
 * This is a card that displays the thumbnail and related info of channels that are trusted as well as links to that channel
 */
export default function ChannelCard({ channel }: ChannelCardProps) {
  if (!channel) return null;

  return (
    <div className=' relative rounded-md w-[240px] md:w-[470px] shrink-0'>
      <Link href='/'>
        <div className='w-[470px] h-[230px]'>
          <Image
            src={`${channel.snippet.thumbnails.high.url}`}
            alt=''
            className='rounded-md w-full h-full'
            width={`${channel.snippet.thumbnails.high.width}`}
            height={`${channel.snippet.thumbnails.high.height}`}
          />
          {/* <Image src={thumbnailLarge} alt='' className='rounded-md' /> */}
        </div>

        <button className='bookmarkBtn flex items-center justify-center absolute right-5 top-5'>
          <Bookmark isActive={false} />

          <span className='sr-only'>Bookmark this</span>
        </button>

        <div className='flex flex-col-reverse absolute bottom-2 left-2 md:bottom-5 md:left-5'>
          <h2 className='header-small'>{channel.snippet.title}</h2>

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
