import Image from 'next/image';
import Link from 'next/link';

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
    <>
      <div className=' relative rounded-md md:w-[470px]'>
        <Link
          target='_blank'
          href={`https://www.youtube.com/${channel.snippet.customUrl}`}
        >
          <div className='w-[470px] h-[230px]'>
            <Image
              src={`${channel.snippet.thumbnails.high.url}`}
              alt=''
              className='rounded-md w-full h-full'
              width={`${channel.snippet.thumbnails.high.width}`}
              height={`${channel.snippet.thumbnails.high.height}`}
            />
          </div>

          <button className='bookmarkBtn flex items-center justify-center absolute right-5 top-5'>
            <Bookmark isActive={false} />

            <span className='sr-only'>Bookmark this</span>
          </button>
          <div className='flex flex-col-reverse absolute -bottom-6 left-2 md:-bottom-10 md:left-5'>
            <h2 className='header-small'>{channel.snippet.title}</h2>
          </div>
        </Link>
      </div>
    </>
  );
}
