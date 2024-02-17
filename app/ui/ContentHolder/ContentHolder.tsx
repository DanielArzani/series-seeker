'use client';

import { useChannel } from '@/app/contexts/channelContext';
import Image from 'next/image';

export default function ContentHolder() {
  const channel = useChannel();

  if (channel === null) return;

  return (
    <div>
      <h2>{channel.snippet.title}</h2>
      <p>{channel.snippet.description}</p>
      <Image
        src={`${channel.snippet.thumbnails.default.url}`}
        alt='thumbnail'
        width={`${channel.snippet.thumbnails.default.width}`}
        height={`${channel.snippet.thumbnails.default.height}`}
      />
    </div>
  );
}
