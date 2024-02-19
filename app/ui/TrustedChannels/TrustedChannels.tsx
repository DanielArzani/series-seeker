import ChannelCard from '@/app/components/ChannelCard/ChannelCard';
import { getAllChannels } from '@/app/lib/api/getChannels';

/**
 * An un-ordered list of trusted youtube channels
 */
export default async function TrustedChannels() {
  const channels = await getAllChannels();

  return (
    <section className='trending mb-6 md:mb-10'>
      <h2 className='header-large'>Trusted Channels</h2>

      <div className='flex items-center gap-10 overflow-auto'>
        {channels.map((channel) => {
          return <ChannelCard channel={channel} key={channel?.id} />;
        })}
      </div>
    </section>
  );
}
