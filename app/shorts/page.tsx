import Image from 'next/image';
import { getVideo } from '../lib/api/getVideos';

/**
 * Shows a daily recommended youtube short
 */
export default async function ShortsPage() {
  // const video = await getVideo('ats1Jt6hD_8');
  // const video = await getVideo('agguCUUiqUk');
  // if (video === null) return;

  return (
    // boiler plate for styling so I don't have to make extra api requests
    <div className='text-white shorts'>
      <p>The Kingdom of God: A Rocky Road to Glory</p>
      <p>
        The kingdom of God, what is it like? Jesus taught that it is a rocky
        road to glory. It is filled with troubles, and yet we must not lose
        heart. This excerpt is from an older sermon of Don Johnson&apos;s
        called, &quot;The Big Picture&quot;. → Read transcript and listen to the
        full sermon (at bottom of page):
        https://illbehonest.com/kingdom-of-god-a-rocky-road-to-glory Follow
        I&apos;ll Be Honest on: WhatsApp -
        https://whatsapp.com/channel/0029Va9XSeR1SWsuk1Km6O1G X -
        https://twitter.com/illbehonest Facebook -
        https://www.facebook.com/illbehonest/ Instagram -
        https://www.instagram.com/illbehonestwillyou/ Spotify -
        https://open.spotify.com/show/0XLYu0mGs7jAsd0ErmwiFO Website -
        https://illbehonest.com/ Apple App -
        https://itunes.apple.com/us/app/ill-be-honest/id673403710?mt=8&amp;uo=4
        Android App -
        https://play.google.com/store/apps/details?id=com.subsplash.thechurchapp.honest&amp;pli=1
      </p>

      <Image
        alt=''
        src='https://i.ytimg.com/vi/agguCUUiqUk/hqdefault.jpg'
        width={480}
        height={360}
        loading='lazy'
      />
    </div>
    // <div className='text-white shorts'>
    //   <p>{video.snippet.title}</p>
    //   <p>{video.snippet.description}</p>
    //   <Image
    //     src={video.snippet.thumbnails.high.url}
    //     width={video.snippet.thumbnails.high.width}
    //     height={video.snippet.thumbnails.high.height}
    //     alt=''
    //   />
    // </div>
  );
}
