import MainContent from './ui/MainContent/MainContent';
import TrendingContent from './ui/TrendingContent/TrendingContent';

import { getChannel } from './lib/api/getChannel';
import Image from 'next/image';

/**
 * The homepage
 * The root route (/)
 */
export default async function Homepage() {
  const channel = await getChannel('UCzpl6CJP6lo5vjsEAeIHnsg');
  // const channel = await getChannel('UCrcrDXK620kopfSffPxrdTA');

  if (!channel) {
    return <h1>Channel not found</h1>;
  }

  return (
    <>
      {/* <div>
        <h2>{channel.snippet.title}</h2>
        <p>{channel.snippet.description}</p>
        <Image
          src={`${channel.snippet.thumbnails.default.url}`}
          alt='thumbnail'
          width={`${channel.snippet.thumbnails.default.width}`}
          height={`${channel.snippet.thumbnails.default.height}`}
        />
      </div> */}
      <TrendingContent />
      <MainContent />
    </>
  );
}
